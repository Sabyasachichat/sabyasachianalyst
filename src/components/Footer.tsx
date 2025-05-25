import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:sabyasachichatterjeeb83@gmail.com",
      label: "Email"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sabyasachi-analyst/",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/Sabyasachichat",
      label: "GitHub"
    },
    {
      icon: Phone,
      href: "tel:+919064504681",
      label: "Phone"
    }
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-roboto font-bold text-2xl text-white mb-4">
              <span className="text-blue-400">S</span>abyasachi Chatterjee
            </h3>
            <p className="font-open-sans text-gray-400 leading-relaxed">
              Data Management and Analysis Specialist transforming data into insights and opportunities.
            </p>
          </div>
          
          <div>
            <h4 className="font-roboto font-semibold text-lg text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block font-open-sans text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-roboto font-semibold text-lg text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="font-open-sans text-gray-500">
            © 2024 Sabyasachi Chatterjee. All rights reserved. | Available for opportunities worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
