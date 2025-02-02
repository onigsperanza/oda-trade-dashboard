import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "./ui";
import "./DataIntroduction.css";

const DataIntroduction: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { darkMode, toggleTheme } = useTheme();

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ko" : "en");
  };

  return (
    <div className={`data-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="overlay">
        {/* Header with Home Button */}
        <header className="navbar">
          <Link to="/menu" className="home-button">⬅ {t("menuTitle")}</Link>
          <h1 className="data-title">{t("dataIntroduction")}</h1>
        </header>

        {/* Data Explanation Section */}
        <div className="data-content">
          <h2>{t("dataOverviewTitle")}</h2>
          <p>{t("dataOverviewText")}</p>

          <h2>{t("analysisMethodsTitle")}</h2>
          <p>{t("analysisMethodsText")}</p>

          <h2>{t("insightsTitle")}</h2>
          <p>{t("insightsText")}</p>
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

export default DataIntroduction;
