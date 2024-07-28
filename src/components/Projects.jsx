import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    {
      id: 1,
      image: 'path/to/scalersage.jpg',
      title: 'Scaler Sage',
      description: 'A bot to manage and streamline student information for Scaler School.',
      details: {
        deploymentLink: 'https://scalersage-sst.onrender.com/',
        githubLink: 'https://github.com/username/scalersage',
        usedStack: 'GitHub, HTML, CSS, JavaScript, NodeJs, Express.js, Google AI Studio',
        objective: 'Developed a bot to manage and streamline student information for Scaler School, enhancing the efficiency of administrative tasks.',
        keyFeatures: [
          'Developed a web interface using basic HTML and CSS for ease of interaction and data management.',
          'Integrated form validation and error handling to ensure data integrity.',
          'Designed a responsive UI with HTML, CSS, and JavaScript to enhance user experience.',
        ],
        outcome: 'Successfully served more than 100 users, improving the efficiency of administrative tasks at Scaler School. Achieved outbound bandwidth utilization of over 50 MB.',
      },
    },
    {
      id: 2,
      image: 'path/to/event-management.jpg',
      title: 'Event Management System',
      description: 'Streamline the planning and execution of events, including managing event details, participants, venues, and organizers.',
      details: {
        deploymentLink: 'https://github.com/VinnuReddy18/event-management-system',
        githubLink: 'https://github.com/VinnuReddy18/event-management-system',
        usedStack: 'Spring Boot, MySQL, Hibernate ORM, RESTful API',
        objective: 'Developed to streamline the planning and execution of events, including managing event details, participants, venues, and organizers.',
        keyFeatures: [
          'Managed event details with CRUD operations, ensuring data integrity.',
          'Handled participant registration, listing, and CRUD operations.',
          'Managed venues with CRUD operations and availability checks.',
          'Allowed organizers to manage their profiles and events.',
        ],
        architecture: 'Built a RESTful API using Spring Boot. Integrated with MySQL and used Hibernate ORM for database operations.',
        responsibilities: 'Designed and implemented backend systems. Conducted testing and debugging for system stability.',
        role: 'One of the five contributors responsible for implementing Services section in Backend Development.',
      },
    },
    {
      id: 3,
      image: 'path/to/algoved.jpg',
      title: 'Algo Ved',
      description: 'A platform to decrease the gap between seniors and freshers by teaching fundamentals required to start a programming journey.',
      details: {
        deploymentLink: 'https://algoved.example.com',
        githubLink: 'https://github.com/username/algoved',
        usedStack: 'React, JSX, Tailwind CSS',
        objective: 'To decrease the gap between seniors and freshers by teaching fundamentals required to start a programming journey.',
        keyFeatures: [
          'Joining the classes from the site.',
          'Access to community from the site.',
          'Implementation of chatbot is in development.',
        ],
      },
    },
    // Add more projects as needed
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="p-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <h2 className="text-4xl font-extrabold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={() => openModal(project)} />
        ))}
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
    </section>
  );
}

export default Projects;
