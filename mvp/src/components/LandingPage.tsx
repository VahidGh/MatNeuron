import React from 'react';
import { Link } from 'react-router-dom';

export const LandingPage: React.FC = () => {
    return (
        <div className="landing-container">
            <header className="hero-section">
                <h1>MatNeuron</h1>
                <p className="tagline">Comprehensive Web-based Cybernetics Simulation Environment</p>
            </header>

            <section className="features-grid">
                <div className="feature-card">
                    <h3>Neural Network Simulator</h3>
                    <p>Interactive visualization of neural architectures with real-time parameter adjustment</p>
                </div>
                <div className="feature-card">
                    <h3>Mathematical Foundation</h3>
                    <p>High-performance computational analysis with advanced modeling tools</p>
                </div>
                <div className="feature-card">
                    <h3>Knowledge Integration</h3>
                    <p>Interactive problem solving with encyclopedia integration</p>
                </div>
                <div className="feature-card">
                    <h3>AI Integration</h3>
                    <p>Intelligent assistance with model optimization and benchmarking</p>
                </div>
            </section>

            <section className="scenarios-section">
                <h2>Interactive Scenarios</h2>
                <div className="scenario-card">
                    <h3>Scenario 1: Model Creation and Simulation</h3>
                    <p>Experience our comprehensive model creation workflow</p>
                    <Link to="/scenario1" className="cta-button">Try Scenario 1</Link>
                </div>
            </section>
        </div>
    );
};
