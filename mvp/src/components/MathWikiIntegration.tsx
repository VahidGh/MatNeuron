import React, { useState } from 'react';

export const MathWikiIntegration: React.FC = () => {
    const [selectedTerm, setSelectedTerm] = useState<string>('');

    const mathTerms = [
        'Neuron', 
        'Synapse', 
        'Action Potential', 
        'Membrane Potential'
    ];

    return (
        <div className="math-wiki-container">
            <h3>MathWiki Integration</h3>
            <select 
                value={selectedTerm}
                onChange={(e) => setSelectedTerm(e.target.value)}
            >
                {mathTerms.map(term => (
                    <option key={term} value={term}>{term}</option>
                ))}
            </select>
            {selectedTerm && (
                <div className="wiki-content">
                    {/* Placeholder for actual wiki content */}
                    <p>Details about {selectedTerm}</p>
                </div>
            )}
        </div>
    );
};
