import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ALL_TOOLS } from "../data/toolData";
import JsonPreview from "../components/JsonPreview";

export default function ToolRunnerPage() {
  const { endpointName } = useParams();
  const navigate = useNavigate();

  const tool = ALL_TOOLS.find(t =>
    t.endpoint.replace(/\//g, "") === endpointName
  );

  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const runTool = async () => {
    setLoading(true);
    setResult(null);

    const response = await fetch(`http://127.0.0.1:8000${tool.endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: input })
    });

    const data = await response.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="runner-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1>{tool.icon} {tool.name}</h1>
      <p>{tool.description}</p>

      <textarea
        className="runner-input"
        rows="5"
        placeholder="Describe what you want..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={runTool} className="run-btn" disabled={loading}>
        {loading ? "Running..." : "Run Tool"}
      </button>

      {result && <JsonPreview data={result} />}
    </div>
  );
}
