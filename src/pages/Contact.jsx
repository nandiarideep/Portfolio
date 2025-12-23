import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      Icon: Mail,
      title: 'Email',
      value: 'nandiarideep@gmail.com',
      link: 'mailto:nandiarideep@gmail.com'
    },
    {
      Icon: Phone,
      title: 'Phone',
      value: '+91 7595932236',
      link: 'tel: +917595932236'
    },
    {
      Icon: MapPin,
      title: 'Location',
      value: 'Kolkata, India',
      link: '#'
    }
  ];

  const socialLinks = [
    { Icon: Github, href: 'https://github.com/nandiarideep', name: 'GitHub' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/arideep-nandi/', name: 'LinkedIn' },
    { Icon: Youtube, href: 'https://www.youtube.com/@nandybhai97', name: 'Youtube' }
  ];

  return (
    <section id="contact" className="py-20 min-h-dvh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-200 italic max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations.
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-100 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-100 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-100 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Info</h3>
              <div className="space-y-4">
                {contactInfo.map(({ Icon, title, value, link }, index) => (
                  <a
                    key={index}
                    href={link}
                    className="flex items-center p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-200 hover:scale-[1.02]"
                  >
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mr-4">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{title}</h4>
                      <p className="text-gray-400 text-sm">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map(({ Icon, href, name }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
                    title={name}
                    target="_blank"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;