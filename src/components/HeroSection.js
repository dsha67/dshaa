import React from "react";

const HeroSection = () => {
  return (
    <section
      className="h-screen w-full flex flex-col items-center justify-center text-white text-center px-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.pinimg.com/originals/62/39/4d/62394d753859943e6a1a36443ef78795.gif')"
      }}
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-lg">
        <img
          src="disha.jpg"
          alt="Disha Acharya"
          className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-6 object-cover"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Disha Acharya</h1>
        <p className="text-xl">Web Developer | Designer | Creator</p>
      </div>
    </section>
  );
};

export default HeroSection;
