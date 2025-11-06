"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 min-h-screen flex items-center relative overflow-hidden" style={{
      backgroundImage: 'radial-gradient(circle, rgb(51 65 85 / 0.5) 1px, transparent 1px)',
      backgroundSize: '30px 30px'
    }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-slate-700/20 to-gray-800/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-800/20 to-slate-900/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-zinc-700/20 to-gray-700/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Animated square border lines */}
        <div className="absolute top-20 left-20 right-20 bottom-20">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-600 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-600 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-0 left-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-600 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-0 left-1 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-700 to-transparent animate-pulse" style={{animationDelay: '0.7s'}}></div>
          <div className="absolute top-0 left-2 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-slate-600 to-transparent animate-pulse" style={{animationDelay: '0.9s'}}></div>
          <div className="absolute top-0 right-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-600 to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-0 right-1 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-700 to-transparent animate-pulse" style={{animationDelay: '1.7s'}}></div>
          <div className="absolute top-0 right-2 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-slate-600 to-transparent animate-pulse" style={{animationDelay: '1.9s'}}></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="content-overlay p-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-slate-700 to-gray-900 text-white text-sm font-medium rounded-full mb-4 animate-pulse">
                React Developer
              </span>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent mb-6 leading-tight">
              Arya Utama
            </h1>
            
            <div className="mb-8">
              <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                Crafting beautiful, responsive web experiences
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                React developer with foundational Deep learning knowledge, with experiences in building web application
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProjects}
                className="group relative px-8 py-4 bg-gradient-to-r from-slate-800 to-gray-900 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button 
                onClick={scrollToContact}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 hover:shadow-lg"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}