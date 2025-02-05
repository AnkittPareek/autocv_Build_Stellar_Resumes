import React from "react";
import { Form } from "react-bootstrap";
import { SKILL_TEMPLATE } from "../../../constants";

const Skills = ({ skills, setSkills }) => {
  const handleSkillsChange = (e, index) => {
    const { name, value } = e.target;
    const updatedSkills = [...skills];
    updatedSkills[index][name] = value;
    setSkills(updatedSkills);
  };

  const addSkillField = () => {
    setSkills([...skills, { ...SKILL_TEMPLATE }]);
  };

  const removeSkillField = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  return (
    <>
      {skills.map((skill, index) => (
        <Form key={index}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={skill.name}
              onChange={(e) => handleSkillsChange(e, index)}
            />
          </Form.Group>
          <Form.Group controlId="percentage">
            <Form.Label>Percentage</Form.Label>
            <Form.Control
              type="text"
              name="percentage"
              value={skill.percentage}
              onChange={(e) => handleSkillsChange(e, index)}
            />
          </Form.Group>
          <button
            type="button"
            className="btn btn-sm btn-primary mt-2"
            onClick={() => removeSkillField(index)}
          >
            Remove
          </button>
        </Form>
      ))}
      <button
        type="button"
        className="btn btn-sm btn-primary mt-2"
        onClick={addSkillField}
      >
        Add Skill
      </button>
    </>
  );
};

export default Skills;
