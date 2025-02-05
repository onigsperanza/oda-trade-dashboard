# ODA & Trade Dashboard

This is a full-stack web application for analyzing Official Development Assistance (ODA) and trade data using FastAPI (backend) and React (frontend). The app includes interactive visualizations, OAuth authentication, multilingual support, dark/light mode, and data filtering features.

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

## **Setup & Execution Instructions**

### **1. Prerequisites**

- Install **Docker** and **Docker Compose** on your system.
- Set up a **Google OAuth Client ID** from [Google Cloud Console](https://console.cloud.google.com/).

### **2. Update OAuth Configuration**

In `frontend/src/App.tsx`, replace the placeholder with your Google OAuth Client ID:

```typescript
<GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
```

### **3. Build and Run the Application**

1. Open your terminal and navigate to the project directory.

2. Build and start the containers using Docker Compose:

```bash
docker-compose up --build
```

3. Access the app in your browser:

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:8000](http://localhost:8000)

### **4. Stopping the Application**

To stop the application, press **Ctrl + C** in your terminal, then run:

```bash
docker-compose down
```


or if you want execute app without docker, just run
```bash
cd backend
py main.py
```
```bash
cd frontend
npm run dev
or
npm run build
npm install -g serve
serve -s build
```
likewise execute both backend and frontend separately and sequentially.
and samely you can acess at

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:8000](http://localhost:8000)

Also I uploaded docker image of both front and backend in my dockerhub link below just in case


---

## **Features**

1. **Trend Analysis, predictive analysis**: Examine how trade and ODA values have evolved over time.
2. **Correlation and multidimensional analysis**: Analyze relationships between ODA amounts and trade statistics.
3. **Data view and manipulation and Export**: YOU can Search, filter, view and manipulate dataset in this platform and export it as a csv format.
4. **Interactive Heatmap(Geographical)**: Clickable Bokeh heatmap for detailed country data.
5. **OAuth Authentication**: Secure login via Google OAuth.
6. **Dark/Light Mode**: Toggle between themes.
7. **Multilingual Support**: Switch between Korean and English.

---


## **Contact**

For any questions or issues, feel free to reach out!

Doeon Kim
