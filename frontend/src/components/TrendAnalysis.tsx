import React, { useEffect, useState } from "react";
import axios from "axios";

const TrendAnalysis: React.FC = () => {
  const [trendHtml, setTrendHtml] = useState<string>("");

  useEffect(() => {
    axios.get("http://localhost:8000/trend_analysis").then((response) => {
      setTrendHtml(response.data);
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Trend Analysis</h1>
      <div dangerouslySetInnerHTML={{ __html: trendHtml }} />
    </div>
  );
};

export default TrendAnalysis;
