import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "./ui";
import "./Home.css";

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { darkMode, toggleTheme } = useTheme();

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ko" : "en");
  };

  return (
    <div className={`home-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="overlay">
        
        {/* Navbar */}
        <header className="navbar">
          <h1 className="navbar-title">{t("welcome")}</h1>
          <nav className="menu">
            <Link to="/data-manipulation" className="menu-link">{t("dataManipulation")}</Link>
            <Link to="/trend" className="menu-link">{t("trendAnalysis")}</Link>
            <Link to="/correlation" className="menu-link">{t("correlationAnalysis")}</Link>
            <Link to="/heatmap" className="menu-link">{t("interactiveHeatmap")}</Link>
          </nav>
        </header>

        {/* Centered Banner */}
        <div className="banner">
          <h2 className="banner-title">{t("welcome")}</h2>
          <p className="banner-subtitle">{t("exploreInsights")}</p>
          <Link to="/menu">
            <button className="start-button">{t("getStarted")}</button>
          </Link>
        </div>

        {/* Footer */}
        <footer className="footer">
          <p className="footer-text">Created by Doeon KIM UNDP 2025</p>
        </footer>

        {/* Single Instance of Language and Theme Toggle Buttons */}
        <button onClick={switchLanguage} className="language-toggle">
          🌐 {i18n.language === "en" ? "KO" : "EN"}
        </button>

        <button onClick={toggleTheme} className="theme-toggle">
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

      </div>
    </div>
  );
};

export default Home;
