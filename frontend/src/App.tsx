import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { GoogleOAuthProvider, googleLogout } from "@react-oauth/google";
import { useTranslation } from "react-i18next";
import Home from "./components/Home";
import TrendAnalysis from "./components/TrendAnalysis";
import CorrelationAnalysis from "./components/CorrelationAnalysis";
import InteractiveHeatmap from "./components/InteractiveHeatmap";
import { ThemeProvider } from "./components/ui";
import "./i18n";
import Menu from "./components/Menu";
import DataIntroduction from "./components/DataIntroduction";
import DataManipulation from "./components/DataManipulation";
import GoogleLoginPage from "./components/GoogleLoginPage";

declare global {
  interface Window {
    google: any;
  }
}

const clientId = "11106896947-gdmbm7frcfdespq6gfg9cdbl7ovad42h.apps.googleusercontent.com";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { i18n } = useTranslation();
  const [user, setUser] = useState<any>(null);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ko" : "en");
  };
  
  useEffect(() => {
    const storedUser = localStorage.getItem("googleUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const decodeJWT = (token: string) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      return JSON.parse(atob(base64));
    } catch (error) {
      console.error("Error decoding JWT:", error);
      return null;
    }
  };

  const handleLogin = (response: any) => {
    if (response.credential) {
      const decodedUser = decodeJWT(response.credential);
      setUser(decodedUser);
      localStorage.setItem("googleUser", JSON.stringify(decodedUser)); // Store user info
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("googleUser");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <ThemeProvider darkMode={darkMode}>
        <Router>
          <div className="app" style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column" }}>
            {!user ? (
              <GoogleLoginPage onLogin={handleLogin} />
            ) : (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/data-manipulation" element={<DataManipulation />} />
                <Route path="/trend" element={<TrendAnalysis />} />
                <Route path="/correlation" element={<CorrelationAnalysis />} />
                <Route path="/heatmap" element={<InteractiveHeatmap />} />
                <Route path="/data" element={<DataIntroduction />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            )}
          </div>
        </Router>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
