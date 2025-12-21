import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="mb-8 w-fit">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-gray-800 to-black/80 bg-clip-text text-transparent animate-pulse">
              Arideep Nandi
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-800 font-light mb-8 font-semibold">
            Frontend Developer
          </h2>
          <p className="text-lg text-gray-800 font-semibold max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, user-centric digital experiences with modern technologies.
            Passionate about clean code, innovative design, and solving complex problems.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            View My Work
          </button>

          <a
            href="/resume.pdf"
            download
            className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Download CV
          </a>
        </div>

        <div className="flex justify-center space-x-6 mb-20">
          {[
            { Icon: Github, href: 'https://github.com/nandiarideep', target: '_blank' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/arideep-nandi', target: '_blank' },
            { Icon: Mail, href: '#contact', target: '' }
          ].map(({ Icon, href, target }, index) => (
            <a
              key={index}
              href={href}
              target={target}
              rel={target === '_blank' ? 'noopener noreferrer' : undefined}
              className="text-gray-700 hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <Icon size={30} />
            </a>
          ))}
        </div>

        <button
          onClick={scrollToProjects}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-300 animate-bounce cursor-pointer"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;