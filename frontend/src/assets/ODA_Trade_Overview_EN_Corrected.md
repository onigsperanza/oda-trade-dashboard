
# ODA and Trade Data Overview

## Data Sources
- **ODA Dataset**: Collected from the **OECD**, this dataset details official development assistance flows by donor, recipient, and purpose.
- **Trade Dataset**: Sourced from the **South Korea Customs Service (관세청)**, providing comprehensive trade statistics, including import/export values and trade balances.

## Sample Data

### ODA Dataset (First 2 Rows)
| Donor Name | Recipient Name | Purpose Code | Purpose Description     | Disbursement | Commitment | Year | Channel      |
|------------|----------------|--------------|-------------------------|--------------|------------|------|--------------|
| Donor A    | Country X      | 11110        | Education Support       | 500,000 USD  | 550,000 USD| 2020 | Bilateral    |
| Donor B    | Country Y      | 12220        | Health Infrastructure   | 750,000 USD  | 800,000 USD| 2021 | Multilateral |

### Trade Dataset (First 2 Rows)
| Country Name                   | Export Value 2013-2017 | Export Weight 2013-2017 | Import Value 2013-2017 | Import Weight 2013-2017 | Balance 2013-2017 | Export Value 2017-2022 | Export Weight 2017-2022 | Import Value 2017-2022 | Import Weight 2017-2022 | Balance 2017-2022 | Export Value Total | Export Weight Total | Import Value Total | Import Weight Total | Balance Total  |
|--------------------------------|------------------------|-------------------------|------------------------|-------------------------|-------------------|------------------------|-------------------------|------------------------|-------------------------|-------------------|--------------------|---------------------|--------------------|---------------------|----------------|
| China \(People's Republic of\)   | 749,595,397 USD        | 223,481,600,000 kg      | 615,806,414 USD        | 180,709,800,000 kg      | 133,788,983 USD    | 694,834,074 USD        | 206,716,500,000 kg      | 448,225,627 USD        | 211,113,100,000 kg      | 246,608,447 USD    | 1,444,429,471 USD  | 430,198,100,000 kg  | 1,064,032,041 USD  | 391,822,900,000 kg  | 380,397,430 USD |
| United States                  | 425,847,310 USD        | 92,076,000,000 kg       | 333,237,191 USD        | 249,977,000,000 kg      | 92,610,119 USD     | 337,241,502 USD        | 86,111,670,000 kg       | 224,784,893 USD        | 120,364,500,000 kg      | 112,456,609 USD    | 763,088,812 USD    | 178,187,670,000 kg  | 558,022,084 USD    | 370,341,500,000 kg  | 205,066,728 USD  |

## Important Columns

### ODA Dataset
- **Donor Name**: The country or organization providing the official development assistance.
- **Recipient Name**: The country receiving the official development assistance.
- **Purpose Code**: A numeric code representing the specific purpose of the aid.
- **Purpose Description**: A description of what the aid is intended for.
- **Disbursement**: The actual amount of aid money disbursed to the recipient.
- **Commitment**: The pledged amount of aid, which may differ from disbursement.
- **Year**: The year the aid was disbursed or committed.
- **Channel**: The medium through which the aid was delivered (e.g., bilateral, multilateral).

### Trade Dataset
- **Country Name**: The trading partner country.
- **Export Value Total**: The total export value in USD.
- **Import Value Total**: The total import value in USD.
- **Balance Total**: The total trade balance (export - import) in USD.
- **Export Weight Total**: The total weight of exported goods.
- **Import Weight Total**: The total weight of imported goods.
- **Year**: The year of the trade transaction.
- **HS Code Description**: The description of the product category based on the Harmonized System (HS) codes.

## Data Aggregation
The datasets were merged using common country identifiers to explore relationships between ODA flows and trade volumes.

## Descriptive Statistics
### ODA Data
- **Top Donors**: Donor name (EN), Greece, New Zealand, Australia, Korea, Japan, United States, Canada, Lithuania, Estonia
- **Top Recipients**: Türkiye, Syrian Arab Republic, Middle East, regional, Armenia, Azerbaijan, Georgia, Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan
- **Common Purposes of ODA**: Rural development, Trade Policies & Regulations, DESCRIPTION, Forestry, Fishing, Forestry services, Forestry research, Forestry education/training, Fuelwood/charcoal, Forestry development

### Trade Data
- **Top Exporting Countries**: China \(People's Republic of\), United States, Viet Nam, Hong Kong, Japan, Taiwan, Singapore, India, Australia, Mexico
- **Top Importing Countries**: China \(People's Republic of\), United States, Japan, Saudi Arabia, Australia, Germany, Taiwan, Viet Nam, Qatar, Russian Federation
- **Countries with Highest Positive Trade Balances**: China \(People's Republic of\), Hong Kong, Viet Nam, United States, India, Singapore, Philippines, Mexico, Marshall Islands, Turkey
- **Countries with Highest Negative Trade Balances**: Japan, Saudi Arabia, Qatar, Germany, Australia, Kuwait, Russian Federation, United Arab Emirates, Iraq, France

## Insights
By combining these datasets, we can investigate:
1. Whether higher ODA correlates with increased trade volumes.
2. Regional differences in aid and trade relationships.
3. Trends over time in ODA allocations and trade flows.

## Visualizations
- Top 10 Donor Countries
- Top 10 Recipient Countries
- Top 10 ODA Purposes
- Top 10 Exporting Countries
- Top 10 Importing Countries
- Top 10 Positive Trade Balances
- Top 10 Negative Trade Balances
