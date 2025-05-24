
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
      description: "Analyzed healthcare provider claims data, built SQL-driven databases, and delivered actionable insights."
    },
    {
      company: "Randstad India Private Limited",
      role: "Customer Data Analyst",
      description: "Ensured data integrity across customer systems using SQL and advanced analytics."
    },
    {
      company: "Think and Learn Pvt. Ltd.",
      role: "Customer Data Quality Analyst",
      description: "Improved data accuracy through comprehensive profiling and cleansing processes."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-roboto font-bold text-4xl md:text-5xl text-white mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <img
                src="https://i.postimg.cc/wjvYPVZC/Profile-Pic.jpg"
                alt="Profile picture of Sabyasachi Chatterjee"
                className="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-blue-500 animate-float"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <h3 className="font-roboto font-bold text-2xl text-blue-400 mb-4">Professional Summary</h3>
              <p className="font-open-sans text-gray-300 leading-relaxed text-lg">
                I'm a Data Management and Analysis Specialist with 4 years of experience in healthcare, 
                banking, investment banking, retail, and customer data sectors. I excel in ensuring data 
                quality, governance, and compliance while delivering actionable insights through advanced 
                analytics and visualization.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <h3 className="font-roboto font-bold text-2xl text-blue-400 mb-6">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6">
                    <h4 className="font-semibold text-white text-lg">{exp.company}</h4>
                    <h5 className="font-medium text-blue-300 mb-2">{exp.role}</h5>
                    <p className="text-gray-400 text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-roboto font-bold text-3xl text-center text-white mb-12">
            Technical <span className="text-blue-400">Skills</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg text-center border border-gray-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105"
              >
                <span className="font-open-sans text-sm text-gray-300 hover:text-white transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
