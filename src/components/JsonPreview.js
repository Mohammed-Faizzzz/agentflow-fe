import React from "react";
import "./JsonPreview.css";

export default function JsonPreview({ data }) {
  if (!data) return null;

  // If data is a string, try parsing it
  let parsedData = data;
  if (typeof data === "string") {
    try {
      parsedData = JSON.parse(data);
    } catch {}
  }

  // If the top-level key is "output", use its value
  if (parsedData && parsedData.output) {
    parsedData = parsedData.output;
  }

  const renderValue = (value) => {
    if (Array.isArray(value)) {
      return value.map((v, i) => (
        <div key={i} className="friendly-item">
          • {v}
        </div>
      ));
    } else if (typeof value === "object" && value !== null) {
      return Object.entries(value).map(([k, v]) => (
        <div key={k} className="friendly-section">
          <strong>{capitalizeWords(k.replace(/_/g, " "))}:</strong>
          <div className="friendly-content">{renderValue(v)}</div>
        </div>
      ));
    } else {
      return <span>{String(value)}</span>;
    }
  };

  const capitalizeWords = (text) => text.charAt(0).toUpperCase() + text.slice(1);

  return <div className="friendly-output">{renderValue(parsedData)}</div>;
}
