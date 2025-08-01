import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      aria-label="Home Section"
      className="relative h-screen w-full flex flex-col items-center justify-center text-white text-center px-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.pinimg.com/originals/62/39/4d/62394d753859943e6a1a36443ef78795.gif')"
      }}
    >
      {/* Overlay box */}
      <div className="bg-black bg-opacity-50 p-6 rounded-lg">
        <img
          src="/profile.jpg" // Make sure this image is in your public folder
          alt="Disha Acharya"
          loading="lazy"
          className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-6 object-cover"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm Disha Acharya
        </h1>
        <p className="text-lg md:text-xl">
          Web Developer | Designer | Creator
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10">
        <a href="#about" aria-label="Scroll to About section">
          <span className="text-white text-3xl animate-bounce">↓</span>
        </a>
      </div>
    </section>
  );
};

export default Home;
