
import React from 'react';

const AboutSection: React.FC = () => {
  const skills = [
    "Data Management", "Data Governance", "Data Quality", "Data Profiling",
    "Data Lineage", "Data Stewardship", "Metadata Management", "Data Catalog",
    "Data Integrity", "Data Validation", "Data Analysis", "Data Visualization",
    "Statistical Analysis", "Tableau", "Power BI", "Business Intelligence",
    "SQL", "Microsoft SQL Server", "Python", "Advanced Excel", "ETL Concepts",
    "Data Warehousing", "GDPR", "CCPA", "HIPAA", "DPDPA"
  ];

  const experiences = [
    {
      company: "Cognizant Technology Solutions",
      role: "Senior Data Analyst (SPED)",
      description: "Analyzed healthcare provider claims data, built SQL-driven databases, and delivered actionable insights.",
      period: "2022 - 2024",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      company: "Randstad India Private Limited",
      role: "Customer Data Analyst",
      description: "Ensured data integrity across customer systems using SQL and advanced analytics.",
      period: "2021 - 2022",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      company: "Think and Learn Pvt. Ltd.",
      role: "Customer Data Quality Analyst",
      description: "Improved data accuracy through comprehensive profiling and cleansing processes.",
      period: "2020 - 2021",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 sm:w-64 h-32 sm:h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 sm:w-48 h-24 sm:h-48 bg-cyan-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-xl mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse mr-3"></div>
            <span className="text-gray-300 font-medium text-sm sm:text-base">About Me</span>
          </div>
          <h2 className="font-roboto font-bold text-3xl sm:text-5xl md:text-6xl text-white mb-4 sm:mb-6">
            Crafting Solutions Through
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"> Data</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-2">
            Transforming complex data challenges into strategic opportunities with precision and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-start mb-12 sm:mb-20">
          {/* Profile Section */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="relative inline-block mb-6 sm:mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <img
                src="https://i.postimg.cc/wjvYPVZC/Profile-Pic.jpg"
                alt="Profile picture of Sabyasachi Chatterjee"
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover shadow-2xl border-4 border-white/20 backdrop-blur-sm group-hover:scale-105 transition-transform duration-500 mx-auto lg:mx-0"
              />
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-xl">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500 group">
              <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg mx-auto sm:mx-0 flex-shrink-0">
                  <span className="text-xl sm:text-2xl">🎯</span>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-roboto font-bold text-xl sm:text-2xl text-white mb-2">Professional Summary</h3>
                  <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto sm:mx-0"></div>
                </div>
              </div>
              <p className="font-open-sans text-gray-300 leading-relaxed text-base sm:text-lg text-center sm:text-left">
                I'm a Data Management and Analysis Specialist with <span className="text-blue-400 font-semibold">4+ years of experience</span> in healthcare, 
                banking, investment banking, retail, and customer data sectors. I excel in ensuring data 
                quality, governance, and compliance while delivering actionable insights through advanced 
                analytics and visualization.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              <div className="text-center bg-white/5 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">4+</div>
                <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2">5+</div>
                <div className="text-xs sm:text-sm text-gray-400">Industries</div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1 sm:mb-2">100+</div>
                <div className="text-xs sm:text-sm text-gray-400">Projects</div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-12 sm:mb-20">
          <h3 className="font-roboto font-bold text-3xl sm:text-4xl text-center text-white mb-10 sm:mb-16">
            Professional <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Journey</span>
          </h3>
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-3 sm:mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 bg-gradient-to-r ${exp.gradient} rounded-full`}></div>
                        <h4 className="font-roboto font-bold text-lg sm:text-xl text-white">{exp.company}</h4>
                      </div>
                      <span className="px-3 py-1 bg-white/10 text-blue-300 text-xs sm:text-sm rounded-full self-start sm:self-auto">{exp.period}</span>
                    </div>
                    <h5 className="font-semibold text-blue-300 text-base sm:text-lg mb-2 sm:mb-3">{exp.role}</h5>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{exp.description}</p>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-8 self-start lg:self-auto">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${exp.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <span className="text-lg sm:text-2xl">💼</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="font-roboto font-bold text-3xl sm:text-4xl text-center text-white mb-10 sm:mb-16">
            Technical <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-xl p-3 sm:p-4 rounded-2xl text-center border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="font-open-sans text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                  {skill}
                </span>
                <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
