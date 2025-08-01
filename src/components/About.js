import React from "react";

const About = () => (
  <section
    id="about"
    className="py-20 bg-black border-4 border-grey-500 rounded-lg mx-4 my-8 text-white"
  >
    <div className="max-w-4xl mx-auto text-center px-4">
      <h2 className="text-3xl font-semibold mb-6 text-white">About Me</h2>
      <p className="text-gray-300 leading-relaxed text-lg">
        I am a final-year Diploma student in Computer Science Engineering at Karnataka Polytechnic (KPT), Mangalore. Over the course of my diploma program, I have developed a strong foundation in core computer science subjects such as:
        <br /><br />
        <span className="block">• Programming (C, C++, Python, Java)</span>
        <span className="block">• Database Management & SQL</span>
        <span className="block">• Web Development (HTML, CSS, JavaScript)</span>
        <span className="block">• Computer Networks, Data Structures & Software Engineering</span>
        <br />
        My academic journey at KPT has helped me gain hands-on experience through mini-projects, lab work, and team-based assignments.
        <br /><br />
        Currently, I’m working on my final-year project, which is helping me sharpen my problem-solving, project management, and teamwork skills. It's also giving me a deeper understanding of how to design, build, and test real-world software solutions.
      </p>
    </div>
  </section>
);

export default About;
