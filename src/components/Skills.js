import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

const Skills = () => (
  <section
    id="skills"
    className="py-16 bg-black border-4 border-gray-800 rounded-lg mx-4 my-8 shadow-lg"
  >
    <div className="max-w-4xl mx-auto text-center px-4">
      <h2 className="text-3xl font-bold text-white mb-10">Skills</h2>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center text-white">
        <div className="flex flex-col items-center">
          <FaHtml5 size={50} className="text-orange-500" />
          <p className="mt-2">HTML5</p>
        </div>
        <div className="flex flex-col items-center">
          <FaCss3Alt size={50} className="text-blue-500" />
          <p className="mt-2">CSS3</p>
        </div>
        <div className="flex flex-col items-center">
          <FaJs size={50} className="text-yellow-400" />
          <p className="mt-2">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <FaReact size={50} className="text-cyan-400" />
          <p className="mt-2">React</p>
        </div>
        <div className="flex flex-col items-center">
          <FaNodeJs size={50} className="text-green-500" />
          <p className="mt-2">Node.js</p>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;

