import React from 'react';

const getIcon = (name) => {
    switch (name) {
        case 'Prospecting': return '🔍'; 
        case 'Listing Presentation': return '📊'; 
        case 'Marketing & Viewing': return '📢'; 
        case 'Client Engagement': return '🤝'; 
        default: return '🛠️'; 
    }
};

export const ALL_TOOLS = [
    // === PROSPECTING TOOLS ===
    { 
        name: 'AI Flyer Generator', 
        description: 'Generate professional flyers using property data and templates.', 
        endpoint: '/prospecting/generate-flyer', 
        category: 'Prospecting', 
        icon: '🖨️' 
    },
    { 
        name: 'AI Video Creator', 
        description: 'Create short promotional videos from photos and generated script.', 
        endpoint: '/prospecting/create-video', 
        category: 'Prospecting', 
        icon: '🎬' 
    },
    { 
        name: 'AI SEO Assistant', 
        description: 'Optimize website content and improve search ranking for lead generation.', 
        endpoint: '/prospecting/gseo-asst', 
        category: 'Prospecting', 
        icon: '✨' 
    },
    { 
        name: 'Social Content Generator', 
        description: 'Create engaging social media posts, captions, and scripts.', 
        endpoint: '/prospecting/generate-social-post', 
        category: 'Prospecting', 
        icon: '📱' 
    },
    
    // === LISTING PRESENTATION TOOLS ===
    { 
        name: 'AI Presentation Builder', 
        description: 'Auto-generate professional listing pitch decks with financial calculations.', 
        endpoint: '/listing/generate-presentation', 
        category: 'Listing Presentation', 
        icon: '💻' 
    },
    { 
        name: 'Financial Calculator AI', 
        description: 'Calculate profit/loss scenarios at different sale prices instantly.', 
        endpoint: '/listing/finance-calculator', 
        category: 'Listing Presentation', 
        icon: '💰' 
    },
    { 
        name: 'AI Explainer Chat', 
        description: 'Get instant summaries of HDB procedures, policies, and requirements.', 
        endpoint: '/listing/explainer-chatbot', 
        category: 'Listing Presentation', 
        icon: '💬' 
    },

    // === MARKETING & VIEWING TOOLS ===
    { 
        name: 'AI Photo Enhancer', 
        description: 'Auto-enhance property photos for stunning listings.', 
        endpoint: '/marketing/photo-enhancer', 
        category: 'Marketing & Viewing', 
        icon: '📸' 
    },
    { 
        name: 'Video Tour Generator', 
        description: 'Create smooth property walkthroughs with voiceovers and face-studio presenter.', 
        endpoint: '/marketing/video-tour-generator', 
        category: 'Marketing & Viewing', 
        icon: '🎥' 
    },
    { 
        name: 'AI Listing Writer', 
        description: 'Generate listing descriptions (PropertyGuru, 99.co ready).', 
        endpoint: '/marketing/listing-description-writer', 
        category: 'Marketing & Viewing', 
        icon: '📝' 
    },
    { 
        name: 'AI Virtual Staging', 
        description: 'Digitally furnish and style empty properties for better appeal.', 
        endpoint: '/marketing/virtual-staging-service', 
        category: 'Marketing & Viewing', 
        icon: '🛋️' 
    },

    // === CLIENT ENGAGEMENT TOOLS ===
    { 
        name: 'AI Document Generator', 
        description: 'Create templates for all required forms, contracts, and legal documents.', 
        endpoint: '/client-engagement/document-generator', 
        category: 'Client Engagement', 
        icon: '📄' 
    },
    { 
        name: 'AI Compliance Assistant', 
        description: 'Track procedures, deadlines, fees, and compliance requirements.', 
        endpoint: '/client-engagement/compliance-assistant', 
        category: 'Client Engagement', 
        icon: '✅' 
    },
    { 
        name: 'AI Reminder System', 
        description: 'Send automated notifications and scheduling reminders for clients and agents.', 
        endpoint: '/client-engagement/reminder', 
        category: 'Client Engagement', 
        icon: '🔔' 
    },
    { 
        name: 'After-Sales Follow-up AI', 
        description: 'Generate appreciation messages, check-ins, and follow-up communications.', 
        endpoint: '/client-engagement/follow-up', 
        category: 'Client Engagement', 
        icon: '❤️' 
    },
];

// --- FIX: Safely generate CATEGORIES array ---
// Generate categories dynamically from the tools, plus 'All Tools'
const uniqueCategories = ['All Tools', ...new Set(ALL_TOOLS.map(tool => tool.category))];

export const CATEGORIES = uniqueCategories;
export const getCategoryIcon = getIcon;