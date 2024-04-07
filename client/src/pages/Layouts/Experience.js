import React from "react";

const Experience = ({ experience }) => {
  return (
    <div className="px-5 pb-1 bg-white text-dark">
      <h4 className="text-2xl font-bold mb-4">Experiences</h4>
      <hr />
      {experience.map((exp, index) => (
        <div key={index} className="mb-4 card card-flat">
          <div key={index} className=" card card-body">
            {/* <div className="d-flex justify-content-between">
              <h6 className="font-bold">{exp.position}</h6>
              <p className="text-sm text-gray-500">
                {exp.startDate} - {exp.endDate}
              </p>
            </div> */}

            <p className="text-sm text-gray-500 mb-2">{exp.organization}</p>
            <p className="text-sm text-gray-500 mb-2">{exp.location}</p>

            {/* <p className="text-sm text-gray-500">{exp.ctc}</p>
            <p className="text-sm text-gray-500">{exp.technologies}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
