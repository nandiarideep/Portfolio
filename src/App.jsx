import Navigation from './components/Navigation.jsx';
import Hero from './pages/Hero.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';
import ExperienceTimeline from './pages/ExperienceTimeline.jsx';
import Aurora from './components/Aurora.jsx';

function App() {
  return (
    <main className="h-full bg-gray-900/50 text-white relative overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <ExperienceTimeline />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;