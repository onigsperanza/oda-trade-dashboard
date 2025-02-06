# 🌍 ODA & Trade Dashboard

## 📌 **Project Overview**
The **ODA & Trade Dashboard** is a data analytics platform designed to analyze and visualize the relationship between **Official Development Assistance (ODA)** and **trade flows**. It includes **data filtering features, time-series forecasting, correlation analysis, sector-wise deep dives**, and **interactive heatmaps** to provide comprehensive insights into trade and aid data. it also provides many auxillary functions like OAuth authentication, multilingual support, dark/light mode and csv export.


This project includes:
- **FastAPI Backend** for data processing & API services
- **React Frontend** with TypeScript for visualization & user interaction
- **Dockerized Deployment** for easy setup & scalability
- **Google OAuth Authentication** for secure access

---

## **Directory Structure**

```
/oda-trade-dashboard
├── /backend
│   ├── main.py
│   ├── requirements.txt
│   ├── Dockerfile  # Ensure this Dockerfile is correctly placed in the backend directory.
│   ├── trade.csv
│   ├── oda_data.csv
│   └── /data
│       ├── ne_110m_admin_0_countries.shp
│       ├── ne_110m_admin_0_countries.shx
│       ├── ne_110m_admin_0_countries.dbf
│       └── ne_110m_admin_0_countries.prj
├── /frontend
│   ├── /src
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── i18n.ts
│   │   └── /components
│   │       ├── ui.ts
│   ├── Dockerfile  # Ensure this Dockerfile is correctly placed in the frontend directory.
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── docker-compose.yml  # Double-check this file to confirm that service configurations match the project structure.
└── README.md
```

---

## 🚀 **Setup Instructions**

### 📌. Prerequisites**

- Install **Docker** and **Docker Compose** on your system.

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/oda-trade-dashboard.git
cd oda-trade-dashboard
```

### **2️⃣ Install Dependencies** (Proceed this only if you want to run at local)
#### 📌 Backend (FastAPI)
```sh
cd backend
pip install -r requirements.txt
```

#### 📌 Frontend (React + TypeScript)
```sh
cd frontend
npm install
```

### **3️⃣ Run the Application**
#### 🏗 **Run with Docker**
```sh
docker-compose up --build
```

#### 🏗 **Run without Docker**
**Backend**
```sh
cd backend
uvicorn main:app --host 0.0.0.0 --port 8000 --reload

or just

py main.py

```
**Frontend**
```sh
cd frontend
npm run dev    // recommended

or

npm vite --host
```
Also I uploaded docker image of both front and backend in my dockerhub link below just in case.
https://hub.docker.com/repository/docker/doeonkim95/oda-trade-dashboard-frontend/general
https://hub.docker.com/repository/docker/doeonkim95/oda-trade-dashboard-backend/general
You can just load them from my dockerhub and execute container using docker-compose.yaml in this folder.
---

## 🔑 **Authentication**
This project includes **Google OAuth authentication**, requiring users to sign in before accessing the homepage.

### ❗ **Facing Issues with Google OAuth?**
If you encounter issues with **Google OAuth login**, you can use the **alternative version without authentication** in the **`nogoogleoauth`** branch: (And Please note that once you login with your Google account, it doesn't require you to login again. 
if you see login page again, you have to access it in chrome incognito mode.)

```sh
git checkout nogoogleoauth
```

This branch removes the Google login requirement so you can access the dashboard without signing in.

---

## 📌 **API Documentation**
### **Base URL:** `http://localhost:8000`

### **Endpoints**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/trade_data` | Returns full Trade dataset |
| `GET` | `/oda_data` | Returns full ODA dataset |
| `GET` | `/merged_data` | Returns merged Trade & ODA dataset |
| `GET` | `/aggregated_data` | Returns aggregated ODA & Trade data by country |
| `GET` | `/trend_analysis` | Returns trade trends over time (However integrated analysis result into frontend due to memory issue)|
| `GET` | `/correlation_analysis` | Computes correlation between ODA and trade (However integrated analysis result into frontend due to memory issue) |
| `GET` | `/country_insights` | Provides insights into top ODA recipients (However integrated analysis result into frontend due to memory issue) |
| `GET` | `/heatmap` | Interactive ODA & Trade Heatmap |
| `POST` | `/export_csv` | Exports manipulated data as CSV |
| `GET` | `/groupby/` | Groups dataset by a specified column |
| `GET` | `/filter/` | Filters dataset by a specified column value |
| `GET` | `/aggregate/` | Aggregates dataset using a specified function (sum, mean, etc.) |
| `GET` | `/columns/` | Returns available columns in a dataset |

#### 🔹 **GroupBy API**
```http
GET /groupby/?column={column_name}&dataset={dataset_type}
```
Groups the dataset by the specified column and returns the count of occurrences.

#### 🔹 **Filter API**
```http
GET /filter/?column={column_name}&value={filter_value}&dataset={dataset_type}
```
Filters the dataset where the given column matches the specified value.

#### 🔹 **Aggregate API**
```http
GET /aggregate/?group_by_column={group_by_column}&agg_column={agg_column}&agg_func={function}&dataset={dataset_type}
```
Aggregates data by applying a function (e.g., `sum`, `mean`) to a specified column after grouping.

#### 🔹 **Columns API**
```http
GET /columns/?dataset={dataset_type}
```
Returns all available columns in the selected dataset.

---

## 📊 **Analysis Methodologies**
### 🔹 **Trend & Time-Series Analysis**
- Examines **historical trade & ODA trends** over time
- Uses **predictive models (Random Forest, Linear Regression)** to forecast future trends

### 🔹 **Statistical Correlation Analysis**
- **Pearson correlation coefficient** used to measure relationships between ODA & trade flows

### 🔹 **Multidimensional Analysis**
- Analyzes various **ODA factors**, including:
  - **Sector-wise distribution**
  - **ODA allocation trends**
  - **Geographical aid distribution**

### 🔹 **Sector-Wise Deep Dive**
- Identifies **ODA contributions by industry**
- Evaluates the impact of **trade & aid on development sectors**

### 🔹 **Predictive Analysis**
- Uses **Machine Learning models (Random Forest, Linear Regression)** to predict:
  - **Export & Import trends based on ODA**
  - **ODA Outstanding predictions based on Trade Volume**

---

## 📊 **Dataset Choice Justification**
This project integrates **two datasets**:
1. **ODA Dataset**: Official Development Assistance data from OECD, containing:
   - Donor & recipient countries
   - Financial commitments & disbursements
   - Purpose codes & sector allocations

2. **Trade Dataset**: Bilateral trade data from South Korea, including:
   - Export & import values per country
   - Historical trade balance trends
   - Aggregated trade statistics

Both datasets were merged using **country identifiers** to enable cross-analysis of **trade & ODA flows**.

🔹 **Why Trade Data? **

Trade data was chosen because it provides economic indicators that can help understand the correlation of Official Development Assistance (ODA) of recipient countries with their trade volumn with South Korea. By analyzing trade relationships, we can assess whether ODA stimulates economic growth, enhances trade partnerships, or affects trade imbalances.

📊 Economic Development & ODA Impact

Trade is one of the key indicators of economic self-sufficiency and growth.
If a country receives a significant amount of ODA, we expect to see changes in its trade volume, suggesting that aid may support industrialization or economic activity.

🔁 Bilateral Trade & Development Policy

South Korea, as an ODA donor country, often provides aid to nations that are important trade partners.
Analyzing trade data alongside ODA data helps evaluate whether South Korea’s ODA policies are aligned with its trade strategies.

📈 Predictive Analysis of ODA & Trade

By combining time-series trade data with ODA data, we can apply machine learning models to predict:
How ODA affects a country's future trade volume.
Whether a country's trade volume with South Korea can predict its ODA outstanding balance.

🌍 Geopolitical & Sector-Wise Implications

Certain ODA projects focus on infrastructure, industry, and trade facilitation (e.g., roads, ports, and export development programs).
Analyzing sector-wise trade data can highlight whether ODA in specific industries (agriculture, manufacturing, energy, etc.) correlates with increased trade activity.


## 📌 AI Usage

🛠 AI Tools Used

We utilized various AI tools to accelerate development, including:

GitHub Copilot – Assisted in writing and completing code snippets efficiently.
ChatGPT o3 – Provided in-depth explanations, debugging help, boilerplate code, and optimized backend/frontend logic.
Claude – supplemental

📝 Prompting Strategy

Our AI prompting strategy focused on iterative refinement and specificity:

Backend Development (FastAPI)

Asked AI to generate and optimize API endpoints, ensuring proper request handling and JSON responses.
Used clarifying prompts to debug FastAPI errors and improve exception handling.

Frontend Development (React + TypeScript)

Requested AI help in optimizing UI components, including Google OAuth integration, language toggling (i18n), and dark/light mode styling.
Asked AI to ensure the functions and screen scale responsively.

---

## 💡 **Features & Functions Developed**
✔ **FastAPI Backend**
✔ **React Frontend with TypeScript**
✔ **Google OAuth Authentication**
✔ **Interactive Heatmaps**
✔ **Time-Series Forecasting**
✔ **Correlation & Statistical Analysis**
✔ **Data Manipulation (GroupBy, Filter, Aggregate) with responsive table**
✔ **Downloadable CSV Reports**
✔ **Multidimensional & Sector-Wise Insights**
✔ **Dockerized Deployment**
✔ **Dark/Light Mode UI Toggle**
✔ **Multi-Language Support (English/Korean)**
✔ **Typescript implementation**


---

## 🛠 **Contributors**
👨‍💻 Doeon Kim
🔹 Current Affiliation : IADB (Inter American Development Bank)
🔹 Specialization: AI and statistical modelling, cloud-based solutions backend development, frontend frameworks, developing, and deploying AI systems
🔹 Email: powerspeeder@gmail.com
---

## 🏗 **Future Improvements**
🔹 Implement **Deep Learning models** for trade forecasting  
🔹 Develop **automated ODA impact assessments**  
🔹 Extend **data sources for broader trade analysis**  
🔹 Integrate **real-time ODA policy tracking**  

---

## 💻 **How to Contribute**
1️⃣ Fork the repository  
2️⃣ Create a new branch (`feature-new`)  
3️⃣ Make changes & commit  
4️⃣ Push your branch & create a **Pull Request**  

---
## 💻 **Disclaimer**

Sometimes depending on memory status in your PC, importing entire oda data in data mainpulation tab can fail with Error code: Out of Memory

---

## 📜 **License**
MIT License - Free to use & modify.
