import { useNavigate } from "react-router-dom";

const ToolCard = ({ tool }) => {
  const navigate = useNavigate();

  return (
    <div className="tool-card">
      <div className="tool-icon">{tool.icon}</div>
      <h3 className="tool-name">{tool.name}</h3>
      <p className="tool-description">{tool.description}</p>

      <button
        onClick={() => navigate(`/tool/${tool.endpoint.replace(/\//g, "")}`)}
        className="try-now-button"
      >
        Try now →
      </button>
    </div>
  );
};

export default ToolCard;
