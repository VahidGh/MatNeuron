// import React, { useEffect } from 'react';
// import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

// const Scenario1: React.FC = () => {
//     useEffect(() => {
//         const loadMermaid = async () => {
//             try {
//                 const response = await fetch('/src/scenarios/scenario1.txt');
//                 const graphContent = await response.text();

//                 mermaid.initialize({ startOnLoad: true });
//                 const element = document.querySelector("#diagram-container");
                
//                 if (element) {
//                     const { svg } = await mermaid.render('flowDiagram', graphContent);
//                     element.innerHTML = svg;
//                 }
//             } catch (error) {
//                 console.error('Error loading Mermaid diagram:', error);
//             }
//         };
        
//         loadMermaid();
//     }, []);

//     return (
//         <div className="scenario-container">
//             <div id="diagram-container" style={{
//                 width: '90%',
//                 margin: '20px auto',
//                 padding: '20px'
//             }}></div>
//         </div>
//     );
// };

// export default Scenario1;

import React from 'react';
import { UserInput } from '../components/UserInput';
import { SimulationCanvas } from '../components/SimulationCanvas';
import { MathWikiIntegration } from '../components/MathWikiIntegration';
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

const Scenario1: React.FC = () => {
    return (
        <div className="scenario-container">
            <h1>Neural Model Creation and Simulation</h1>
            
            <div className="scenario-layout">
                <div className="left-panel">
                    <UserInput />
                    <MathWikiIntegration />
                </div>
                
                <div className="right-panel">
                    <SimulationCanvas dimension="3d" data={null} />
                    
                    <div className="edit-options">
                        <button>Manual Edit</button>
                        <button>AI Assisted Edit</button>
                        <button>Re-run Simulation</button>
                        <button>Save Model</button>
                    </div>
                </div>
            </div>

            <div id="flow-diagram-container" style={{ marginTop: '20px' }}></div>
        </div>
    );
};

export default Scenario1;
