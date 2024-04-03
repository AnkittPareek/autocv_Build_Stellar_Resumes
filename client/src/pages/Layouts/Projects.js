import React, { useState } from "react";

const Projects = ({ projects }) => {
  return (
    <div className="px-5 pb-3 pt-0 bg-white text-dark">
      <h4 className="text-2xl font-bold mb-4">Projects</h4>
      <hr />
      {projects.map((project, index) => (
        <div key={index} className="mb-4 card card-flat">
          <div key={index} className=" card card-body">
            <h6 className="font-bold">{project.title}</h6>
            <p className="text-sm text-gray-500">
              Team Size: {project.teamSize}
            </p>
            <p className="text-sm text-gray-500">
              Duration: {project.duration}
            </p>
            <p className="text-sm text-gray-500">
              Technologies: {project.technologies}
            </p>
            <p className="text-sm text-gray-500">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
