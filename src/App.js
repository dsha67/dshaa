import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black-500 via-black-500 to-black-400 text-white scroll-smooth">
      {/* Ensure this is applied in index.css or tailwind config too */}
      <Navbar />
      <main className="pt-16 space-y-10">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />

      </main>
    </div>
  );
}

export default App;



