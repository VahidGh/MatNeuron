# Scenario I: Model Creation and Simulation

1. User initiates by either:
   - Writing code in NMODL and MATLAB/Octave
   - Uploading existing files
   - Describing requirements through a description field

2. When using the description field, MatNeuronAI:
   - Provides keywords 
   - Concept selections link to BioMedWiki entries 
   - Searches for optimal models available locally or online
   - Generates .mod files for NMODL.js
   - Provides .mat files for MATLAB/Octave syntax

3. System generates JavaScript equivalent code:
   - Displayed in cell-based vertical representation
   - Integrated within user's MatBook instance

4. Simulation canvas appears on the right side:
   - Each cell selection displays corresponding simulation section
   - Interactive visualization components

5. MathWiki Integration:
   - Mathematical library selections link to MathWiki entries
   - Provides detailed mathematical documentation

6. Simulation Execution:
   - User can trigger 2D/3D simulations
   - Real-time visualization of results

7. Model Refinement:
   - Direct code editing capability
   - AI-assisted modifications
   - Immediate re-run functionality

8. Project Management:
   - Model saving functionality
   - Download options for offline use

