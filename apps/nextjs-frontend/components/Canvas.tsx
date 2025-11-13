"use client";

import { useState, useCallback } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, useNodesState, useEdgesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
 
const initialNodes = [
  { id: 'root', position: { x: 0, y: 0 }, data: { label: 'Creation of an Atom' } },
  { id: '1', position: { x: -150, y: 100 }, data: { label: 'Matter Genesis' } },
  { id: '2', position: { x: 150, y: 100 }, data: { label: 'Forces & Binding' } },
  { id: '3', position: { x: 170, y: 100 }, data: { label: 'Matter Genesis' } },
];
const initialEdges = [
  { id: 'root-1', source: 'root', target: '1' },
  { id: 'root-2', source: 'root', target: '2' },
];

 
export default function Canvas() {
    //   const [nodes, setNodes] = useState(initialNodes);
    //   const [edges, setEdges] = useState(initialEdges);
    const [nodes, setNodes] = useNodesState(initialNodes);
    const [edges, setEdges] = useEdgesState(initialEdges);
    
  const onNodesChange = useCallback(
    (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );
 
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        
      />
    </div>
  );
}