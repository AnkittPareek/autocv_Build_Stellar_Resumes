import React from "react";
import { Form } from "react-bootstrap";
import { PROJECT_TEMPLATE } from "../../../constants";

const Projects = ({ projects, setProjects }) => {
  const handleProjectsChange = (e, index) => {
    const { name, value } = e.target;
    const updatedProjects = [...projects];
    updatedProjects[index][name] = value;
    setProjects(updatedProjects);
  };

  const addProjectField = () => {
    setProjects([...projects, { ...PROJECT_TEMPLATE }]);
  };

  const removeProjectField = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  return (
    <>
      {projects.map((project, index) => (
        <Form key={index}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={project.title}
              onChange={(e) => handleProjectsChange(e, index)}
            />
          </Form.Group>
          <Form.Group controlId="teamSize">
            <Form.Label>Team Size</Form.Label>
            <Form.Control
              type="text"
              name="teamSize"
              value={project.teamSize}
              onChange={(e) => handleProjectsChange(e, index)}
            />
          </Form.Group>
          <button
            type="button"
            className="btn btn-sm btn-primary mt-2"
            onClick={() => removeProjectField(index)}
          >
            Remove
          </button>
        </Form>
      ))}
      <button
        type="button"
        className="btn btn-sm btn-primary mt-2"
        onClick={addProjectField}
      >
        Add Project
      </button>
    </>
  );
};

export default Projects;
