import Navigation from '@components/Navigation.jsx';
import Footer from '@components/Footer.jsx';
import DarkVeil from '@components/DarkVeil.jsx';
import MusicPlayer from '@components/MusicPlayer.jsx';
import { Suspense, lazy } from 'react';

function App() {
  const Hero = lazy(() => import('@pages/Hero.jsx'));
  const About = lazy(() => import('@pages/About.jsx'));
  const Journey = lazy(() => import('@pages/Journey.jsx'));
  const Skills = lazy(() => import('@pages/Skills.jsx'));
  const Projects = lazy(() => import('@pages/Projects.jsx'));
  const Contact = lazy(() => import('@pages/Contact.jsx'));

  return (
    <main className="relative min-h-dvh" style={{fontFamily: 'Nunito, sans-serif'}}>
      <Suspense fallback={null}>
        <div className="fixed inset-0 -z-10 bg-black/90">
          <DarkVeil
            veilOpacity={10}
            hueShift={332}
            speed={2}
          />
        </div>
        <Navigation />

        {/* Pages */}
        <span>
          <Hero />
          <About />
          <Journey />
          <Skills />
          <Projects />
          <Contact />
        </span>

        <Footer />
        <MusicPlayer />
      </Suspense>
    </main>
  );
}

export default App;