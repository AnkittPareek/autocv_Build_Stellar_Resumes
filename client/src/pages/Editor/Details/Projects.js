import React from "react";
import { Form } from "react-bootstrap";

const Projects = ({ projects, setProjects }) => {
  const handleProjectsChange = (e, index) => {
    const { name, value } = e.target;
    const updatedProjects = [...projects];
    updatedProjects[index][name] = value;
    setProjects(updatedProjects);
  };

  const addProjectField = () => {
    setProjects([
      ...projects,
      {
        title: "",
        teamSize: "",
        duration: "",
        technologies: "",
        description: "",
      },
    ]);
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
          {/* Add more form fields for other project details */}
          <button type="button" onClick={() => removeProjectField(index)}>
            Remove
          </button>
        </Form>
      ))}
      <button type="button" onClick={addProjectField}>
        Add Project
      </button>
    </>
  );
};

export default Projects;
