import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, CircuitBoard, Bot, Code } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated circuit background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-900">
        <div className="absolute inset-0 opacity-10">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `pulse ${2 + Math.random() * 2}s infinite`,
              }}
            >
              <CircuitBoard size={32} className="text-blue-400" />
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <div className="flex justify-center gap-4 mb-6">
          <CircuitBoard className="w-8 h-8 text-blue-400" />
          <Bot className="w-8 h-8 text-purple-400" />
          <Code className="w-8 h-8 text-green-400" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Coltos Iohann-Stefan
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Electronics & Robotics Enthusiast
        </p>
        
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Student at Bucharest National Polytechnic University of Science and Technology
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
             className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:contact@example.com"
             className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
            <Mail size={24} />
          </a>
        </div>

        <a href="#about" className="animate-bounce inline-block">
          <ChevronDown size={32} className="text-gray-400" />
        </a>
      </div>
    </section>
  );
}