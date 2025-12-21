import { useState, useEffect } from 'react';
import PillNav from './PillNav';
import logo from '../assets/logo.jpeg';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (sectionId) => {
    document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 flex justify-center ${scrolled ? 'bg-gray-900/50 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
      <PillNav
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: 'Home', href: '#home', onClick: () => scrollToSection('#home') },
          { label: 'About', href: '#about', onClick: () => scrollToSection('#about') },
          { label: 'Journey', href: '#journey', onClick: () => scrollToSection('#journey') },
          { label: 'Skills', href: '#skills', onClick: () => scrollToSection('#skills') },
          { label: 'Projects', href: '#projects', onClick: () => scrollToSection('#projects') },
          { label: 'Contact', href: '#contact', onClick: () => scrollToSection('#contact') }
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#393737ff"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
    </nav>
  );
};

export default Navigation;