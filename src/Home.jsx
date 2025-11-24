import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ToolCard from './components/ToolCard';
import { ALL_TOOLS, CATEGORIES } from './data/toolData';
import './App.css';

const filterTools = (category) => {
  if (category === "All Tools") return ALL_TOOLS;
  return ALL_TOOLS.filter(tool => tool.category === category);
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const filteredTools = filterTools(activeCategory);

  return (
    <div className="app-container">
      <Sidebar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <main className="main-content">
        <h1 className="app-title">AI for Singapore Estate Agency (SEA)</h1>
        <p className="app-subtitle">Complete workflow automation for agents</p>

        <h2 className="tool-grid-title">
          {activeCategory} ({filteredTools.length} tools)
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
