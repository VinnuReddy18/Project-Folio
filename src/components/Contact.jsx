import React from 'react';
import { FaEye, FaDownload } from 'react-icons/fa';

function Resume() {
  const handleViewResume = () => {
    window.open('https://drive.google.com/file/d/14kW9OqROhIaKgFjC0nLUMX-NBhW2pEwT/view?usp=sharing', '_blank');
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/14kW9OqROhIaKgFjC0nLUMX-NBhW2pEwT/view?usp=sharing';
    link.download = 'https://drive.google.com/file/d/14kW9OqROhIaKgFjC0nLUMX-NBhW2pEwT/view?usp=sharing';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="p-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <h2 className="text-4xl font-extrabold text-center mb-12">Resume</h2>
      <div className="max-w-xl mx-auto text-center">
        <button
          onClick={handleViewResume}
          className="flex items-center justify-center w-full p-4 mb-6 bg-blue-600 text-white rounded-lg shadow-lg transform transition duration-300 hover:bg-blue-700 hover:scale-105"
        >
          <FaEye className="mr-2" />
          View Resume
        </button>
        <button
          onClick={handleDownloadResume}
          className="flex items-center justify-center w-full p-4 bg-green-600 text-white rounded-lg shadow-lg transform transition duration-300 hover:bg-green-700 hover:scale-105"
        >
          <FaDownload className="mr-2" />
          Download Resume
        </button>
      </div>
    </section>
  );
}

export default Resume;
