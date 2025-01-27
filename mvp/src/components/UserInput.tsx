import React, { useState } from 'react';
import { MatNeuronAI } from '../services/MatNeuronAI';

export const UserInput: React.FC = () => {
    const [inputType, setInputType] = useState<'code' | 'upload' | 'description'>('description');
    const [input, setInput] = useState<string>('');
    const [files, setFiles] = useState<File[]>([]);

    const handleSubmit = async () => {
        const ai = new MatNeuronAI();
        
        switch(inputType) {
            case 'description':
                const modelResponse = await ai.searchModels(input);
                break;
            case 'code':
                const jsCode = await ai.convertToJavaScript({ 
                    nmodlCode: input 
                });
                break;
            case 'upload':
                const uploadedCode = await ai.processUploadedFiles(files);
                break;
        }
    };

    return (
        <div className="user-input-container">
            <div className="input-type-selector">
                <button onClick={() => setInputType('code')}>Write Code</button>
                <button onClick={() => setInputType('upload')}>Upload Files</button>
                <button onClick={() => setInputType('description')}>Describe Model</button>
            </div>

            {inputType === 'description' && (
                <textarea 
                    placeholder="Describe your neural model..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            )}

            {inputType === 'code' && (
                <textarea 
                    placeholder="Enter NMODL or MATLAB code..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            )}

            {inputType === 'upload' && (
                <input 
                    type="file" 
                    multiple 
                    onChange={(e) => setFiles(Array.from(e.target.files || []))}
                />
            )}

            <button onClick={handleSubmit}>Process Model</button>
        </div>
    );
};
