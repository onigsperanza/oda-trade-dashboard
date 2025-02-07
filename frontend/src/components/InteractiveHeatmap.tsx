
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './InteractiveHeatmap.css';

const Heatmap: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const { i18n } = useTranslation();
  
  useEffect(() => {
    const iframe = document.createElement('iframe');
    iframe.src = '/interactive_heatmap_with_index.html';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    document.getElementById('heatmap-container')?.appendChild(iframe);
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`heatmap-page ${theme}`}>
      <h1>{i18n.language === 'ko' ? '인터랙티브 히트맵' : 'Interactive Heatmap'}</h1>
      <header className="header">
        <Link to="/" className="home-button">🏠 Home</Link>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? '🌙 Dark Mode' : '🌞 Light Mode'}
        </button>
      </header>
      <div id="heatmap-container" className="heatmap-container"></div>
    </div>
  );
};

export default Heatmap;
