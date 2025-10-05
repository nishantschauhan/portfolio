import './App.css';
import ContactSection from './components/ContactSection';
import ExperienceSection from './components/ExperienceSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import SkillsSection from './components/SkillsSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <HeroSection/>
        <ExperienceSection/>
        <SkillsSection/>
        <ContactSection/>
      </header>
    </div>
  );
}

export default App;
