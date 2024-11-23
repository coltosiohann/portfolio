import React from 'react';

export default function Skills() {
  const skills = {
    'Frontend': ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
    'Backend': ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'],
    'Tools': ['Git', 'Docker', 'AWS', 'Firebase', 'Figma'],
  };

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}