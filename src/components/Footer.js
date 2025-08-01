import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Disha Acharya. All rights reserved.</p>
        
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition duration-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your.email@example.com"
            className="hover:text-purple-400 transition duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
