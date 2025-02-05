
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './InteractiveHeatmap.css';

const Heatmap: React.FC = () => {
  const [theme, setTheme] = useState('light');

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
