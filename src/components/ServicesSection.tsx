
import React from 'react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Full-Time Opportunities",
      description: "Available for senior data analyst, data governance specialist, and data management roles in leading organizations.",
      icon: "💼",
      gradient: "from-blue-500 to-cyan-500",
      features: ["Immediate availability", "Relocatable", "Remote/Hybrid options"]
    },
    {
      title: "Data Analytics Training",
      description: "Comprehensive training programs in Tableau, Power BI, SQL, and advanced analytics techniques.",
      icon: "📊",
      gradient: "from-purple-500 to-pink-500",
      features: ["Hands-on projects", "Industry datasets", "Certification prep"]
    },
    {
      title: "Business Analytics",
      description: "Master data-driven business strategies, KPI development, and decision-making frameworks.",
      icon: "📈",
      gradient: "from-green-500 to-teal-500",
      features: ["Strategic planning", "ROI analysis", "Market insights"]
    },
    {
      title: "Data Science Mentoring",
      description: "Expert guidance in machine learning, Python programming, and advanced statistical modeling.",
      icon: "🔬",
      gradient: "from-orange-500 to-red-500",
      features: ["ML algorithms", "Python/R", "Statistical analysis"]
    },
    {
      title: "Data Governance Consulting",
      description: "Implementation of data quality frameworks, compliance strategies, and governance policies.",
      icon: "🛡️",
      gradient: "from-indigo-500 to-purple-500",
      features: ["GDPR compliance", "Data quality", "Policy development"]
    },
    {
      title: "Career Development",
      description: "Complete career support including placement assistance, resume optimization, and interview preparation.",
      icon: "🎓",
      gradient: "from-yellow-500 to-orange-500",
      features: ["Job placement", "Resume building", "Interview prep"]
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-xl mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></div>
            <span className="text-gray-300 font-medium text-sm sm:text-base">Services & Opportunities</span>
          </div>
          <h2 className="font-roboto font-bold text-3xl sm:text-5xl md:text-6xl text-white mb-4 sm:mb-6">
            Ready to <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">Collaborate</span>
          </h2>
          <p className="font-open-sans text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-2">
            Whether you're looking to hire a data expert, learn new skills, or transform your organization's data strategy, 
            I'm here to help you achieve your goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10 p-6 sm:p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 mb-4`}>
                    <span className="text-2xl sm:text-3xl">{service.icon}</span>
                  </div>
                  <h3 className="font-roboto font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-open-sans text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full group-hover:scale-125 transition-transform duration-300`}></div>
                      <span className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/10">
          <h3 className="font-roboto font-bold text-2xl sm:text-3xl text-white mb-4 sm:mb-6">
            Ready to Get Started?
          </h3>
          <p className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Let's discuss how we can work together to achieve your data goals and unlock new opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 text-white font-bold text-base sm:text-lg rounded-2xl shadow-2xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Contact Me Now</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-400/50 bg-white/10 backdrop-blur-md text-blue-300 font-bold text-base sm:text-lg rounded-2xl hover:bg-blue-500/20 hover:border-blue-300 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>View My Work</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
