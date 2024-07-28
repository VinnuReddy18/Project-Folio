import React from 'react';

function About() {
  return (
    <section id="about" className="p-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed mb-6">
        Hi there! I'm Vinay Reddy, an active participant in the Scaler School of Technology program for the past 1 Year. During this time, I've been deeply engaged in refining my skills in web development, data structures and algorithms, and Spring Boot. Through hands-on project work, I've cultivated a robust understanding of industry-relevant technologies and methodologies. As I continue my journey with Scaler, I'm eager to leverage my expertise to contribute effectively to dynamic teams in the tech industry. Let's connect and explore potential opportunities for collaboration.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a href="https://www.linkedin.com/in/vinayreddy1829/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition duration-300">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.98 3.5C4.98 2.67 4.33 2 3.5 2 2.67 2 2 2.67 2 3.5c0 .83.67 1.5 1.5 1.5.83 0 1.48-.67 1.48-1.5zM2.9 21H4.99V7H2.9v14zM23 21h-2.1v-7.42c0-3.97-4.23-3.67-4.23 0V21h-2.1V7h2.1v1.41C17.07 7.26 19 6 21.43 6c3.5 0 3.57 2.8 3.57 6.44V21z"/>
            </svg>
          </a>
          <a href="https://github.com/VinnuReddy18/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 transition duration-300">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.88-.01-1.72-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.61.07-.6.07-.6 1 .07 1.52 1.04 1.52 1.04.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.26-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.02A9.52 9.52 0 0112 6.5c.85.004 1.7.115 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.41.2 2.45.1 2.71.64.7 1.03 1.6 1.03 2.69 0 3.85-2.35 4.68-4.58 4.93.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.18.58.69.48A10.008 10.008 0 0022 12c0-5.52-4.48-10-10-10z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
