
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will respond within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
      value: "9064504681 / 9547462874",
      href: "tel:9064504681",
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

  const quickTopics = [
    "Job Opportunity",
    "Training Inquiry",
    "Consulting Project",
    "Data Analysis",
    "Freelance Work",
    "General Question"
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-xl mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></div>
            <span className="text-gray-300 font-medium">Let's Connect</span>
          </div>
          <h2 className="font-roboto font-bold text-5xl md:text-6xl text-white mb-6">
            Get In <span className="bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="font-open-sans text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your data strategy? Let's discuss how we can work together to unlock the full potential of your data.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-roboto font-bold text-2xl text-white">Send a Message</h3>
                    <p className="text-gray-400">I'll respond within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block font-open-sans text-gray-300 font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full px-4 py-4 bg-white/5 border rounded-2xl text-white placeholder-gray-500 backdrop-blur-sm transition-all duration-300 ${
                          focusedField === 'name' 
                            ? 'border-blue-400 bg-white/10 shadow-lg shadow-blue-500/20' 
                            : 'border-white/20 hover:border-white/30'
                        }`}
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-open-sans text-gray-300 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full px-4 py-4 bg-white/5 border rounded-2xl text-white placeholder-gray-500 backdrop-blur-sm transition-all duration-300 ${
                          focusedField === 'email' 
                            ? 'border-blue-400 bg-white/10 shadow-lg shadow-blue-500/20' 
                            : 'border-white/20 hover:border-white/30'
                        }`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block font-open-sans text-gray-300 font-medium">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-4 bg-white/5 border rounded-2xl text-white backdrop-blur-sm transition-all duration-300 ${
                        focusedField === 'subject' 
                          ? 'border-blue-400 bg-white/10 shadow-lg shadow-blue-500/20' 
                          : 'border-white/20 hover:border-white/30'
                      }`}
                    >
                      <option value="" className="bg-gray-800">Select a topic</option>
                      {quickTopics.map((topic) => (
                        <option key={topic} value={topic} className="bg-gray-800">{topic}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block font-open-sans text-gray-300 font-medium">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={6}
                      className={`w-full px-4 py-4 bg-white/5 border rounded-2xl text-white placeholder-gray-500 backdrop-blur-sm transition-all duration-300 resize-none ${
                        focusedField === 'message' 
                          ? 'border-blue-400 bg-white/10 shadow-lg shadow-blue-500/20' 
                          : 'border-white/20 hover:border-white/30'
                      }`}
                      placeholder="Tell me about your project, opportunity, or question..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="group w-full px-8 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-500 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <span>Send Message</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-roboto font-bold text-xl text-white">Contact Information</h3>
                  <p className="text-gray-400">Multiple ways to reach me</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center space-x-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] border border-white/10 hover:border-white/20"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">{info.label}</h4>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{info.value}</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-roboto font-bold text-xl text-white">Response Time</h3>
                  <p className="text-gray-400">Quick and reliable communication</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-open-sans text-gray-300">Email: Within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span className="font-open-sans text-gray-300">LinkedIn: Same day</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span className="font-open-sans text-gray-300">Phone: Available 9 AM - 6 PM IST</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-roboto font-bold text-xl text-white">Location</h3>
                  <p className="text-gray-400">Open to opportunities worldwide</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-gray-300">🇮🇳 Based in India</div>
                <div className="text-gray-300">🌍 Available for remote work</div>
                <div className="text-gray-300">✈️ Open to relocation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
