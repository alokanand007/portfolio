import React, { useState } from "react";
import pyramidImage from "../assets/piramid.png";
import timer from "../assets/timer.png";
import ProjectModal from "./ProjectModal"; // Make sure to import the ProjectModal component

const projects = [
  {
    id: 1,
    title: "Javascript-patterns",
    image: pyramidImage,
    description: "Collection of javascript patterns ",
    demoLink: "https://github.com/alokanand007/javascript-patterns.git",
    repoLink: "https://github.com/alokanand007/javascript-patterns.git",
    techStack: ["Javascript", "Vs code"],
  },
  {
    id: 2,
    title: "React-timer",
    image: timer,
    description: "My first timer",
    demoLink: "https://alokanand007.github.io/react-timer/",
    repoLink: "https://github.com/alokanand007/react-timer.git",
    techStack: ["Html", "Css", "React"],
  },
  // Add more projects as needed
];

const WorksPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="p-4">
      <div className="flex justify-center mb-20" id="works-section">
        <h1 className="font-skill skill-heading">Projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg shadow-md p-4 cursor-pointer"
            onClick={() => handleOpenModal(project)}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded"
            />
            <p className="mt-2 font-about">{project.description}</p>
            <div className="flex space-x-2 mt-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-500 text-white px-2 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default WorksPage;
