import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function ProjectCard({ project, onClick }) {
  return (
    <div
    onClick={onClick}
    className="cursor-pointer bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
  >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-200 mb-4">{project.description}</p>
        <p className="text-sm text-gray-300 flex items-center">
          Click to view full details <FaArrowRight className="ml-2" />
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
