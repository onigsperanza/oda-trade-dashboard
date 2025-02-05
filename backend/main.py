from fastapi import FastAPI, HTTPException, Query
from fastapi.responses import JSONResponse, FileResponse, HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import geopandas as gpd
from bokeh.plotting import figure
from bokeh.embed import file_html
from bokeh.resources import CDN
from scipy.stats import pearsonr
import json
import os

app = FastAPI()

# Enable CORS for all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load datasets with error handling
try:
    trade_df = pd.read_csv('Fully_Translated_Country_Names_With_Columns.csv', low_memory=False)
except FileNotFoundError:
    raise HTTPException(status_code=500, detail="Trade data file not found.")
except Exception as e:
    raise HTTPException(status_code=500, detail=f"Error loading trade data: {str(e)}")

try:
    oda_df = pd.read_csv('oda_data.csv', low_memory=False)
except FileNotFoundError:
    raise HTTPException(status_code=500, detail="ODA data file not found.")
except Exception as e:
    raise HTTPException(status_code=500, detail=f"Error loading ODA data: {str(e)}")

# Preprocess and merge datasets
try:
    trade_df['Country Name'] = trade_df['Country Name'].str.lower().str.strip()
    oda_df['recipient_name'] = oda_df['recipient_name'].str.lower().str.strip()

    # Correct mismatched country names
    country_name_corrections = {
        'türkiye': 'turkey',
        "lao people's democratic republic": 'laos',
        'syrian arab republic': 'syria',
        'sao tome and principe': 'sao tome & principe',
        'timor-leste': 'east timor',
        'guinea-bissau': 'guinea bissau',
        'cabo verde': 'cape verde',
        'congo': 'republic of the congo',
        'west bank and gaza strip': 'palestine liberation organization',
        'saint vincent and the grenadines': 'saint vincent & grenadines'
    }
    oda_df['recipient_name'] = oda_df['recipient_name'].replace(country_name_corrections)

    # Merge datasets
    merged_df = pd.merge(trade_df, oda_df, left_on='Country Name', right_on='recipient_name', how='inner')
    
    trade_df = trade_df.fillna(0)
    oda_df = oda_df.fillna(0)

    # Aggregate data
    country_trade_oda = merged_df.groupby('Country Name').agg({
        'Export Value Total': 'sum',
        'Import Value Total': 'sum',
        'usd_outstanding': 'sum'
    }).reset_index()
except Exception as e:
    raise HTTPException(status_code=500, detail=f"Error during preprocessing: {str(e)}")

@app.get("/")
def root():
    return {"message": "Welcome to the ODA and Trade API!"}

@app.get("/trade_data")
def get_trade_data():
    try:
        trade_data = trade_df
        return JSONResponse(content=trade_data.to_dict(orient='records'))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching trade data: {str(e)}")

@app.get("/oda_data")
def get_oda_data():
    try:
        oda_data = oda_df
        return JSONResponse(content=oda_data.to_dict(orient='records'))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching ODA data: {str(e)}")

@app.get("/merged_data")
def get_merged_data():
    try:
        return JSONResponse(content=merged_df.to_dict(orient='records'))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching merged data: {str(e)}")

@app.get("/aggregated_data")
def get_aggregated_data():
    try:
        return JSONResponse(content=country_trade_oda.to_dict(orient='records'))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching aggregated data: {str(e)}")

@app.get("/heatmap")
def get_heatmap():
    try:
        if not os.path.exists('interactive_heatmap_with_index.html'):
            raise FileNotFoundError("Heatmap file not found.")
        return FileResponse('interactive_heatmap_with_index.html')
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching heatmap: {str(e)}")

@app.get("/trend_analysis")
def trend_analysis():
    try:
        p = figure(title="Trade Trends Over Time", x_range=['2013-2017', '2017-2022'], width=800, height=400)
        p.line(['2013-2017', '2017-2022'], [trade_df['Export Value 2013-2017'].sum(), trade_df['Export Value 2017-2022'].sum()], legend_label="Exports", line_width=2)
        p.line(['2013-2017', '2017-2022'], [trade_df['Import Value 2013-2017'].sum(), trade_df['Import Value 2017-2022'].sum()], legend_label="Imports", line_width=2, color="orange")

        html = file_html(p, CDN, "Trade Trends")
        return HTMLResponse(content=html)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating trend analysis: {str(e)}")

@app.get("/correlation_analysis")
def correlation_analysis():
    try:
        export_corr, _ = pearsonr(country_trade_oda['usd_outstanding'], country_trade_oda['Export Value Total'])
        import_corr, _ = pearsonr(country_trade_oda['usd_outstanding'], country_trade_oda['Import Value Total'])

        p = figure(title="Correlation Between ODA and Trade", width=800, height=400)
        p.circle(country_trade_oda['usd_outstanding'], country_trade_oda['Export Value Total'], size=10, color="navy", alpha=0.5, legend_label=f"Exports Correlation: {export_corr:.2f}")
        p.circle(country_trade_oda['usd_outstanding'], country_trade_oda['Import Value Total'], size=10, color="orange", alpha=0.5, legend_label=f"Imports Correlation: {import_corr:.2f}")

        html = file_html(p, CDN, "Correlation Analysis")
        return HTMLResponse(content=html)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating correlation analysis: {str(e)}")

@app.get("/country_insights")
def country_insights():
    try:
        top_countries = country_trade_oda.nlargest(5, 'usd_outstanding')

        p = figure(title="Top 5 Countries by ODA Outstanding", x_range=top_countries['Country Name'], width=800, height=400)
        p.vbar(x=top_countries['Country Name'], top=top_countries['usd_outstanding'], width=0.9)

        html = file_html(p, CDN, "Country Insights")
        return HTMLResponse(content=html)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating country insights: {str(e)}")

# ========================= Added Data Analysis Endpoints with Error Handling ========================= #

@app.get("/groupby/")
def group_by(column: str = Query(...), dataset: str = Query('oda')):
    try:
        data = oda_df if dataset == 'oda' else trade_df
        if column not in data.columns:
            raise HTTPException(status_code=400, detail=f"Column '{column}' not found in the {dataset} dataset.")

        grouped_data = data.groupby(column).size().reset_index(name='Count')
        return grouped_data.to_dict(orient='records')
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error during groupby operation: {str(e)}")

@app.get("/filter/")
def filter_data(column: str, value: str, dataset: str = 'oda'):
    try:
        data = oda_df if dataset == 'oda' else trade_df
        if column not in data.columns:
            raise HTTPException(status_code=400, detail=f"Column '{column}' not found in the {dataset} dataset.")

        filtered_data = data[data[column] == value]
        return filtered_data.to_dict(orient='records')
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error during filter operation: {str(e)}")

@app.get("/aggregate/")
def aggregate_data(group_by_column: str, agg_column: str, agg_func: str = 'sum', dataset: str = 'oda'):
    try:
        data = oda_df if dataset == 'oda' else trade_df
        if group_by_column not in data.columns or agg_column not in data.columns:
            raise HTTPException(status_code=400, detail="Invalid columns provided for aggregation.")

        aggregated_data = data.groupby(group_by_column)[agg_column].agg(agg_func).reset_index()
        return aggregated_data.to_dict(orient='records')
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error during aggregation: {str(e)}")

@app.get("/columns/")
def get_columns(dataset: str = 'oda'):
    try:
        data = oda_df if dataset == 'oda' else trade_df
        return {"columns": data.columns.tolist()}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching columns: {str(e)}")

# =============================================================================== #

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
