import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

export const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
      
      {/* 3D Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3d blur-xl animate-float-slow"
          style={{ 
            transform: `translateY(${scrollY * 0.3}px) rotateX(45deg) rotateY(45deg)`,
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
          }}
        />
        <div 
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-3d blur-lg animate-float-medium"
          style={{ 
            transform: `translateY(${scrollY * 0.4}px) rotateX(-30deg) rotateZ(60deg)`,
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
          }}
        />
        <div 
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3d blur-md animate-float-fast"
          style={{ 
            transform: `translateY(${scrollY * 0.2}px) rotateY(-45deg) rotateZ(30deg)`,
            borderRadius: '40% 60% 60% 40% / 60% 40% 40% 60%'
          }}
        />
        <div 
          className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 rounded-3d blur-sm animate-float-slow"
          style={{ 
            transform: `translateY(${scrollY * 0.5}px) rotateX(60deg) rotateY(-30deg)`,
            borderRadius: '70% 30% 40% 60% / 40% 70% 30% 60%'
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo Profile avec effet 3D */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative group">
              {/* Cercles 3D en arrière-plan */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-2xl animate-pulse-slow" />
              <div className="absolute -inset-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-medium" />
              
              {/* Container photo avec effet 3D */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-500 shadow-3d group-hover:shadow-3d-hover transition-all duration-500 transform group-hover:scale-105 group-hover:rotate-3d">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 z-10" />
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Alexandre Martin - Développeur Frontend"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay avec effet holographique */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Éléments 3D flottants autour de la photo */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-cube shadow-3d animate-spin-slow">
                <div className="w-full h-full flex items-center justify-center text-white font-bold">JS</div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-cube shadow-3d animate-bounce-slow">
                <div className="w-full h-full flex items-center justify-center text-white text-sm font-bold">TS</div>
              </div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-r from-pink-400 to-pink-600 rounded-cube shadow-3d animate-float-medium">
                <div className="w-full h-full flex items-center justify-center text-white text-xs font-bold">⚛</div>
              </div>
            </div>
          </div>

          {/* Contenu textuel */}
          <div className="order-1 lg:order-2 space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-300">Bonjour, je suis</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                  Alexandre Martin
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-400 font-light max-w-2xl">
                Développeur Frontend passionné par la création d'expériences web modernes et interactives
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={scrollToNext}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white hover:scale-105 transform transition-all duration-300 shadow-3d hover:shadow-3d-hover"
              >
                <span className="flex items-center gap-2">
                  Voir mes projets
                  <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
                </span>
              </button>
              
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 hover:scale-110 transform shadow-3d hover:shadow-3d-hover"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 hover:scale-110 transform shadow-3d hover:shadow-3d-hover"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 hover:scale-110 transform shadow-3d hover:shadow-3d-hover"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator avec effet 3D */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-4 rounded-full bg-zinc-800/50 backdrop-blur-sm shadow-3d hover:shadow-3d-hover transition-all duration-300"
      >
        <ArrowDown size={32} className="text-gray-400" />
      </button>
    </section>
  );
};