import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MoonExperience from './components/MoonExperience';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contributions from './components/Contributions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import './index.css';

function App() {
  return (
    <div className="App">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <MoonExperience />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Contributions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
