import React from "react";

const Projects = () => (
  <section
    id="projects"
    className="py-20 bg-black border border-gray-800 rounded-lg mx-4 my-8 shadow-lg"
  >
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-semibold mb-10 text-white">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Project 1 */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-left hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-xl font-bold text-purple-400">Wadhwani Skill Development Portal</h3>
          <p className="text-gray-300 mt-3 leading-relaxed">
            A responsive e-learning portal built for the Wadhwani Foundation with interactive modules, quizzes, and progress tracking.
            <br />
            <span className="text-sm text-gray-400">
              <strong>Technologies:</strong> HTML, CSS, JavaScript, PHP
            </span>
          </p>
        </div>

        {/* Project 2 */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-left hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-xl font-bold text-purple-400">Billing System</h3>
          <p className="text-gray-300 mt-3 leading-relaxed">
            A desktop-based billing system for small businesses to manage products, customers, and invoices.
            <br />
            <span className="text-sm text-gray-400">
              <strong>Technologies:</strong> Java, MySQL
            </span>
          </p>
        </div>

        {/* Project 3 */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-left hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-xl font-bold text-purple-400">Rama Temple Website</h3>
          <p className="text-gray-300 mt-3 leading-relaxed">
            An animated website about the Rama Temple built using React. It features spiritual design, smooth navigation, and modern UI components.
            <br />
            <span className="text-sm text-gray-400">
              <strong>Technologies:</strong> React, Tailwind CSS, Framer Motion
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
