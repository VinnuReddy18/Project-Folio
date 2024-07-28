import React from 'react';

function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-4 sticky top-0 z-50 shadow-lg">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <a href="#home" className="text-2xl font-extrabold tracking-wide">Vinay's Project Portfolio</a>
        <div className="hidden md:flex space-x-8">
          <a href="#projects" className="text-lg font-semibold tracking-wide hover:text-gray-400 transition duration-300 transform hover:-translate-y-1">Projects</a>
          <a href="#about" className="text-lg font-semibold tracking-wide hover:text-gray-400 transition duration-300 transform hover:-translate-y-1">About</a>
          <a href="#contact" className="text-lg font-semibold tracking-wide hover:text-gray-400 transition duration-300 transform hover:-translate-y-1">Resume</a>
        </div>
        <div className="md:hidden">
          {/* Mobile menu icon */}
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
