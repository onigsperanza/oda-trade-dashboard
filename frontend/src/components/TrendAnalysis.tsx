import React, { useState } from 'react';
import './TrendAnalysis.css';
import pcaPlot from '../assets/pca.png';
import tradeTrend from '../assets/trend.png';
import odaTrend from '../assets/trendoda.png';
import sectorDeepDive from '../assets/sect.png';
import correlationMatrix from '../assets/corr.png';

const AllAnalysisResults = () => {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('light');

  const toggleLanguage = () => setLanguage(prev => (prev === 'en' ? 'ko' : 'en'));
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  const handleImageClick = (imgSrc: string) => {
    window.open(imgSrc, '_blank', 'noopener,noreferrer');
  };

  const content = {
    en: {
      title: 'Comprehensive Data Analysis Results',
      home: 'Home',
      multidimensional: 'Multidimensional Analysis (PCA)',
      tradeTrend: 'Trend Analysis of South Korean Trade',
      odaTrend: 'Trend Analysis of Total ODA Outstanding',
      sectorDive: 'Sector-wise Deep Dive in ODA',
      correlation: 'Correlation Analysis between Trade and ODA',
      explanation: {
        pca: 'PCA reveals clusters based on trade and ODA relationships.',
        trade: 'Trade volumes fluctuate over the years, highlighting key growth periods.',
        oda: 'Total ODA outstanding has shown consistent growth, peaking in 2021.',
        sector: 'Top sectors receiving ODA are visualized here.',
        correlation: 'Strong positive correlation between trade volumes and ODA.',
      },
    },
    ko: {
      title: '종합 데이터 분석 결과',
      home: '홈',
      multidimensional: '다차원 분석 (PCA)',
      tradeTrend: '한국 무역 동향 분석',
      odaTrend: 'ODA 총액 동향 분석',
      sectorDive: 'ODA 분야별 심층 분석',
      correlation: '무역과 ODA 간의 상관 분석',
      explanation: {
        pca: 'PCA는 무역과 ODA 관계에 따른 클러스터를 보여줍니다.',
        trade: '무역량의 변동이 두드러지는 성장 시기를 보여줍니다.',
        oda: '총 ODA 총액은 2021년에 최고치를 기록했습니다.',
        sector: 'ODA를 가장 많이 받은 주요 분야를 시각화했습니다.',
        correlation: '무역량과 ODA 간의 강한 양의 상관관계가 있습니다.',
      },
    },
  };

  return (
    <div className={`analysis-container ${theme}`}>
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
        {/* Multidimensional Analysis */}
        <div className="result-card" onClick={() => handleImageClick(pcaPlot)}>
          <h2>{content[language].multidimensional}</h2>
          <img src={pcaPlot} alt="PCA Multidimensional Analysis" />
          <p>{content[language].explanation.pca}</p>
        </div>

        {/* Trade Trend Analysis */}
        <div className="result-card" onClick={() => handleImageClick(tradeTrend)}>
          <h2>{content[language].tradeTrend}</h2>
          <img src={tradeTrend} alt="Trade Trend Analysis" />
          <p>{content[language].explanation.trade}</p>
        </div>

        {/* ODA Trend Analysis */}
        <div className="result-card" onClick={() => handleImageClick(odaTrend)}>
          <h2>{content[language].odaTrend}</h2>
          <img src={odaTrend} alt="ODA Trend Analysis" />
          <p>{content[language].explanation.oda}</p>
        </div>

        {/* Sector-wise Deep Dive */}
        <div className="result-card" onClick={() => handleImageClick(sectorDeepDive)}>
          <h2>{content[language].sectorDive}</h2>
          <img src={sectorDeepDive} alt="Sector Deep Dive" />
          <p>{content[language].explanation.sector}</p>
        </div>

        {/* Correlation Analysis */}
        <div className="result-card" onClick={() => handleImageClick(correlationMatrix)}>
          <h2>{content[language].correlation}</h2>
          <img src={correlationMatrix} alt="Correlation Analysis" />
          <p>{content[language].explanation.correlation}</p>
        </div>
      </div>

      <button className="home-button" onClick={() => window.location.href = '/'}>
        {content[language].home}
      </button>
    </div>
  );
};

export default AllAnalysisResults;
