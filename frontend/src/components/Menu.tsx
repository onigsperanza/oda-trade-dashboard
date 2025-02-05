import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "./ui";
import "./Menu.css";

const Menu: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { darkMode, toggleTheme } = useTheme();

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ko" : "en");
  };

  return (
    <div className={`menu-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="overlay">
        {/* Header with Home Button */}
        <header className="navbar">
          <Link to="/" className="home-button">🏠 {t("home")}</Link>
          <h1 className="menu-title">{t("menuTitle")}</h1>
        </header>

        {/* Menu Buttons */}
        <div className="menu-buttons">
          <Link to="/data">
            <button className="menu-button">{t("dataIntroduction")}</button>
          </Link>
          <Link to="/data-manipulation">
            <button className = "menu-button">{i18n.language === 'ko' ? '데이터 조작' : 'Data Manipulation'}</button>
          </Link>
          <Link to="/trend">
            <button className="menu-button">{t("trendAnalysis")}</button>
          </Link>
          <Link to="/correlation">
            <button className="menu-button">{t("correlationAnalysis")}</button>
          </Link>
          <Link to="/country-insights">
            <button className="menu-button">{t("countryInsights")}</button>
          </Link>
          <Link to="/heatmap">
            <button className="menu-button">{t("interactiveHeatmap")}</button>
          </Link>
        </div>

        {/* Language and Theme Toggle */}
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

export default Menu;
