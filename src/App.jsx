import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SoftSkills from "./components/SoftSkills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    // Remove bg-slate-950 because we now use the global animated gradient in index.css
    <div className="min-h-screen text-slate-100">
      {/* Global overlay layers (depth + dots) */}
      <div className="site-overlay" />
      <div className="site-dots" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Certifications />
        <Projects />
        <Skills />
        <SoftSkills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}