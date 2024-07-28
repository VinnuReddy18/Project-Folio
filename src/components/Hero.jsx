import React from 'react';

function Hero() {
  return (
    <section id="home" className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white">
      <div className="text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-down">
          Welcome to My Project Portfolio
        </h1>
        <p className="text-xl md:text-2xl font-light animate-fade-in-up">
          Discover my work and skills
        </p>
      </div>
    </section>
  );
}

export default Hero;
