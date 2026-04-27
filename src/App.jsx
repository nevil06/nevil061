import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contributions from './components/Contributions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ScrollProgress from './components/ScrollProgress';
import ThemeToggle from './components/ThemeToggle';
import './index.css';

function App() {
  return (
    <div className="App">
      <ScrollProgress />
      <ThemeToggle />
      
      {/* Random red corner splashes */}
      <div className="corner-splash-1"></div>
      <div className="corner-splash-2"></div>
      <div className="corner-splash-3"></div>
      
      {/* Global dark red flashes */}
      <div className="global-flash-1"></div>
      <div className="global-flash-2"></div>
      <div className="global-flash-3"></div>
      
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Contributions />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
