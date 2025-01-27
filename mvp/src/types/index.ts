interface ModelInput {
    nmodlCode?: string;
    matlabCode?: string;
    description?: string;
    files?: File[];
}

interface SimulationConfig {
    dimension: '2d' | '3d';
    parameters: Record<string, number>;
    timeStep: number;
}

interface MatNeuronAIResponse {
    modFiles: string[];
    matFiles: string[];
    jsEquivalent: string;
}
