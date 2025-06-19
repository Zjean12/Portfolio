import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Alexandre Martin
            </div>
            <p className="text-gray-400 max-w-sm">
              Développeur Frontend passionné par la création d'expériences web exceptionnelles
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              {['Accueil', 'À propos', 'Compétences', 'Projets', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase().replace('à ', 'a'));
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-left"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Suivez-moi</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors duration-300 hover:scale-110 transform"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors duration-300 hover:scale-110 transform"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors duration-300 hover:scale-110 transform"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-1">
              © {currentYear} Alexandre Martin. Fait avec <Heart size={16} className="text-red-500" /> et beaucoup de café
            </p>
            <button
              onClick={scrollToTop}
              className="p-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:scale-110 transform transition-all duration-300"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};