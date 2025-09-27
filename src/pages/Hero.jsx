import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import RotatingText from '../utils/RotatingText';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="mb-8 w-fit">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Arideep Nandi
            </span>
          </h1>

          <RotatingText
            texts={['React', 'Bits', 'Is', 'Cool!']}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light mb-8">
            Frontend Developer
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, user-centric digital experiences with modern technologies.
            Passionate about clean code, innovative design, and solving complex problems.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={scrollToAbout}
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

        <div className="flex justify-center space-x-6 mb-12">
          {[
            { Icon: Github, href: 'https://github.com/nandiarideep', target: '_blank' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/arideep-nandi', target: '_blank' },
            { Icon: Mail, href: '#contact', target: '' } // stays on same page
          ].map(({ Icon, href, target }, index) => (
            <a
              key={index}
              href={href}
              target={target}
              rel={target === '_blank' ? 'noopener noreferrer' : undefined}
              className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-300 animate-bounce cursor-pointer"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;