import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './DataIntroduction.css';

const DataIntroduction: React.FC = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

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
      <h3>ODA Dataset (First 2 Rows)</h3>
      <table>
        <thead>
          <tr>
            <th>Donor Name</th><th>Recipient Name</th><th>Purpose Code</th><th>Purpose Description</th>
            <th>Disbursement</th><th>Commitment</th><th>Year</th><th>Channel</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Donor A</td><td>Country X</td><td>11110</td><td>Education Support</td><td>500,000 USD</td><td>550,000 USD</td><td>2020</td><td>Bilateral</td></tr>
          <tr><td>Donor B</td><td>Country Y</td><td>12220</td><td>Health Infrastructure</td><td>750,000 USD</td><td>800,000 USD</td><td>2021</td><td>Multilateral</td></tr>
        </tbody>
      </table>

      <h3>Trade Dataset (First 2 Rows)</h3>
      <table>
        <thead>
          <tr>
            <th>Country Name</th><th>Export Value Total</th><th>Import Value Total</th><th>Balance Total</th>
            <th>Export Weight Total</th><th>Import Weight Total</th><th>Year</th><th>HS Code Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>China</td><td>1,444,429,471 USD</td><td>1,064,032,041 USD</td><td>380,397,430 USD</td><td>430,198,100,000 kg</td><td>391,822,900,000 kg</td><td>2020</td><td>Electronics</td></tr>
          <tr><td>United States</td><td>763,088,812 USD</td><td>558,022,084 USD</td><td>205,066,728 USD</td><td>178,187,670,000 kg</td><td>370,341,500,000 kg</td><td>2021</td><td>Machinery</td></tr>
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
        <li><strong>Balance Total</strong>: The total trade balance (export - import) in USD.</li>
        <li><strong>Export Weight Total</strong>: The total weight of exported goods.</li>
        <li><strong>Import Weight Total</strong>: The total weight of imported goods.</li>
        <li><strong>Year</strong>: The year of the trade transaction.</li>
        <li><strong>HS Code Description</strong>: The description of the product category based on the Harmonized System (HS) codes.</li>
      </ul>

      <h2>데이터 통합</h2>
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
      <h3>ODA 데이터셋 (첫 2개 행)</h3>
      <table>
        <thead>
          <tr>
            <th>공여국 이름</th><th>수원국 이름</th><th>목적 코드</th><th>목적 설명</th>
            <th>집행 금액</th><th>약속 금액</th><th>연도</th><th>채널</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Donor A</td><td>Country X</td><td>11110</td><td>교육 지원</td><td>500,000 USD</td><td>550,000 USD</td><td>2020</td><td>양자간</td></tr>
          <tr><td>Donor B</td><td>Country Y</td><td>12220</td><td>보건 인프라</td><td>750,000 USD</td><td>800,000 USD</td><td>2021</td><td>다자간</td></tr>
        </tbody>
      </table>

      <h3>무역 데이터셋 (첫 2개 행)</h3>
      <table>
        <thead>
          <tr>
            <th>국가 이름</th><th>총 수출액</th><th>총 수입액</th><th>무역 수지</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>중국</td><td>1,444,429,471 USD</td><td>1,064,032,041 USD</td><td>380,397,430 USD</td></tr>
          <tr><td>미국</td><td>763,088,812 USD</td><td>558,022,084 USD</td><td>205,066,728 USD</td></tr>
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
          <li><strong>총 무역수지</strong>: 총 무역수지(수출액 - 수입액)를 미국 달러 기준으로 나타냅니다.</li>
          <li><strong>총 수출 중량</strong>: 수출된 상품의 총 중량입니다.</li>
          <li><strong>총 수입 중량</strong>: 수입된 상품의 총 중량입니다.</li>
          <li><strong>연도</strong>: 무역 거래가 이루어진 연도입니다.</li>
          <li><strong>HS 코드 설명</strong>: 조화 체계(HS 코드)를 기반으로 한 상품 분류의 설명입니다.</li>
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
      {i18n.language === 'ko' ? koreanContent : englishContent}
      <button className="back-to-home" onClick={handleBackToHome}>
        {i18n.language === 'ko' ? '홈으로 돌아가기' : 'Back to Home'}
      </button>
    </div>
  );
};

export default DataIntroduction;
