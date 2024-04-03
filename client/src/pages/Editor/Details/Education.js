import React, { useState } from "react";
import { Form } from "react-bootstrap";

const EducationDetails = ({ education, setEducation }) => {
  const handleEducationChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducation = [...education];
    updatedEducation[index][name] = value;
    setEducation(updatedEducation);
  };

  const addEducationField = () => {
    setEducation([
      ...education,
      {
        degreeName: "",
        institution: "",
        percentage: "",
      },
    ]);
  };

  const removeEducationField = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  return (
    <>
      {education.map((edu, index) => (
        <Form key={index}>
          <Form.Group controlId="degreeName">
            <Form.Label>Degree Name</Form.Label>
            <Form.Control
              type="text"
              name="degreeName"
              value={edu.degreeName}
              onChange={(e) => handleEducationChange(e, index)}
            />
          </Form.Group>
          <Form.Group controlId="institution">
            <Form.Label>Institution</Form.Label>
            <Form.Control
              type="text"
              name="institution"
              value={edu.institution}
              onChange={(e) => handleEducationChange(e, index)}
            />
          </Form.Group>
          <Form.Group controlId="percentage">
            <Form.Label>Percentage</Form.Label>
            <Form.Control
              type="text"
              name="percentage"
              value={edu.percentage}
              onChange={(e) => handleEducationChange(e, index)}
            />
          </Form.Group>
          {/* Add more form fields for other education details */}
          <button type="button" onClick={() => removeEducationField(index)}>
            Remove
          </button>
        </Form>
      ))}
      <button type="button" onClick={addEducationField}>
        Add Education
      </button>
    </>
  );
};

export default EducationDetails;
