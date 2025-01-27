# MatNeuron

MatNeuron is a comprehensive web-based Cybernetics simulation environment that bridges neural networks with biomechanical systems. Built with modern web technologies, it provides an interactive platform for researchers, students, and enthusiasts to explore neuronal dynamics and their environmental interactions.

## Core Components

### 1. Neural Network and BioMechanical Simulator
- Interactive visualization of neural architectures
- Real-time parameter adjustment
- NMODL.js integration for NEURON simulation
- MatOct.js integration Biomechanical system coupling
- Real-time conversion between MATLAB/Octave, Neuron, Python and JavaScript

### 2. Mathematical Foundation Interface
- High-performance JavaScript mathematical library integration for computational analysis
- Advanced mathematical modeling tools
- Real-time equation solving and visualization
- Custom algorithm implementation

### 3. Knowledge Integration
- MatBook.js interactive problem solving
- MathWiki.js encyclopedia integration
- Collaborative research environment
- Educational resource hub

### 4. AI Integration
- MatNeuron.ai LLM integration for intelligent assistance
- Search models available online for a given problem
- Machine learning model training and deployment
- Data-driven model optimization
- Model performance benchmarking
  
## Technical Stack

- **Frontend**: React with TypeScript
- **Visualization**: Three.js for 3D, D3.js for 2D
- **Computation**: WebAssembly for intensive calculations
- **Data Management**: IndexedDB for local storage
- **API**: GraphQL for flexible data querying


## Nmodl.js

[nmodl.js](https://github.com/vahidgh/nmodljs) is a project aimed at providing a [NEURON simulator](http://neuron.yale.edu/neuron/) implemented in JavaScript. This project leverages the capabilities of JavaScript to create a flexible and interactive environment for simulating neuronal models defined using the NEURON Model Description Language ([NMODL](https://www.neuron.yale.edu/neuron/static/docs/help/neuron/nmodl/nmodl.html)). 

With nmodl.js, developers can utilize modern web technologies to run simulations directly in the browser, enabling real-time visualization and manipulation of neuronal models.

### ANTLR4 Grammar for NMODL

[ANTLR4](https://www.antlr.org/download.html) is a powerful tool for generating parsers, lexers, and other language tools. The ANTLR4 grammar for NMODL is a crucial component of the nmodl.js project, enabling the creation of a robust and efficient parser for NMODL code.
The ANTLR4 grammar provides a formal specification for parsing NMODL code, enabling syntax highlighting, code analysis, and other tooling for developers working with NEURON.


## MatOct.js

[MATLAB](https://www.mathworks.com/products/matlab.html) and [Octave](https://www.gnu.org/software/octave/) are popular software environments for scientific computing and data analysis. They provide a wide range of tools and libraries for numerical computations, data visualization, and machine learning.

[MatOct.js](https://github.com/vahidgh/matoctjs) is a project aimed at providing a MATLAB/Octave-like environment implemented in JavaScript. This project leverages the capabilities of JavaScript to create a flexible and interactive environment for mathematical computations and data analysis.

### MathJsLab

[MathJsLab](https://github.com/vahidgh/mathjslab) is an [interpreter](https://en.wikipedia.org/wiki/Interpreter_(computing)) with language syntax like [MATLAB&reg;](https://www.mathworks.com/)/[Octave](https://www.gnu.org/software/octave/) written in [TypeScript](https://www.typescriptlang.org/).

MatOct.js combines the approaches taken by MatJsLab with a JavaScript-based and Python-based interpreter to make it possible to convert MATLAB/Octave code to JavaScript and Python code. This allows for the creation of a flexible and interactive environment for mathematical computations and data analysis with any of the three languages.

## MatBook.js

[MatBook.js](https://github.com/vahidgh/MatBookjs) enables scientists, researchers, and students to create and share interactive mathematical problems and solutions with real-time 3D simulations. It provides a platform for creating and sharing mathematical books, tutorials, and educational materials.

### MathWiki.js

[MathWiki.js](https://github.com/vahidgh/mathwikijs) is a project aimed at providing a comprehensive encyclopedia and an efficient mathematical solutions implemented in JavaScript. This project besides implementing a comprehensive encyclopedia of mathematical concepts and solutions, also provides a flexible and interactive environment for mathematical computations and data analysis.

The main concepts of Mathematical problems, their roots and applications are described using invaluable resources like [The Encyklopadie der Mathematischen Wissenschaften mit Einschluss ihrer Anwendungen](https://en.wikipedia.org/wiki/Klein%27s_Encyclopedia_of_Mathematical_Sciences) by [F. Klein](https://en.wikipedia.org/wiki/Felix_Klein).

### BioMedWiki.js
[BioMedWiki.js](https://github.com/vahidgh/biomedwikijs) is a project aimed at providing a comprehensive encyclopedia of biomedical engineering concepts and applications implemented in JavaScript. This project provides a flexible and interactive environment for biomedical engineering, computations and data analysis.

The main concepts of biomedical engineering applications are provided using invaluable resources like [Encyclopedia of Biomaterials and Biomedical Engineering](https://www.sciencedirect.com/book/9780128158024/encyclopedia-of-biomaterials-and-biomedical-engineering) by [D.A. Lauffenburger](https://www.med.upenn.edu/bioengineering/faculty/lauffenburger/). Users can choose, annotate or refer to the entries in the encyclopedia to create their own knowledge-base.

## MatNeuron.ai

MatNeuronAI is an LLM integrated with the MatNeuron.js simulator. It is designed to assist in the creation, simulation, and analysis of neuronal and biomechanical models.

### LLM Integration
- Natural language model description processing
- Automated NMODL code generation from descriptions
- Intelligent parameter suggestion system
- Context-aware documentation generation

### Machine Learning Features
- Model similarity matching
- Parameter optimization
- Behavioral pattern recognition
- Cross-domain model mapping

### Smart Model Assistant
- Interactive model refinement through dialogue
- Automated conversion between MATLAB/NEURON/Python and JavaScript formats
- Performance optimization suggestions
- Related research paper recommendations

### Learning Pipeline
1. User Intent Analysis
   - Natural language processing of model requirements
   - Context extraction from scientific descriptions
   
2. Model Matching
   - Pattern matching against existing model databases
   - Similarity scoring using embedding vectors
   
3. Implementation Synthesis
   - Automated code generation for matched models
   - Parameter space exploration
   - Integration with existing components

4. Continuous Learning
   - User feedback incorporation
   - Model performance tracking
   - Community contribution analysis

