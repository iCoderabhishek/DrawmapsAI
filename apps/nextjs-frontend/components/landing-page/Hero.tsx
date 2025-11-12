"use client"

import { Sparkles, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Hero() {
    const router = useRouter()
  return (
    <section  
    className="relative overflow-hidden ">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <nav className="relative border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Drawmaps AI</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">How it Works</a>
            <button className="px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 border border-cyan-200 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span className="text-sm font-medium text-cyan-900">AI-Powered Mind Mapping</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Turn Your Ideas Into
            <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Visual Mindmaps
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Transform any prompt into beautiful, interactive mindmaps instantly.
            Powered by AI to help you brainstorm, organize, and visualize complex ideas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
            onClick={() => router.push('/home')}
            className="group px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all hover:scale-105 flex items-center gap-2">
              Start Creating Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 font-medium rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-colors">
              Watch Demo
            </button>
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent z-10 h-32 bottom-0"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 max-w-3xl mx-auto">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 text-sm text-gray-600 text-left">
                  Generate mindmap...
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex-shrink-0"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-gray-200 rounded-full w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-1/2"></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 ml-14">
                  <div className="bg-cyan-100 rounded-lg p-3 h-20"></div>
                  <div className="bg-blue-100 rounded-lg p-3 h-20"></div>
                  <div className="bg-indigo-100 rounded-lg p-3 h-20"></div>
                </div>

                <div className="grid grid-cols-2 gap-3 ml-14">
                  <div className="space-y-2">
                    <div className="bg-cyan-50 rounded-lg p-3 h-16"></div>
                    <div className="bg-cyan-50 rounded-lg p-3 h-16"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-blue-50 rounded-lg p-3 h-16"></div>
                    <div className="bg-blue-50 rounded-lg p-3 h-16"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
