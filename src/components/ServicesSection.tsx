
import React from 'react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Job Availability",
      description: "I'm available for full-time, part-time, and freelancing opportunities in data analysis, governance, and modeling.",
      icon: "💼",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Analytics Training",
      description: "Learn data analysis and visualization with Tableau and Power BI from industry expert.",
      icon: "📊",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Business Analytics",
      description: "Master data-driven business strategies and decision-making processes.",
      icon: "📈",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Data Science",
      description: "Explore machine learning and Python-based modeling techniques.",
      icon: "🔬",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Data Governance",
      description: "Understand data quality, compliance, and management frameworks.",
      icon: "🛡️",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Student Benefits",
      description: "Enrolled students receive placement assistance, resume building, and Naukri profile optimization.",
      icon: "🎓",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-roboto font-bold text-4xl md:text-5xl text-white mb-6">
            My <span className="text-blue-400">Services</span>
          </h2>
          <p className="font-open-sans text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with me for training or job opportunities!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 hover:border-blue-500 transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-6 text-center">{service.icon}</div>
                <h3 className="font-roboto font-bold text-xl text-white mb-4 text-center">
                  {service.title}
                </h3>
                <p className="font-open-sans text-gray-300 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 animate-glow"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
