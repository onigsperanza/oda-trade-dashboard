import React, { useState }  from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './DataIntroduction.css';

const DataIntroduction: React.FC = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ko' : 'en');
  };
  const handleBackToHome = () => {
    navigate('/');
  };

  const englishContent = (
    <div className="content">
      <h1>ODA and Trade Data Overview</h1>

      <h2>Data Sources</h2>
      <ul>
        <li><strong>ODA Dataset</strong>: Collected from the <strong>OECD</strong>, this dataset details official development assistance flows by donor, recipient, and purpose.</li>
        <li><strong>Trade Dataset</strong>: Sourced from the <strong>South Korea Customs Service (관세청)</strong>, this dataset provides comprehensive trade statistics, including import and export values, trade balances, and partner country information.</li>
      </ul>

      <h2>Sample Data</h2>
      <h3>ODA Dataset (First Row)</h3>
      <table>
        <thead>
          <tr>
            <th>Project Number</th><th>Year</th><th>Donor Name</th><th>Agency Name</th>
            <th>CRS ID</th><th>Recipient Name</th><th>Channel Code</th><th>Nature of Submission</th>
            <th>Bi/Multi</th><th>Finance Type</th><th>Repay Date 1</th><th>Repay Date 2</th>
            <th>USD Interest</th><th>USD Outstanding</th><th>USD Arrears Principal</th>
            <th>USD Arrears Interest</th><th>USD Outstanding Next Year</th><th>USD Interest Next Year</th>
            <th>Recipient Code</th><th>Nature of Submission Disbursement</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20132000001</td><td>2013</td><td>Republic of Korea</td><td>NaN</td>
            <td>2013001195</td><td>Cameroon</td><td>10000.0</td><td>New commitment</td>
            <td>Bilateral</td><td>ODA</td><td>NaN</td><td>NaN</td><td>0</td><td>0</td><td>0</td><td>0</td>
            <td>0</td><td>0</td><td>229.0</td><td>Annual split</td>
          </tr>
        </tbody>
      </table>

      <h3>Trade Data (First row)</h3>
      <table>
        <thead>
          <tr>
            <th>Country Name</th><th>Export Value 2013</th><th>Import Value 2013</th>
            <th>Export Value 2014</th><th>Import Value 2014</th><th>Export Value 2015</th>
            <th>Import Value 2015</th><th>Export Value 2016</th><th>Import Value 2016</th>
            <th>Export Value 2017</th><th>Export Value 2020</th><th>Import Value 2020</th>
            <th>Export Value 2021</th><th>Import Value 2021</th><th>Export Value 2022</th>
            <th>Import Value 2022</th><th>Export Value 2023</th><th>Import Value 2023</th>
            <th>Export Value Total</th><th>Import Value Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>China (People's Republic of)</td><td>145,869,498.0 USD</td><td>83,052,877.0 USD</td>
            <td>145,287,701.0 USD</td><td>90,082,226.0 USD</td><td>137,123,934.0 USD</td>
            <td>90,250,275.0 USD</td><td>124,432,941.0 USD</td><td>86,980,135.0 USD</td>
            <td>142,120,000.0 USD</td><td>132,565,445.0 USD</td><td>108,884,645.0 USD</td>
            <td>162,912,974.0 USD</td><td>138,628,127.0 USD</td><td>155,789,389.0 USD</td>
            <td>154,576,314.0 USD</td><td>124,817,682.0 USD</td><td>142,857,338.0 USD</td>
            <td>1,569,247,152 USD</td><td>1,206,889,379 USD</td>
          </tr>
        </tbody>
      </table>

      <h2>Important Columns</h2>
      <h3>ODA Dataset</h3>
      <ul>
        <li><strong>Donor Name</strong>: The country or organization providing the official development assistance.</li>
        <li><strong>Recipient Name</strong>: The country receiving the official development assistance.</li>
        <li><strong>Purpose Code</strong>: A numeric code representing the specific purpose of the aid.</li>
        <li><strong>Disbursement</strong>: The actual amount of aid money disbursed to the recipient.</li>
        <li><strong>Commitment</strong>: The pledged amount of aid, which may differ from disbursement.</li>
        <li><strong>Year</strong>: The year the aid was disbursed or committed.</li>
        <li><strong>Channel</strong>: The medium through which the aid was delivered (e.g., bilateral, multilateral).</li>
      </ul>

      <h3>Trade Dataset</h3>
      <ul>
        <li><strong>Country Name</strong>: The trading partner country.</li>
        <li><strong>Export Value Total</strong>: The total export value in USD.</li>
        <li><strong>Import Value Total</strong>: The total import value in USD.</li>
      </ul>

      <h2>Data Aggregation</h2>
        <ul>
          <li>The datasets were merged using common country identifiers to explore relationships between ODA flows and trade volumes.</li>
        </ul>

      <h2>Descriptive Statistics</h2>

      <h3>ODA Data</h3>
      <ul>
        <li><strong>Top Recipients</strong>: Türkiye, Syrian Arab Republic, Middle East, regional, Armenia, Azerbaijan, Georgia, Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan</li>
        <li><strong>Common Purposes of ODA</strong>: Rural development, Trade Policies & Regulations, DESCRIPTION, Forestry, Fishing, Forestry services, Forestry research, Forestry education/training, Fuelwood/charcoal, Forestry development</li>
      </ul>

      <h3>Trade Data</h3>
      <ul>
        <li><strong>Top Exporting Countries</strong>: China (People's Republic of), United States, Viet Nam, Hong Kong, Japan, Taiwan, Singapore, India, Australia, Mexico</li>
        <li><strong>Top Importing Countries</strong>: China (People's Republic of), United States, Japan, Saudi Arabia, Australia, Germany, Taiwan, Viet Nam, Qatar, Russian Federation</li>
        <li><strong>Countries with Highest Positive Trade Balances</strong>: China (People's Republic of), Hong Kong, Viet Nam, United States, India, Singapore, Philippines, Mexico, Marshall Islands, Turkey</li>
        <li><strong>Countries with Highest Negative Trade Balances</strong>: Japan, Saudi Arabia, Qatar, Germany, Australia, Kuwait, Russian Federation, United Arab Emirates, Iraq, France</li>
      </ul>

      <h2>Insights</h2>
      <ol>
        <li>Whether higher ODA correlates with increased trade volumes.</li>
        <li>Regional differences in aid and trade relationships.</li>
        <li>Trends over time in ODA allocations and trade flows.</li>
        <li>How trade balances align with ODA receipts, identifying potential patterns of economic dependency or growth.</li>
      </ol>

      <h2>Visualizations</h2>
      <div className="charts">
        <img src="/top10recipient.png" alt="Top 10 Recipient Countries" />
        <img src="/top10odapurpose.png" alt="Top 10 ODA Purposes" />
        <img src="/top10export.png" alt="Top 10 Exporting Countries" />
        <img src="/top10import.png" alt="Top 10 Importing Countries" />
        <img src="/top10positivetrade.png" alt="Top 10 Positive Trade Balances" />
        <img src="/top10negativetrade.png" alt="Top 10 Negative Trade Balances" />
      </div>
    </div>
  );

  const koreanContent = (
    <div className="content">
      <h1>ODA 및 무역 데이터 개요</h1>

      <h2>데이터 출처</h2>
      <ul>
        <li><strong>ODA 데이터셋</strong>: <strong>OECD</strong>에서 수집된 공적 개발 원조(ODA) 흐름을 기부국, 수원국, 목적별로 제공합니다.</li>
        <li><strong>무역 데이터셋</strong>: <strong>대한민국 관세청</strong>에서 제공된 데이터로, 수출입 금액, 무역 수지 및 교역 상대국 정보를 포함합니다.</li>
      </ul>

      <h2>샘플 데이터</h2>
      <h3>ODA 데이터셋 (첫 행)</h3>
      <table>
        <thead>
          <tr>
            <th>프로젝트 번호</th><th>년도</th><th>기부국</th><th>기관명</th>
            <th>CRS ID</th><th>수혜국</th><th>채널 코드</th><th>제출 유형</th>
            <th>양/다자</th><th>재정 유형</th><th>상환일 1</th><th>상환일 2</th>
            <th>USD 이자</th><th>USD 미지급액</th><th>USD 체납 원금</th>
            <th>USD 체납 이자</th><th>다음 해 USD 미지급액</th><th>다음 해 USD 이자</th>
            <th>수혜국 코드</th><th>제출 유형(지급)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20132000001</td><td>2013</td><td>대한민국</td><td>NaN</td>
            <td>2013001195</td><td>카메룬</td><td>10000.0</td><td>새로운 약속</td>
            <td>양자</td><td>ODA</td><td>NaN</td><td>NaN</td><td>0</td><td>0</td><td>0</td><td>0</td>
            <td>0</td><td>0</td><td>229.0</td><td>연간 분할</td>
          </tr>
        </tbody>
      </table>

      <h3>무역 데이터(첫 행):</h3>
      <table>
        <thead>
          <tr>
            <th>국가명</th><th>2013년 수출액</th><th>2013년 수입액</th>
            <th>2014년 수출액</th><th>2014년 수입액</th><th>2015년 수출액</th>
            <th>2015년 수입액</th><th>2016년 수출액</th><th>2016년 수입액</th>
            <th>2017년 수출액</th><th>2020년 수출액</th><th>2020년 수입액</th>
            <th>2021년 수출액</th><th>2021년 수입액</th><th>2022년 수출액</th>
            <th>2022년 수입액</th><th>2023년 수출액</th><th>2023년 수입액</th>
            <th>총 수출액</th><th>총 수입액</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>중국 (중화인민공화국)</td><td>145,869,498.0 USD</td><td>83,052,877.0 USD</td>
            <td>145,287,701.0 USD</td><td>90,082,226.0 USD</td><td>137,123,934.0 USD</td>
            <td>90,250,275.0 USD</td><td>124,432,941.0 USD</td><td>86,980,135.0 USD</td>
            <td>142,120,000.0 USD</td><td>132,565,445.0 USD</td><td>108,884,645.0 USD</td>
            <td>162,912,974.0 USD</td><td>138,628,127.0 USD</td><td>155,789,389.0 USD</td>
            <td>154,576,314.0 USD</td><td>124,817,682.0 USD</td><td>142,857,338.0 USD</td>
            <td>1,569,247,152 USD</td><td>1,206,889,379 USD</td>
          </tr>
        </tbody>
      </table>

      <h2>중요한 컬럼</h2>
        <h3>ODA 데이터셋</h3>
        <ul>
          <li><strong>기부자 명칭</strong>: 공식 개발 원조를 제공하는 국가 또는 조직입니다.</li>
          <li><strong>수원국 명칭</strong>: 공식 개발 원조를 받는 국가입니다.</li>
          <li><strong>목적 코드</strong>: 원조의 구체적인 목적을 나타내는 숫자 코드입니다.</li>
          <li><strong>집행액</strong>: 수원국에 실제로 집행된 원조 금액입니다.</li>
          <li><strong>약정액</strong>: 약속된 원조 금액으로, 집행액과 다를 수 있습니다.</li>
          <li><strong>연도</strong>: 원조가 집행되거나 약정된 연도입니다.</li>
          <li><strong>채널</strong>: 원조가 전달된 경로(예: 양자, 다자)를 의미합니다.</li>
        </ul>

        <h3>무역 데이터셋</h3>
        <ul>
          <li><strong>국가 명칭</strong>: 무역 상대국입니다.</li>
          <li><strong>총 수출액</strong>: 미국 달러 기준의 총 수출액입니다.</li>
          <li><strong>총 수입액</strong>: 미국 달러 기준의 총 수입액입니다.</li>
        </ul>

        <h2>데이터 통합</h2>
        <ul>
          <li>ODA와 무역 데이터를 국가 식별자를 사용하여 병합하여 ODA 흐름과 무역량 간의 관계를 탐색했습니다.</li>
        </ul>

        <h2>기술 통계</h2>

        <h3>ODA 데이터</h3>
        <ul>
          <li><strong>주요 수원국</strong>: Türkiye, Syrian Arab Republic, Middle East, regional, Armenia, Azerbaijan, Georgia, Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan</li>
          <li><strong>ODA 주요 목적</strong>: Rural development, Trade Policies & Regulations, DESCRIPTION, Forestry, Fishing, Forestry services, Forestry research, Forestry education/training, Fuelwood/charcoal, Forestry development</li>
        </ul>

        <h3>무역 데이터</h3>
        <ul>
          <li><strong>상위 수출국</strong>: China (People's Republic of), United States, Viet Nam, Hong Kong, Japan, Taiwan, Singapore, India, Australia, Mexico</li>
          <li><strong>상위 수입국</strong>: China (People's Republic of), United States, Japan, Saudi Arabia, Australia, Germany, Taiwan, Viet Nam, Qatar, Russian Federation</li>
          <li><strong>최고 무역 흑자국</strong>: China (People's Republic of), Hong Kong, Viet Nam, United States, India, Singapore, Philippines, Mexico, Marshall Islands, Turkey</li>
          <li><strong>최고 무역 적자국</strong>: Japan, Saudi Arabia, Qatar, Germany, Australia, Kuwait, Russian Federation, United Arab Emirates, Iraq, France</li>
        </ul>

        <h2>통찰</h2>
        <ol>
          <li>높은 ODA가 무역 규모 증가와 연관이 있는지 여부.</li>
          <li>원조와 무역 관계의 지역별 차이.</li>
          <li>시간에 따른 ODA 할당 및 무역 흐름의 추세.</li>
          <li>무역수지와 ODA 수령액이 어떻게 일치하는지, 이를 통해 경제적 의존성이나 성장의 잠재적 패턴을 식별하는 방법.</li>
        </ol>

      <h2>시각화</h2>
      <div className="charts">
        <img src="/top10recipient.png" alt="Top 10 Recipient Countries" />
        <img src="/top10odapurpose.png" alt="Top 10 ODA Purposes" />
        <img src="/top10export.png" alt="Top 10 Exporting Countries" />
        <img src="/top10import.png" alt="Top 10 Importing Countries" />
        <img src="/top10positivetrade.png" alt="Top 10 Positive Trade Balances" />
        <img src="/top10negativetrade.png" alt="Top 10 Negative Trade Balances" />
      </div>
    </div>
  );

  return (
    <div className="data-introduction">
      <button onClick={toggleLanguage} className="toggle-button">
        {i18n.language === 'en' ? '한국어' : 'English'}
      </button>
      {i18n.language === 'ko' ? koreanContent : englishContent}
      <button className="back-to-home" onClick={handleBackToHome}>
        {i18n.language === 'ko' ? '홈으로 돌아가기' : 'Back to Home'}
      </button>
    </div>
  );
};

export default DataIntroduction;
