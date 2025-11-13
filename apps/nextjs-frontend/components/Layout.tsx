"use client"
'use client';

import React, { useState, useRef } from 'react';
import { LeftPanel } from './LeftPannel';
import { RightPanel } from './RightPannel';

export default function Layout() {
  const [selectedModel, setSelectedModel] = useState('auto');
  const [prompt, setPrompt] = useState('');
  const [panelWidth, setPanelWidth] = useState(380);
  const isResizing = useRef(false);

  const handleMouseDown = () => {
    isResizing.current = true;
    document.body.style.cursor = 'col-resize';
  };

  const handleMouseUp = () => {
    isResizing.current = false;
    document.body.style.cursor = 'default';
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing.current) return;
    const newWidth = Math.min(Math.max(e.clientX, 280), 600); // min 280px, max 600px
    setPanelWidth(newWidth);
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="h-screen w-full flex overflow-hidden bg-slate-50">
      {/* Left Panel */}
      <div
        style={{ width: `${panelWidth}px` }}
        className="relative z-10 border-r border-slate-300 bg-white flex flex-col transition-all"
      >
        <LeftPanel
          selectedModel={selectedModel}
          setSelectedModel={setSelectedModel}
          prompt={prompt}
          setPrompt={setPrompt}
        />
      </div>

      {/* Resizer Divider */}
      <div
        onMouseDown={handleMouseDown}
        className="w-[6px] cursor-col-resize bg-gradient-to-b from-slate-200 to-slate-300 hover:from-indigo-300 hover:to-indigo-400 transition-all duration-150"
      />

      {/* Right Panel */}
      <div className="flex-1 h-screen">
        <RightPanel />
      </div>
    </div>
  );
}
