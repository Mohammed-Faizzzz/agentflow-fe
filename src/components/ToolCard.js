import React, { useState } from "react";

const ToolCard = ({ tool }) => {
    const [query, setQuery] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleTryNow = async () => {
        setLoading(true);
        setResult(null);

        let payload = { item_id: 101 };
        if (query.trim() !== "") payload.query = query;

        if (tool.endpoint.includes("create-video"))
            payload.highlight = query || "Beautiful new listing!";

        if (tool.endpoint.includes("generate-flyer"))
            payload.subtitle = query || "Stunning new listing";

        try {
            const response = await fetch(`https://agentflow-tito.onrender.com${tool.endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            const data = await response.json();
            setResult(data);

        } catch (error) {
            setResult({
                error: "Failed to call API",
                details: error.message
            });
        }

        setLoading(false);
    };

    /**
     * Convert JSON into nice readable text
     */
    const renderFriendlyOutput = (output) => {
        if (!output) return null;

        // If output is a string, just show the string
        if (typeof output === "string") {
            return <p className="friendly-text">{output}</p>;
        }

        // If output is object → convert to human format
        return (
            <div className="friendly-output">
                {output.headline && <h4>{output.headline}</h4>}

                {output.description && (
                    <p style={{ marginBottom: "10px" }}>{output.description}</p>
                )}

                {output.features && Array.isArray(output.features) && (
                    <>
                        <strong>Features:</strong>
                        <ul>
                            {output.features.map((f, i) => (
                                <li key={i}>{f}</li>
                            ))}
                        </ul>
                    </>
                )}

                {output.call_to_action && (
                    <p style={{ fontWeight: "600", marginTop: "10px" }}>
                        {output.call_to_action}
                    </p>
                )}
            </div>
        );
    };

    return (
        <div className="tool-card">
            <div className="tool-icon">{tool.icon}</div>

            <div className="tool-content">
                <h3 className="tool-name">{tool.name}</h3>
                <p className="tool-description">{tool.description}</p>

                <input
                    type="text"
                    placeholder="Enter details (optional)..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="tool-input"
                />

                <button
                    onClick={handleTryNow}
                    className="try-now-button"
                    disabled={loading}
                >
                    {loading ? "Running..." : "Try now →"}
                </button>

                {/* Render result */}
                {result && (
                    <div className="tool-result">

                        {/* Flyer */}
                        {result.flyer_url && (
                            <a href={result.flyer_url} target="_blank">View Flyer →</a>
                        )}

                        {/* Video */}
                        {result.video_url && (
                            <video controls src={result.video_url} width="300" />
                        )}

                        {/* Friendly formatted LLM output */}
                        {result.output && renderFriendlyOutput(result.output)}

                        {/* Error message */}
                        {result.error && (
                            <p className="error-text">
                                ❌ {result.error}: {result.details}
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ToolCard;
