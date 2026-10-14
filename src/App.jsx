import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import { profile } from "./profile";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline id="experience" title="Experience" type="WORK" alt />
        <Timeline id="education" title="Education" type="EDUCATION" />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} {profile.name}</div>
      </footer>
    </>
  );
}
