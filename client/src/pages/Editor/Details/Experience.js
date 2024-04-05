import React from "react";
import { Form } from "react-bootstrap";
import { EXPERIENCE_TEMPLATE } from "../../../constants";

const Experience = ({ experience, setExperience }) => {
  const handleExperienceChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperience = [...experience];
    updatedExperience[index][name] = value;
    setExperience(updatedExperience);
  };

  const addExperienceField = () => {
    setExperience([...experience, EXPERIENCE_TEMPLATE]);
  };

  const removeExperienceField = (index) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    setExperience(updatedExperience);
  };

  return (
    <>
      {experience.map((exp, index) => (
        <Form key={index}>
          <Form.Group controlId="organization">
            <Form.Label>Organization</Form.Label>
            <Form.Control
              type="text"
              name="organization"
              value={exp.organization}
              onChange={(e) => handleExperienceChange(e, index)}
            />
          </Form.Group>
          <Form.Group controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              value={exp.location}
              onChange={(e) => handleExperienceChange(e, index)}
            />
          </Form.Group>
          {/* Add more form fields for other experience details */}
          <button type="button" onClick={() => removeExperienceField(index)}>
            Remove
          </button>
        </Form>
      ))}
      <button type="button" onClick={addExperienceField}>
        Add Experience
      </button>
    </>
  );
};

export default Experience;
