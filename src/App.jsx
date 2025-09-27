import Navigation from './components/Navigation.jsx';
import Hero from './pages/Hero.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';
import ExperienceTimeline from './pages/ExperienceTimeline.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <ExperienceTimeline />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;