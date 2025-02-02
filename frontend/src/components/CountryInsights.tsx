import React, { useEffect, useState } from "react";
import axios from "axios";

const CountryInsights: React.FC = () => {
  const [insightsHtml, setInsightsHtml] = useState<string>("");

  useEffect(() => {
    axios.get("http://localhost:8000/country_insights").then((response) => {
      setInsightsHtml(response.data);
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Country Insights</h1>
      <div dangerouslySetInnerHTML={{ __html: insightsHtml }} />
    </div>
  );
};

export default CountryInsights;
