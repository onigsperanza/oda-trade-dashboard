import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './DataManipulation.css';

const DataManipulation: React.FC = () => {
  const { i18n } = useTranslation();
  const [dataset, setDataset] = useState('oda');
  const [columns, setColumns] = useState<string[]>([]);
  const [operation, setOperation] = useState('view');
  const [selectedColumn, setSelectedColumn] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [aggColumn, setAggColumn] = useState('');
  const [aggFunc, setAggFunc] = useState('sum');
  const [result, setResult] = useState<any[]>([]);
  // Language Toggle
  const handleLanguageToggle = () => {
    i18n.changeLanguage(i18n.language === 'ko' ? 'en' : 'ko');
  };

  // Dark Mode Toggle
  const [darkMode, setDarkMode] = useState(false);
  const handleThemeToggle = () => {
    setDarkMode(prev => !prev);
  };

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 50; // Number of rows per page

  // Fetch available columns based on dataset
  useEffect(() => {
    axios.get(`http://localhost:8000/columns/?dataset=${dataset}`)
      .then(res => {
        setColumns(res.data.columns);
        if (res.data.columns.length > 0) {
          setSelectedColumn(res.data.columns[0]); // ✅ Auto-select first column
        }
      })
      .catch(err => console.error(err));
  }, [dataset]);

  // Fetch Data when dataset or page changes
  useEffect(() => {
    axios.get(`http://localhost:8000/${dataset}_data?page=${currentPage}&limit=${rowsPerPage}`)
      .then(res => setResult(res.data))
      .catch(err => console.error(err));
  }, [dataset, currentPage]);

  // Handle Operation Submission
  const handleSubmit = () => {
    let apiUrl = '';
    if (operation === 'view') {
      apiUrl = `http://localhost:8000/${dataset}_data?page=${currentPage}&limit=${rowsPerPage}`;
    } else if (operation === 'groupby') {
      apiUrl = `http://localhost:8000/groupby/?column=${selectedColumn}&dataset=${dataset}`;
    } else if (operation === 'filter') {
      apiUrl = `http://localhost:8000/filter/?column=${selectedColumn}&value=${filterValue}&dataset=${dataset}`;
    } else if (operation === 'aggregate') {
      apiUrl = `http://localhost:8000/aggregate/?group_by_column=${selectedColumn}&agg_column=${aggColumn}&agg_func=${aggFunc}&dataset=${dataset}`;
    }

    axios.get(apiUrl)
      .then(res => setResult(res.data))
      .catch(err => console.error(err));
  };

  // CSV Export Function
  const exportToCSV = () => {
    const csvContent = [
      Object.keys(result[0]).join(','), // CSV Header
      ...result.map(row => Object.values(row).join(',')) // CSV Rows
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${operation}_result.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`data-manipulation-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1>{i18n.language === 'ko' ? '데이터 보기 및 조작 인터페이스' : 'Data View and Manipulation Interface'}</h1>
      <div className="controls">
        <button onClick={handleLanguageToggle}>
          {i18n.language === 'ko' ? 'English' : '한국어'}
        </button>
        <button onClick={handleThemeToggle}>
          {darkMode ? '🌙 Dark Mode' : '☀ Light Mode'}
        </button>
        {/* Select Dataset */}
        <label>{i18n.language === 'ko' ? '데이터셋 선택' : 'Select Dataset'}: </label>
        <select value={dataset} onChange={e => setDataset(e.target.value)}>
          <option value="oda">ODA</option>
          <option value="trade">Trade</option>
          <option value="aggregated">Aggregated</option>
          <option value="aggregated_year">Aggregated (Year)</option>
        </select>

        {/* Select Operation */}
        <label>{i18n.language === 'ko' ? '작업 선택' : 'Select Operation'}: </label>
        <select value={operation} onChange={e => setOperation(e.target.value)}>
          <option value="view">{i18n.language === 'ko' ? '데이터 보기' : 'View Dataset'}</option>
          <option value="groupby">{i18n.language === 'ko' ? '그룹화' : 'Group By'}</option>
          <option value="filter">{i18n.language === 'ko' ? '필터' : 'Filter'}</option>
          <option value="aggregate">{i18n.language === 'ko' ? '집계' : 'Aggregate'}</option>
        </select>

        {/* Select Column for Grouping or Filtering */}
        {(operation !== 'view') && (
          <>
            <label>{i18n.language === 'ko' ? '컬럼 선택' : 'Select Column'}: </label>
            <select value={selectedColumn} onChange={e => setSelectedColumn(e.target.value)}>
              {columns.map(col => <option key={col} value={col}>{col}</option>)}
            </select>
          </>
        )}

        {/* Filter or Aggregate Options */}
        {operation === 'filter' && (
          <input
            type="text"
            placeholder={i18n.language === 'ko' ? '필터 값 입력' : 'Enter Filter Value'}
            value={filterValue}
            onChange={e => setFilterValue(e.target.value)}
          />
        )}

        {operation === 'aggregate' && (
          <>
            <label>{i18n.language === 'ko' ? '집계 컬럼' : 'Aggregate Column'}: </label>
            <select value={aggColumn} onChange={e => setAggColumn(e.target.value)}>
              {columns.map(col => <option key={col} value={col}>{col}</option>)}
            </select>

            <label>{i18n.language === 'ko' ? '집계 함수' : 'Aggregate Function'}: </label>
            <select value={aggFunc} onChange={e => setAggFunc(e.target.value)}>
              <option value="sum">Sum</option>
              <option value="mean">Mean</option>
              <option value="count">Count</option>
            </select>
          </>
        )}

        <button onClick={handleSubmit}>{i18n.language === 'ko' ? '실행' : 'Run'}</button>
      </div>

      {/* Display Results in Table */}
      <div className="results">
        <h2>{i18n.language === 'ko' ? '결과' : 'Results'}</h2>
        {result.length > 0 && (
          <table>
            <thead>
              <tr>
                {Object.keys(result[0]).map((key, index) => (
                  <th key={index}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {result.map((row, idx) => (
                <tr key={idx}>
                  {Object.values(row).map((value, index) => (
                    <td key={index}>{String(value)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Pagination Controls */}
        <div className="pagination-controls">
          <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
            ◀ {i18n.language === 'ko' ? '이전 페이지' : 'Previous'}
          </button>
          <span>{i18n.language === 'ko' ? '  ' : '  '}    </span>
          <span>{i18n.language === 'ko' ? '페이지' : 'Page'} {currentPage}</span>
          <span>{i18n.language === 'ko' ? '  ' : '  '}    </span>
          <button onClick={() => setCurrentPage(prev => prev + 1)} disabled={result.length < rowsPerPage}>
            {i18n.language === 'ko' ? '다음 페이지' : 'Next'} ▶
          </button>
        </div>

        {/* Export CSV Button */}
        {result.length > 0 && (
          <button onClick={exportToCSV}>
            {i18n.language === 'ko' ? 'CSV로 내보내기' : 'Export as CSV'}
          </button>
        )}
      </div>

      {/* Return to Home Button */}
      <div className="home-button">
        <Link to="/">
          <button>{i18n.language === 'ko' ? '홈으로 돌아가기' : 'Return to Home'}</button>
        </Link>
      </div>
    </div>
  );
};

export default DataManipulation;
