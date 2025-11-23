import React from 'react';

const ToolCard = ({ tool }) => {
    // Mock the API call function
    const handleTryNow = () => {
        // This is where you would call your API service
        alert(`Starting tool: ${tool.name}\nEndpoint: ${tool.endpoint}\n(In a real app, this would open an input form.)`);
        // Example: api.startWorkflow(tool.endpoint, { propertyId: 1, query: 'details' });
    };

    return (
        <div className="tool-card">
            <div className="tool-icon">{tool.icon}</div>
            
            <div className="tool-content">
                <h3 className="tool-name">{tool.name}</h3>
                <p className="tool-description">{tool.description}</p>
            </div>
            
            <button 
                onClick={handleTryNow}
                className="try-now-button"
            >
                Try now →
            </button>
        </div>
    );
};

export default ToolCard;