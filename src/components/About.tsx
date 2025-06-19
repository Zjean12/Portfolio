import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Code Clean',
      description: 'J\'écris du code maintenable et optimisé suivant les meilleures pratiques'
    },
    {
      icon: <Palette size={24} />,
      title: 'Design Moderne',
      description: 'Je crée des interfaces utilisateur élégantes et intuitives'
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance',
      description: 'J\'optimise chaque détail pour une expérience utilisateur fluide'
    }
  ];

  return (
    <section id="about" className="py-20 bg-zinc-900/50 relative overflow-hidden">
      {/* Éléments 3D de fond */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3d blur-2xl animate-float-slow transform rotate-45" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3d blur-xl animate-float-medium transform -rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            À propos de <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">moi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full shadow-3d" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Passionné par le développement web depuis plus de 5 ans, je me spécialise dans la création d'applications React modernes et performantes. 
              Mon approche combine expertise technique et sens artistique pour créer des expériences utilisateur exceptionnelles.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Toujours à l'affût des dernières tendances et technologies, j'aime relever de nouveaux défis et transformer des idées complexes en solutions élégantes et accessibles.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'GraphQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-zinc-800 rounded-full text-sm font-medium text-cyan-400 border border-zinc-700 shadow-3d hover:shadow-3d-hover hover:scale-105 transform transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-zinc-800/50 rounded-xl border border-zinc-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-3d hover:shadow-3d-hover backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-300 shadow-3d">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};