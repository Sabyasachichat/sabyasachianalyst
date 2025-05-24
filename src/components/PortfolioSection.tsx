
import React, { useState } from 'react';

const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: '🎯' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
    { id: 'finance', name: 'Finance', icon: '💰' },
    { id: 'governance', name: 'Governance', icon: '🛡️' }
  ];

  const projects = [
    {
      title: "Healthcare Claims Data Analysis",
      description: "Analyzed provider-side claims data to uncover trends and built comprehensive Tableau dashboards for stakeholders, improving decision-making processes.",
      technologies: ["SQL", "Tableau", "Healthcare Data", "Statistical Analysis", "Python"],
      impact: "Improved claim processing efficiency by 35%",
      metrics: { accuracy: "99.2%", processing: "35%", insights: "150+" },
      gradient: "from-blue-500 to-cyan-500",
      category: "healthcare",
      image: "📊"
    },
    {
      title: "Insurance Data Management Platform",
      description: "Designed and implemented a comprehensive data management system for large insurance datasets, ensuring accuracy and regulatory compliance.",
      technologies: ["Python", "SQL Server", "Data Quality", "ETL", "Compliance Frameworks"],
      impact: "Achieved 99.8% data accuracy across all systems",
      metrics: { accuracy: "99.8%", compliance: "100%", efficiency: "42%" },
      gradient: "from-purple-500 to-pink-500",
      category: "finance",
      image: "🔒"
    },
    {
      title: "Data Governance Framework Implementation",
      description: "Designed comprehensive governance frameworks for banking clients, improving data quality and regulatory adherence across multiple business units.",
      technologies: ["Data Governance", "GDPR", "Metadata Management", "Data Lineage", "Policy Framework"],
      impact: "Enhanced regulatory compliance by 40%",
      metrics: { compliance: "40%", quality: "85%", governance: "100%" },
      gradient: "from-green-500 to-teal-500",
      category: "governance",
      image: "⚖️"
    },
    {
      title: "Real-Time Analytics Dashboard",
      description: "Built interactive real-time dashboards for retail analytics, providing instant insights into customer behavior and sales performance.",
      technologies: ["Power BI", "SQL", "Real-time Analytics", "Customer Segmentation"],
      impact: "Increased sales insights accuracy by 60%",
      metrics: { realtime: "100%", insights: "60%", adoption: "95%" },
      gradient: "from-orange-500 to-red-500",
      category: "all",
      image: "📈"
    },
    {
      title: "Customer Data Quality Enhancement",
      description: "Implemented advanced data profiling and cleansing processes to improve customer data accuracy across multiple touchpoints.",
      technologies: ["Data Profiling", "Python", "Data Cleansing", "Quality Metrics"],
      impact: "Improved customer data accuracy by 78%",
      metrics: { accuracy: "78%", cleansing: "92%", validation: "100%" },
      gradient: "from-indigo-500 to-purple-500",
      category: "governance",
      image: "🎯"
    },
    {
      title: "Predictive Analytics Model",
      description: "Developed machine learning models for predicting customer churn and lifetime value, enabling proactive business strategies.",
      technologies: ["Python", "Machine Learning", "Predictive Analytics", "Statistical Modeling"],
      impact: "Reduced customer churn by 25%",
      metrics: { churn: "25%", prediction: "87%", revenue: "15%" },
      gradient: "from-yellow-500 to-orange-500",
      category: "all",
      image: "🤖"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-xl mb-8">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse mr-3"></div>
            <span className="text-gray-300 font-medium">Featured Work</span>
          </div>
          <h2 className="font-roboto font-bold text-5xl md:text-6xl text-white mb-6">
            Project <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Showcase</span>
          </h2>
          <p className="font-open-sans text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Real-world data solutions that drive business impact and transform decision-making processes
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group px-6 py-3 rounded-2xl font-medium transition-all duration-300 backdrop-blur-xl border ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-blue-400 shadow-lg shadow-blue-500/25'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}></div>
              
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10 p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{project.image}</span>
                  </div>
                  <div className="text-right">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-roboto font-bold text-2xl text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="font-open-sans text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-blue-400 mb-3 text-sm uppercase tracking-wide">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20 hover:bg-white/20 hover:border-blue-400/50 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center bg-white/5 rounded-xl p-3 border border-white/10">
                      <div className="text-lg font-bold text-blue-300">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Impact */}
                <div className="border-t border-white/10 pt-4">
                  <h4 className="font-semibold text-green-400 mb-2 text-sm uppercase tracking-wide">Business Impact</h4>
                  <p className="font-open-sans text-gray-300">
                    {project.impact}
                  </p>
                </div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
          <h3 className="font-roboto font-bold text-3xl text-white mb-4">
            Interested in Similar Results?
          </h3>
          <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
            Let's discuss how these proven methodologies can be applied to your data challenges.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Let's Work Together</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
