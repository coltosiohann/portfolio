import React from 'react';
import { Code2, Palette, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              I'm a passionate full-stack developer with 5 years of experience building modern web applications.
              I specialize in creating beautiful, functional, and user-friendly experiences that solve real-world problems.
            </p>
            <p className="text-lg text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or sharing my knowledge through technical writing and mentoring.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <Code2 className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-400">Building scalable applications with modern technologies</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <Palette className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-gray-400">Creating intuitive and beautiful user interfaces</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg md:col-span-2">
              <Globe className="w-12 h-12 mb-4 text-green-400" />
              <h3 className="text-xl font-semibold mb-2">Full Stack</h3>
              <p className="text-gray-400">End-to-end solutions from backend to frontend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}