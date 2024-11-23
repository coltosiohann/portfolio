import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Coltos Iohann-Stefan</h3>
            <p className="text-gray-400">Building the future through technology and innovation.</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Bucharest, Romania</li>
              <li><a href="mailto:contact@example.com" className="text-gray-400 hover:text-blue-400 transition-colors">contact@example.com</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com"
                 className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart size={16} className="mx-2 text-red-500" /> by Coltos Iohann-Stefan
          </p>
        </div>
      </div>
    </footer>
  );
}