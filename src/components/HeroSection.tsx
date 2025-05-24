
import React from 'react';
import ThreeVisualization from './ThreeVisualization';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <ThreeVisualization />
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-ping opacity-40" />
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse opacity-50" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Main heading with enhanced typography */}
        <div className="mb-6 sm:mb-8">
          <h1 className="font-roboto font-black text-4xl sm:text-6xl md:text-8xl lg:text-9xl mb-2 sm:mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
              Sabyasachi
            </span>
          </h1>
          <h1 className="font-roboto font-black text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Chatterjee
          </h1>
        </div>
        
        {/* Role with modern styling */}
        <div className="mb-4 sm:mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="inline-flex items-center px-3 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-xl">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
              <h2 className="font-open-sans font-semibold text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-200">
                <span className="hidden sm:inline">Data Analyst • Data Governance • Trainer</span>
                <span className="sm:hidden">Data Analyst & Trainer</span>
              </h2>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
        
        {/* Enhanced tagline */}
        <p className="font-open-sans text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-200 mb-8 sm:mb-12 animate-fade-in leading-relaxed px-2" style={{ animationDelay: '0.4s' }}>
          Turning 
          <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent font-semibold"> Data </span>
          into 
          <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent font-semibold"> Insights </span>
          and 
          <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent font-semibold"> Opportunities</span>
        </p>
        
        {/* Enhanced CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in mb-8 sm:mb-12 px-2" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-bold text-base sm:text-lg rounded-2xl shadow-2xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Get In Touch</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          
          <button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-6 sm:px-10 py-4 sm:py-5 border-2 border-blue-400/50 bg-white/10 backdrop-blur-md text-blue-300 font-bold text-base sm:text-lg rounded-2xl hover:bg-blue-500/20 hover:border-blue-300 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>View Portfolio</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </button>
        </div>
        
        {/* Stats section */}
        <div className="flex justify-center space-x-6 sm:space-x-8 md:space-x-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400 mb-1">4+</div>
            <div className="text-xs sm:text-sm text-gray-400 font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 mb-1">5+</div>
            <div className="text-xs sm:text-sm text-gray-400 font-medium">Industries</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-300 mb-1">100+</div>
            <div className="text-xs sm:text-sm text-gray-400 font-medium">Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
