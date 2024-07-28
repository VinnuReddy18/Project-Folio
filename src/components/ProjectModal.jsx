import React from 'react';
import { FaTimes } from 'react-icons/fa';

function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white text-black p-8 rounded-lg max-w-3xl mx-auto relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-black">
          <FaTimes size={24} />
        </button>
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <p className="mb-4">{project.details.objective}</p>
        <h3 className="text-xl font-bold mb-2">Key Features:</h3>
        <ul className="list-disc list-inside mb-4">
          {project.details.keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        {project.details.architecture && (
          <>
            <h3 className="text-xl font-bold mb-2">Architecture:</h3>
            <p className="mb-4">{project.details.architecture}</p>
          </>
        )}
        {project.details.responsibilities && (
          <>
            <h3 className="text-xl font-bold mb-2">Responsibilities:</h3>
            <p className="mb-4">{project.details.responsibilities}</p>
          </>
        )}
        <h3 className="text-xl font-bold mb-2">Stack Used:</h3>
        <p className="mb-4">{project.details.usedStack}</p>
        <div className="flex space-x-4">
          <a
            href={project.details.deploymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            View Deployment
          </a>
          <a
            href={project.details.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
