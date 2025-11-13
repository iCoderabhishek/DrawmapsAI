"use client"

import React, { useState } from 'react';

import { Sparkles, ChevronDown, Cpu, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface LeftPanelProps {
  selectedModel: string;
  setSelectedModel: (model: string) => void;
  prompt: string;
  setPrompt: (prompt: string) => void;
}

const models = [
  { id: 'auto', name: 'Auto' },
  { id: 'gpt-4', name: 'GPT-4 (OpenAI)' },
  { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo (OpenAI)' },
  { id: 'claude-3-opus', name: 'Claude 3 Opus (Anthropic)' },
  { id: 'claude-3-sonnet', name: 'Claude 3 Sonnet (Anthropic)' },
];

export function LeftPanel({
  selectedModel,
  setSelectedModel,
  prompt,
  setPrompt,
}: LeftPanelProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    console.log('Sending prompt:', prompt, 'to model:', selectedModel);
    setPrompt('');
  };


  const [isOpen, setIsOpen] = useState(false);

  const currentModel = models.find((m) => m.id === selectedModel);

  return (
    <div 
        style={{
      backgroundImage: `
        radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
        radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
    }}
    className="flex flex-col h-full shadow-inner">
////


   




 <header className="w-full   px-4 py-0 flex flex-wrap items-center justify-between">
      {/* Logo + Title */}
      <div className="flex items-center gap-2 mb-2 sm:mb-0">
       
         
        <h2 className="text-md font-sans font-thin text-slate-800 tracking-tight">
          Drawmaps AI 🙌
        </h2>
      </div>

      {/* Model Dropdown (Desktop) */}
      <div className="hidden sm:block">
        <select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="text-sm   m-2 rounded-md px-3 py-1.5 text-slate-500 bg-white hover:border-slate-400 focus:ring-2 focus:ring-indigo-300"
        >
          {models.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name}
            </option>
          ))}
        </select>
      </div>

      {/* Mobile Model Selector Icon */}
      <div className="sm:hidden relative">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center gap-1 px-3 py-1.5  rounded-md bg-white hover:border-slate-400 focus:ring-2 focus:ring-indigo-300"
        >
          <Cpu className="w-4 h-4 text-slate-700" />
          <ChevronDown
            className={`w-4 h-4 text-slate-600 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Animated Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 mt-2 w-44 bg-white border border-slate-200 rounded-lg shadow-lg z-50"
            >
              {models.map((m) => (
                <button
                  key={m.id}
                  onClick={() => {
                    setSelectedModel(m.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-100 ${
                    selectedModel === m.id ? "text-indigo-600 font-medium" : "text-slate-700"
                  }`}
                >
                  {m.name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>


//


      {/* Prompt Input Area */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-h-2xl p-6 overflow-hidden my-auto"
        
      >
        <label className="block text-xl font-semibold text-slate-600 mb-6 text-center">
          What's the agenda for your mindmap?
        </label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe what you want to create..."
          aria-placeholder='2'
          className="flex-1 p-4 border-2 border-fuchsia-800  text-slate-800 rounded-md bg-amber-50/40 resize-none focus:outline-none  shadow-soft-sm"
        />
        <button
          type="submit"
          disabled={!prompt.trim()}
          className="mt-4 w-full flex itext-md tems-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white font-medium py-3 px-6 rounded-md shadow-soft-md transition-all disabled:cursor-not-allowed"
        >
          <Send className="w-5 h-5" />
          Generate Mindmap
        </button>
      </form>
    </div>
  );
}
