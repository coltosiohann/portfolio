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
            I'm a passionate student at Politehnica University of Bucharest, where I dive into the exciting world of robotics, automation, and technology. I love building cool stuff, from cutting-edge robots to innovative automation systems.

In addition to my studies, I'm also actively involved in 3D printing & design, running businesses in both consumer and industrial 3D printing. This allows me to blend my creativity with hands-on engineering, creating real-world solutions.

On top of that, I enjoy programming web applications, making technology more accessible and impactful for the future!
            </p>
            <p className="text-lg text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              ,sharing my knowledge through technical writing and mentoring. I am also mentoring FTC Teams to help them achieve the success!
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
              <p className="text-gray-400">Creating intuitive and beautiful projects</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg md:col-span-2">
              <Globe className="w-12 h-12 mb-4 text-green-400" />
              <h3 className="text-xl font-semibold mb-2">Full Stack</h3>
              <p className="text-gray-400">End-to-end solutions for everything </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}