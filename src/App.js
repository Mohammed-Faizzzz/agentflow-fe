import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ToolCard from './components/ToolCard';
import { ALL_TOOLS, CATEGORIES } from './data/toolData';
import './App.css'; // Import the main CSS file

const filterTools = (category) => {
    if (category === 'All Tools') return ALL_TOOLS;
    return ALL_TOOLS.filter(tool => tool.category === category);
};

function App() {
    // 'All Tools' is the default view, matching the Figma
    const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]); 
    const filteredTools = filterTools(activeCategory);

    return (
        <div className="app-container">
            <Sidebar 
                activeCategory={activeCategory} 
                setActiveCategory={setActiveCategory} 
            />

            <main className="main-content">
                <header className="main-header">
                    <h1 className="app-title">AI Real Estate Assistant</h1>
                    <p className="app-subtitle">Complete workflow automation for agents</p>
                </header>

                <div className="search-bar">
                    <input 
                        type="text"
                        placeholder="Search AI tools..."
                    />
                </div>

                <h2 className="tool-grid-title">
                    {activeCategory} ({filteredTools.length} tools available)
                </h2>
                
                <div className="tool-grid">
                    {filteredTools.map((tool) => (
                        <ToolCard key={tool.endpoint} tool={tool} />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default App;