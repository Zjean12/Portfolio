import React, { useEffect, useRef, useState } from 'react';

export const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'React / Next.js', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-800' },
    { name: 'Tailwind CSS', level: 88, color: 'from-teal-400 to-blue-500' },
    { name: 'Node.js', level: 85, color: 'from-green-500 to-green-700' },
    { name: 'GraphQL', level: 80, color: 'from-pink-500 to-rose-500' },
    { name: 'Python', level: 75, color: 'from-yellow-400 to-orange-500' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Mes <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">compétences</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des applications web modernes et performantes
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-white">{skill.name}</span>
                <span className="text-cyan-400 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 200}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
            <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
            <div className="text-gray-400">Années d'expérience</div>
          </div>
          <div className="text-center p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
            <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-400">Projets réalisés</div>
          </div>
          <div className="text-center p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
            <div className="text-3xl font-bold text-pink-400 mb-2">99%</div>
            <div className="text-gray-400">Clients satisfaits</div>
          </div>
        </div>
      </div>
    </section>
  );
};