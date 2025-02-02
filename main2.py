from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

app = FastAPI()

# Enable CORS for frontend interaction
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the datasets
oda_data = pd.read_csv('oda_data.csv')
trade_data = pd.read_csv('Fully_Translated_Country_Names_With_Columns.csv')

@app.get("/")
def read_root():
    return {"message": "Welcome to the ODA & Trade Data API"}

# 1. Endpoint for Grouping Data Dynamically
@app.get("/groupby/")
def group_by(column: str = Query(...), dataset: str = Query('oda')):
    data = oda_data if dataset == 'oda' else trade_data
    if column not in data.columns:
        return {"error": f"Column '{column}' not found in the {dataset} dataset."}

    grouped_data = data.groupby(column).size().reset_index(name='Count')
    return grouped_data.to_dict(orient='records')

# 2. Endpoint for Filtering Data
@app.get("/filter/")
def filter_data(column: str, value: str, dataset: str = 'oda'):
    data = oda_data if dataset == 'oda' else trade_data
    if column not in data.columns:
        return {"error": f"Column '{column}' not found in the {dataset} dataset."}

    filtered_data = data[data[column] == value]
    return filtered_data.to_dict(orient='records')

# 3. Endpoint for Aggregating Data
@app.get("/aggregate/")
def aggregate_data(group_by_column: str, agg_column: str, agg_func: str = 'sum', dataset: str = 'oda'):
    data = oda_data if dataset == 'oda' else trade_data
    if group_by_column not in data.columns or agg_column not in data.columns:
        return {"error": "Invalid columns provided for aggregation."}

    aggregated_data = data.groupby(group_by_column)[agg_column].agg(agg_func).reset_index()
    return aggregated_data.to_dict(orient='records')

# 4. Endpoint to Retrieve Available Columns
@app.get("/columns/")
def get_columns(dataset: str = 'oda'):
    data = oda_data if dataset == 'oda' else trade_data
    return {"columns": data.columns.tolist()}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
