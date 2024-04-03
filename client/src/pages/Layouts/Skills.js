import React from "react";

const SkillBarGraph = ({ skill }) => {
  const { name, percentage } = skill;

  // Adjust the width of the bar based on the skill percentage
  const barWidth = `${percentage}%`;

  return (
    <div className="mb-4 d-flex align-items-center ">
      <p className="mb-1 col-2 tag tag">{name}</p>
      <div className="progress col-10" style={{ height: "20px" }}>
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: barWidth }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {percentage}%
        </div>
      </div>
    </div>
  );
};

const SkillsWithGraph = ({ skills }) => {
  return (
    <div className="px-5 pb-3 pt-0 bg-white text-dark">
      <h4 className="text-2xl font-bold mb-4">Skills</h4>
      <hr />
      {skills.map((skill, index) => (
        <SkillBarGraph key={index} skill={skill} />
      ))}
    </div>
  );
};

export default SkillsWithGraph;
