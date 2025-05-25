import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sabyasachichatterjeeb83@gmail.com",
      href: "mailto:sabyasachichatterjeeb83@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91- 9064504681 / 9547462874",
      href: "tel:+919064504681",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sabyasachi-analyst",
      href: "https://www.linkedin.com/in/sabyasachi-analyst/",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Sabyasachichat",
      href: "https://github.com/Sabyasachichat",
      gradient: "from-gray-600 to-gray-800"
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-xl mb-6 md:mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></div>
            <span className="text-gray-300 font-medium text-sm sm:text-base">Let's Connect</span>
          </div>
          <h2 className="font-roboto font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6">
            Get In <span className="bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="font-open-sans text-lg sm:text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-2">
            Ready to transform your data strategy? Let's discuss how we can work together to unlock the full potential of your data.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : undefined}
              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/10 p-6 md:p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20 shadow-lg hover:shadow-xl"
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${info.gradient} rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4 md:mb-6 mx-auto`}>
                <info.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div className="text-center">
                <h3 className="font-roboto font-bold text-lg md:text-xl text-white group-hover:text-blue-300 transition-colors duration-300 mb-2">
                  {info.label}
                </h3>
                <p className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors duration-300 break-all">
                  {info.value}
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <svg className="w-5 h-5 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Info Cards */}
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Response Time */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/10 p-6 md:p-8">
            <div className="flex items-center justify-center space-x-4 mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                <Clock className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-roboto font-bold text-lg md:text-xl text-white mb-4 md:mb-6">Response Time</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center justify-center space-x-3 p-2 md:p-3 bg-white/5 rounded-xl">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-open-sans text-gray-300 text-sm md:text-base">Email: 24 hours</span>
                </div>
                <div className="flex items-center justify-center space-x-3 p-2 md:p-3 bg-white/5 rounded-xl">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span className="font-open-sans text-gray-300 text-sm md:text-base">LinkedIn: Same day</span>
                </div>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/10 p-6 md:p-8">
            <div className="flex items-center justify-center space-x-4 mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                <MapPin className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-roboto font-bold text-lg md:text-xl text-white mb-4 md:mb-6">Availability</h3>
              <div className="space-y-2 md:space-y-3">
                <div className="text-gray-300 text-sm md:text-base">🇮🇳 Based in India</div>
                <div className="text-gray-300 text-sm md:text-base">🌍 Remote work</div>
                <div className="text-gray-300 text-sm md:text-base">✈️ Open to relocation</div>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/10 p-6 md:p-8 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-center space-x-4 mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                <Clock className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-roboto font-bold text-lg md:text-xl text-white mb-4 md:mb-6">Working Hours</h3>
              <div className="space-y-2 md:space-y-3">
                <div className="text-gray-300 text-sm md:text-base">Mon - Fri: 9 AM - 6 PM</div>
                <div className="text-gray-300 text-sm md:text-base">Timezone: IST (GMT +5:30)</div>
                <div className="text-gray-300 text-sm md:text-base">Flexible for global clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
