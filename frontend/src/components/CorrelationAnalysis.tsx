import React, { useEffect, useState } from "react";
import axios from "axios";

const CorrelationAnalysis: React.FC = () => {
  const [correlationHtml, setCorrelationHtml] = useState<string>("");

  useEffect(() => {
    axios.get("http://localhost:8000/correlation_analysis").then((response) => {
      setCorrelationHtml(response.data);
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Correlation Analysis</h1>
      <div dangerouslySetInnerHTML={{ __html: correlationHtml }} />
    </div>
  );
};

export default CorrelationAnalysis;
