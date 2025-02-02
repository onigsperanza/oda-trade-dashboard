import React, { useEffect, useState } from "react";
import axios from "axios";

const InteractiveHeatmap: React.FC = () => {
  const [heatmapHtml, setHeatmapHtml] = useState<string>("");

  useEffect(() => {
    axios.get("http://localhost:8000/heatmap").then((response) => {
      setHeatmapHtml(response.data);
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Interactive Heatmap</h1>
      <div dangerouslySetInnerHTML={{ __html: heatmapHtml }} />
    </div>
  );
};

export default InteractiveHeatmap;
