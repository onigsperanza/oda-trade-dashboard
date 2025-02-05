import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to the ODA & Trade Dashboard",
      trendAnalysis: "Time-series/Multidimensional/Correlation/Sector Analysis",
      correlationAnalysis: "Predictive Analysis by RF and LR",
      dataManipulation: "Data View and Manipulation",
      interactiveHeatmap: "Interactive Heatmap",
      exploreInsights: "Explore data insights like never before!",
      getStarted: "Get Started",
      home: "Home",
      menuTitle: "Select Your Analysis",
      dataIntroduction: "Data Introduction"
    }
  },
  ko: {
    translation: {
      welcome: "ODA 및 무역 대시보드에 오신 것을 환영합니다",
      trendAnalysis: "시계열/다차원/상관관계계/섹터 별 분석",
      correlationAnalysis: "회귀와 랜덤포레스트 기반 예측 분석",
      dataManipulation: "데이터 보기 및 조작",
      interactiveHeatmap: "인터랙티브 히트맵",
      exploreInsights: "이전에는 볼 수 없던 데이터 인사이트를 탐색하세요!",
      getStarted: "시작하기",
      home: "홈",
      menuTitle: "분석을 선택하세요",
      dataIntroduction: "데이터 소개"
    }
  }
};




i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
