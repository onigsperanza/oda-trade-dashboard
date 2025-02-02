import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useTranslation } from 'react-i18next';

import './DataIntroduction.css'; // Add any custom styling
import engMarkdown from '../assets/ODA_Trade_Overview_EN_Beautiful.md';
import korMarkdown from '../assets/ODA_Trade_Overview_KO_Beautiful.md';

const DataIntroduction: React.FC = () => {
  const { i18n } = useTranslation();
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      const markdownFile = i18n.language === 'ko' ? korMarkdown : engMarkdown;
      const response = await fetch(markdownFile);
      const text = await response.text();
      setMarkdownContent(text);
    };

    fetchMarkdown();
  }, [i18n.language]);

  return (
    <div className="data-introduction-container">
      <h1>{i18n.language === 'ko' ? '데이터 소개' : 'Data Introduction'}</h1>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>

      <div className="charts-section">
        <h2>{i18n.language === 'ko' ? '시각화' : 'Visualizations'}</h2>
        <img src="/output.png" alt="Top 10 Donor Countries" />
        <img src="/output (1).png" alt="Top 10 Recipient Countries" />
        <img src="/output (2).png" alt="Top 10 ODA Purposes" />
        <img src="/output (3).png" alt="Top 10 Exporting Countries" />
        <img src="/output (4).png" alt="Top 10 Importing Countries" />
        <img src="/output (6).png" alt="Top 10 Positive Trade Balances" />
        <img src="/output (5).png" alt="Top 10 Negative Trade Balances" />
      </div>
    </div>
  );
};

export default DataIntroduction;
