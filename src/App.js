import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black-500 via-black-500 to-black-400 text-white scroll-smooth">
      {/* Ensure this is applied in index.css or tailwind config too */}
      <Navbar />
      <main className="pt-16 space-y-10">
        <HeroSection />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;



