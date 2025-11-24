import React from 'react';
import { CATEGORIES } from '../data/toolData';

const Sidebar = ({ activeCategory, setActiveCategory }) => {
    return (
        <nav className="sidebar">
            <div className="sidebar-header">
                <span className="logo-icon">✨</span> WorkWithAI.co
            </div>
            
            <ul className="category-list">
                {CATEGORIES.map((category) => (
                    <li key={category}>
                        <button
                            onClick={() => setActiveCategory(category)}
                            className={`category-button ${activeCategory === category ? 'active' : ''}`}
                        >
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar;