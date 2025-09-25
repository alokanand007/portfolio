import React, { useEffect, useRef } from "react";

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);

  // Close the modal if clicked outside of the modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Add event listener on mount
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={modalRef} // Set the ref to the modal content div
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold">{project.title}</h2>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded mt-4"
        />
        <p className="mt-2 font-about">{project.description}</p>
        <div className="flex space-x-2 mt-4">
          {project.techStack.map((tech) => (
            <span key={tech} className="bg-blue-500 text-white px-2 rounded">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4 mt-4">
          <a
            href={project.demoLink}
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <a
            href={project.repoLink}
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <button onClick={onClose} className="mt-4 text-red-500">
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
