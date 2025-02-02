import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useTranslation } from "react-i18next";
import Home from "./components/Home";
import TrendAnalysis from "./components/TrendAnalysis";
import CorrelationAnalysis from "./components/CorrelationAnalysis";
import CountryInsights from "./components/CountryInsights";
import InteractiveHeatmap from "./components/InteractiveHeatmap";
import { ThemeProvider } from "./components/ui";
import "./i18n";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { i18n } = useTranslation();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ko" : "en");
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <ThemeProvider darkMode={darkMode}>
        <Router>
          <div className="app">
            <nav className="navbar">
              <button onClick={switchLanguage}>🌐 {i18n.language === "en" ? "KO" : "EN"}</button>
              <button onClick={toggleTheme}>{darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}</button>
            </nav>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/trend" element={<TrendAnalysis />} />
              <Route path="/correlation" element={<CorrelationAnalysis />} />
              <Route path="/country-insights" element={<CountryInsights />} />
              <Route path="/heatmap" element={<InteractiveHeatmap />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
