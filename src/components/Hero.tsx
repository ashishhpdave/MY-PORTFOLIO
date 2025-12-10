import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Code2 } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.3), transparent 50%)`
        }}
      />

      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 inline-block">
          <div className="relative">
            <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 opacity-50 animate-pulse" />
            <Code2 className="relative w-20 h-20 text-cyan-400 animate-float" />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 animate-gradient">
          Ashish Dave
        </h1>

        <div className="mb-6 space-y-2">
          <p className="text-2xl md:text-4xl font-semibold text-white animate-slideUp">
            MERN Stack Developer
          </p>
          <p className="text-xl md:text-2xl text-cyan-300 animate-slideUp animation-delay-200">
            React.js Specialist & Frontend Engineer
          </p>
          <p className="text-lg md:text-xl text-purple-300 animate-slideUp animation-delay-400">
            Co-Founder of DevOps Technologies
          </p>
        </div>

        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-slideUp animation-delay-600">
          Building high-performance, modern, and user-friendly digital experiences with clean UI/UX, futuristic design, and scalable architecture.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-slideUp animation-delay-800">
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="group relative px-8 py-4 bg-transparent border-2 border-purple-500 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        <div className="flex gap-6 justify-center animate-slideUp animation-delay-1000">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            <Github className="w-6 h-6 text-gray-300 group-hover:text-cyan-400 transition-colors" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
          >
            <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="mailto:ashish@example.com"
            className="group p-4 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
          >
            <Mail className="w-6 h-6 text-gray-300 group-hover:text-purple-400 transition-colors" />
          </a>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-8 h-8 text-cyan-400" />
      </button>
    </section>
  );
}
