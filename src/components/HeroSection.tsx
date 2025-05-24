
import React from 'react';
import ThreeVisualization from './ThreeVisualization';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <ThreeVisualization />
      
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="font-roboto font-black text-5xl md:text-7xl lg:text-8xl mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            Sabyasachi
          </span>
          <br />
          <span className="text-white">Chatterjee</span>
        </h1>
        
        <h2 className="font-open-sans font-semibold text-xl md:text-2xl lg:text-3xl mb-4 text-gray-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Data Analyst | Data Governance Specialist | Trainer
        </h2>
        
        <p className="font-open-sans text-lg md:text-xl lg:text-2xl text-blue-300 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Turning Data into Insights and Opportunities
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 animate-glow"
          >
            Get In Touch
          </button>
          <button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105"
          >
            View Portfolio
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
