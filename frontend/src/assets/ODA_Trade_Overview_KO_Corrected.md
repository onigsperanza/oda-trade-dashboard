
# ODA 및 무역 데이터 개요

## 데이터 출처
- **ODA 데이터셋**: **OECD**에서 수집된 이 데이터셋은 기부국, 수원국 및 목적별로 공적 개발 원조(ODA) 흐름을 상세히 설명합니다.
- **무역 데이터셋**: **대한민국 관세청**에서 제공하는 이 데이터셋은 수출입 금액, 무역 수지 및 교역 상대국 정보를 포함하는 종합적인 무역 통계를 제공합니다.

## 샘플 데이터

### ODA 데이터셋 (첫 2개 행)
| 공여국 이름 | 수원국 이름 | 목적 코드 | 목적 설명           | 집행 금액    | 약속 금액    | 연도 | 채널           |
|-------------|-------------|------------|--------------------|--------------|-------------|------|----------------|
| Donor A     | Country X   | 11110      | 교육 지원          | 500,000 USD  | 550,000 USD | 2020 | 양자간          |
| Donor B     | Country Y   | 12220      | 보건 인프라         | 750,000 USD  | 800,000 USD | 2021 | 다자간          |

### 무역 데이터셋 (첫 2개 행)
| 국가 이름                        | 2013-2017 수출액   | 2013-2017 수출 중량  | 2013-2017 수입액   | 2013-2017 수입 중량  | 2013-2017 무역 수지  | 2017-2022 수출액   | 2017-2022 수출 중량  | 2017-2022 수입액   | 2017-2022 수입 중량  | 2017-2022 무역 수지  | 총 수출액         | 총 수출 중량        | 총 수입액         | 총 수입 중량        | 총 무역 수지    |
|----------------------------------|---------------------|---------------------|---------------------|----------------------|---------------------|---------------------|----------------------|---------------------|----------------------|---------------------|--------------------|---------------------|--------------------|---------------------|----------------|
| 중국                             | 749,595,397 USD     | 223,481,600,000 kg  | 615,806,414 USD     | 180,709,800,000 kg   | 133,788,983 USD     | 694,834,074 USD     | 206,716,500,000 kg   | 448,225,627 USD     | 211,113,100,000 kg   | 246,608,447 USD     | 1,444,429,471 USD  | 430,198,100,000 kg  | 1,064,032,041 USD  | 391,822,900,000 kg  | 380,397,430 USD |
| 미국                             | 425,847,310 USD     | 92,076,000,000 kg   | 333,237,191 USD     | 249,977,000,000 kg   | 92,610,119 USD      | 337,241,502 USD     | 86,111,670,000 kg    | 224,784,893 USD     | 120,364,500,000 kg   | 112,456,609 USD     | 763,088,812 USD    | 178,187,670,000 kg  | 558,022,084 USD    | 370,341,500,000 kg  | 205,066,728 USD  |

## 주요 열 설명

### ODA 데이터셋
- **Donor Name**: The country or organization providing the official development assistance.
- **Recipient Name**: The country receiving the official development assistance.
- **Purpose Code**: A numeric code representing the specific purpose of the aid.
- **Purpose Description**: A description of what the aid is intended for.
- **Disbursement**: The actual amount of aid money disbursed to the recipient.
- **Commitment**: The pledged amount of aid, which may differ from disbursement.
- **Year**: The year the aid was disbursed or committed.
- **Channel**: The medium through which the aid was delivered (e.g., bilateral, multilateral).

### 무역 데이터셋
- **Country Name**: The trading partner country.
- **Export Value Total**: The total export value in USD.
- **Import Value Total**: The total import value in USD.
- **Balance Total**: The total trade balance (export - import) in USD.
- **Export Weight Total**: The total weight of exported goods.
- **Import Weight Total**: The total weight of imported goods.
- **Year**: The year of the trade transaction.
- **HS Code Description**: The description of the product category based on the Harmonized System (HS) codes.

## 데이터 통합
ODA와 무역 데이터를 국가 식별자를 사용하여 병합하여 ODA 흐름과 무역량 간의 관계를 탐색했습니다.

## 기술 통계
### ODA 데이터
- **주요 공여국**: Donor name (EN), Greece, New Zealand, Australia, Korea, Japan, United States, Canada, Lithuania, Estonia
- **주요 수원국**: Türkiye, Syrian Arab Republic, Middle East, regional, Armenia, Azerbaijan, Georgia, Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan
- **ODA 주요 목적**: Rural development, Trade Policies & Regulations, DESCRIPTION, Forestry, Fishing, Forestry services, Forestry research, Forestry education/training, Fuelwood/charcoal, Forestry development

### 무역 데이터
- **상위 수출국**: China \(People's Republic of\), United States, Viet Nam, Hong Kong, Japan, Taiwan, Singapore, India, Australia, Mexico
- **상위 수입국**: China \(People's Republic of\), United States, Japan, Saudi Arabia, Australia, Germany, Taiwan, Viet Nam, Qatar, Russian Federation
- **최고 무역 흑자국**: China \(People's Republic of\), Hong Kong, Viet Nam, United States, India, Singapore, Philippines, Mexico, Marshall Islands, Turkey
- **최고 무역 적자국**: Japan, Saudi Arabia, Qatar, Germany, Australia, Kuwait, Russian Federation, United Arab Emirates, Iraq, France

## 인사이트
이 두 데이터셋을 결합하여 다음을 분석할 수 있습니다:
1. 높은 ODA가 무역량 증가와 상관관계가 있는지.
2. 지역별 원조 및 무역 관계의 차이점.
3. 시간에 따른 ODA 배분 및 무역 흐름의 추세.

## 시각화
- 상위 10개 수원국
- 상위 10개 ODA 목적
- 상위 10개 수출국
- 상위 10개 수입국
- 상위 10개 무역 흑자국
- 상위 10개 무역 적자국
