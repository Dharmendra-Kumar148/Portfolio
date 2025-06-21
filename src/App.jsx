import Hero from './components/Hero'
import About from './components/About';
import Features from './components/Features'
import Projects from './components/Projects';
import Contact from './components/Contact'
import Footer from './components/Footer';
import ExperienceTimeline from './components/ExperienceTimeline';
import TechStack from './components/TechStack';
// import TechStackGrid from './components/TechStackGrid';

function App() {

  return (
    <main className="bg-black text-white font-sans">
      <Hero />
      <About />
      <TechStack />
      {/* <TechStackGrid /> */}
      <ExperienceTimeline />
      <Features />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App
