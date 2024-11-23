import React from 'react';
import { Cpu, Bot, Code2, Wrench } from 'lucide-react';

export default function Business() {
  const services = [
    {
      icon: <Cpu className="w-12 h-12 text-blue-400" />,
      title: 'Electronics Design',
      description: 'Custom electronic circuit design and PCB layout for innovative solutions.',
    },
    {
      icon: <Bot className="w-12 h-12 text-purple-400" />,
      title: 'Robotics Development',
      description: 'Building and programming autonomous robots for various applications.',
    },
    {
      icon: <Code2 className="w-12 h-12 text-green-400" />,
      title: 'Software Development',
      description: 'Creating custom software solutions and embedded systems programming.',
    },
    {
      icon: <Wrench className="w-12 h-12 text-yellow-400" />,
      title: 'Technical Consulting',
      description: 'Expert advice on electronics and robotics projects implementation.',
    },
  ];

  return (
    <section id="business" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Services & Solutions</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 transform hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
              <button className="mt-4 px-4 py-2 bg-gray-800 text-blue-400 rounded-full text-sm hover:bg-gray-700 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}