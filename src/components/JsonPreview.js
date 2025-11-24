import React from "react";
import "./JsonPreview.css";

export default function JsonPreview({ data }) {
  if (!data) return null;

  let formatted;

  try {
    formatted = JSON.stringify(data, null, 2);
  } catch (err) {
    formatted = String(data);
  }

  return (
    <pre className="json-preview">
      {formatted}
    </pre>
  );
}
