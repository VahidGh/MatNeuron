import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import * as d3 from 'd3';

interface SimulationCanvasProps {
    dimension: '2d' | '3d';
    data: any;
}

export const SimulationCanvas: React.FC<SimulationCanvasProps> = ({ dimension, data }) => {
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        if (dimension === '3d') {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer();
            
            renderer.setSize(window.innerWidth, window.innerHeight);
            canvasRef.current.appendChild(renderer.domElement);
        } else {
            const svg = d3.select(canvasRef.current)
                .append('svg')
                .attr('width', '100%')
                .attr('height', '400px');
        }
    }, [dimension]);

    return (
        <div 
            ref={canvasRef} 
            className="simulation-canvas" 
            style={{ width: '100%', height: '400px' }}
        />
    );
};
