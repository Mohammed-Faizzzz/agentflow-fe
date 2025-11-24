import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css'; // Use the same CSS for global styles

const API_BASE_URL = 'https://agentflow-tito.onrender.com'; // Use your deployed BE URL

export default function LandingPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRegisterInterest = async () => {
        if (!email || !email.includes('@')) {
            setMessage('Please enter a valid email address.');
            return;
        }

        setLoading(true);
        setMessage('');

        try {
            // Call the new backend endpoint using GET with query parameter
            const response = await axios.get(`${API_BASE_URL}/register-interest`, {
                params: { email: email }
            });

            setMessage(response.data.message);
            setEmail('');

        } catch (error) {
            setMessage('Registration failed. Please try again later.');
            console.error('Waitlist API Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="landing-hero">
            <header className="landing-nav">
                <div className="logo-text">WorkWithAI.co</div>
                <button 
                    className="nav-try-btn" 
                    onClick={() => navigate('/home')}
                >
                    Try the Beta Now
                </button>
            </header>

            <div className="hero-content">
                <h1 className="hero-title">
                    Automate Your Entire Real Estate Workflow with AI.
                </h1>
                <p className="hero-subtitle">
                    Generate listing copy, launch marketing flyers, and organize client follow-ups in seconds—not hours.
                </p>

                <div className="cta-section">
                    
                    {/* 1. Register Interest Section */}
                    <div className="waitlist-form">
                        <input
                            type="email"
                            placeholder="Enter your email to join the waitlist"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="waitlist-input"
                            disabled={loading}
                        />
                        <button 
                            onClick={handleRegisterInterest} 
                            className="waitlist-btn"
                            disabled={loading}
                        >
                            {loading ? 'Subscribing...' : 'Join Waitlist'}
                        </button>
                    </div>

                    {/* 2. Try Now Button */}
                    <button 
                        onClick={() => navigate('/home')}
                        className="try-now-btn"
                    >
                        Try the App →
                    </button>
                </div>
                
                {message && <p className={`message ${message.includes('failed') ? 'error-text' : 'success-text'}`}>{message}</p>}

            </div>
        </div>
    );
}