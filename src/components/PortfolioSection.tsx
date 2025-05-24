
import React from 'react';

const PortfolioSection: React.FC = () => {
  const projects = [
    {
      title: "Healthcare Claims Data Analysis",
      description: "Analyzed provider-side claims data to uncover trends and built comprehensive Tableau dashboards for stakeholders.",
      technologies: ["SQL", "Tableau", "Healthcare Data", "Statistical Analysis"],
      impact: "Improved claim processing efficiency by 35%",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Insurance Data Management",
      description: "Processed large insurance datasets, ensuring accuracy and compliance with regulatory standards.",
      technologies: ["Python", "SQL Server", "Data Quality", "Compliance"],
      impact: "Achieved 99.8% data accuracy",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Governance Implementation",
      description: "Designed comprehensive governance frameworks for banking clients, improving data quality and regulatory adherence.",
      technologies: ["Data Governance", "GDPR", "Metadata Management", "Data Lineage"],
      impact: "Enhanced regulatory compliance by 40%",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-roboto font-bold text-4xl md:text-5xl text-white mb-6">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="font-open-sans text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing real-world data solutions and their business impact
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-blue-500 transition-all duration-500 hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 p-8">
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center mb-4`}>
                    <span className="text-2xl text-white">📊</span>
                  </div>
                  <h3 className="font-roboto font-bold text-xl text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="font-open-sans text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-blue-400 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-blue-500 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-600 pt-4">
                  <h4 className="font-semibold text-green-400 mb-2">Impact:</h4>
                  <p className="font-open-sans text-gray-300 text-sm">
                    {project.impact}
                  </p>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
