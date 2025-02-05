import React, { useEffect, useState } from "react";
import axios from "axios";
import RF from '../assets/rf.png';
import LR from '../assets/lr.png';
import './CorrelationAnalysis.css';

const PredictionResults = () => {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('light');

  const toggleLanguage = () => setLanguage(prev => (prev === 'en' ? 'ko' : 'en'));
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  const handleImageClick = (imgSrc: string) => {
    window.open(imgSrc, '_blank', 'noopener,noreferrer');
  };

  const content = {
    en: {
      title: 'Prediction Results',
      home: 'Home',
      rfExport: 'Export/Import Prediction based on ODA Outstanding (Random Forest)',
      rfOda: 'ODA Outstanding Prediction based on Trade Volume (Random Forest)',
      lrExport: 'Export/Import Prediction based on ODA Outstanding (Linear Regression)',
      lrOda: 'ODA Outstanding Prediction based on Trade Volume (Linear Regression)',
      mse: 'Mean Squared Error (MSE)',
      coef: 'Coefficients',
    },
    ko: {
      title: '예측 결과',
      home: '홈',
      rfExport: 'ODA 총액을 기반으로 한 수출/수입 예측 (랜덤 포레스트)',
      rfOda: '무역량을 기반으로 한 ODA 총액 예측 (랜덤 포레스트)',
      lrExport: 'ODA 총액 기반으로 한 수출/수입 예측 (선형 회귀)',
      lrOda: '무역량을 기반으로 한 ODA 총액 예측 (선형 회귀)',
      mse: '평균 제곱 오차 (MSE)',
      coef: '계수',
    },
  };

  const data = {
    rfExport: { mse: 12345.67, coef: 'N/A (Random Forest doesn’t provide coefficients)' },
    rfOda: { mse: 9876.54, coef: 'N/A (Random Forest doesn’t provide coefficients)' },
    lrExport: { mse: 4567.89, coef: '0.85 (Export), 0.65 (Import)' },
    lrOda: { mse: 6543.21, coef: '0.75 (Export), 0.55 (Import)' },
  };

  return (
    <div className={`prediction-container ${theme}`}>
      <div className="header">
        <button onClick={toggleLanguage} className="toggle-button">
          {language === 'en' ? 'KO' : 'EN'}
        </button>
        <h1>{content[language].title}</h1>
        <button onClick={toggleTheme} className="toggle-button">
          {theme === 'light' ? '🌙 Dark Mode' : '🌞 Light Mode'}
        </button>
      </div>

      <div className="results-grid">
        <div className="result-card" onClick={() => handleImageClick(RF)}>
          <h2>{content[language].rfExport}</h2>
          <img src={RF} alt="Random Forest Prediction" />
          <p><strong>{content[language].mse}:</strong> {data.rfExport.mse}</p>
          <p><strong>{content[language].coef}:</strong> {data.rfExport.coef}</p>
        </div>

        <div className="result-card" onClick={() => handleImageClick(RF)}>
          <h2>{content[language].rfOda}</h2>
          <img src={RF} alt="Random Forest Prediction" />
          <p><strong>{content[language].mse}:</strong> {data.rfOda.mse}</p>
          <p><strong>{content[language].coef}:</strong> {data.rfOda.coef}</p>
        </div>

        <div className="result-card" onClick={() => handleImageClick(LR)}>
          <h2>{content[language].lrExport}</h2>
          <img src={LR} alt="Linear Regression" />
          <p><strong>{content[language].mse}:</strong> {data.lrExport.mse}</p>
          <p><strong>{content[language].coef}:</strong> {data.lrExport.coef}</p>
        </div>

        <div className="result-card" onClick={() => handleImageClick(LR)}>
          <h2>{content[language].lrOda}</h2>
          <img src={LR} alt="Linear Regression" />
          <p><strong>{content[language].mse}:</strong> {data.lrOda.mse}</p>
          <p><strong>{content[language].coef}:</strong> {data.lrOda.coef}</p>
        </div>
      </div>

      <button className="home-button" onClick={() => window.location.href = '/'}>
        {content[language].home}
      </button>
    </div>
  );
};

export default PredictionResults;