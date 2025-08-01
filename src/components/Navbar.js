import React from "react";

const Navbar = () => (
  <nav className="bg-black bg-opacity-80 text-white shadow-md fixed w-full top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold tracking-wide">Welcome</h1>
      <div className="space-x-6 text-sm sm:text-base">
        <a href="#home" className="hover:text-cyan-400 transition-colors duration-300">Home</a>
        <a href="#about" className="hover:text-cyan-400 transition-colors duration-300">About</a>
        <a href="#projects" className="hover:text-cyan-400 transition-colors duration-300">Projects</a>
        <a href="#skills" className="hover:text-cyan-400 transition-colors duration-300">Skills</a>
        <a href="#contact" className="hover:text-cyan-400 transition-colors duration-300">Contact</a>

      </div>
    </div>
  </nav>
);

export default Navbar;

