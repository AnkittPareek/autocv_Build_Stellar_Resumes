import React from "react";

const Education = ({ education }) => {
  return (
    <div className="p-5 pb-3  bg-white text-dark">
      <h4 className="text-2xl font-bold mb-4">Education</h4>
      <hr />
      {education.map((edu, index) => (
        <div key={index} className="mb-4 card card-flat">
          <div key={index} className=" card card-body">
            <h6 className="font-bold">{edu.degreeName}</h6>
            <p className="text-sm text-gray-500">{edu.institution}</p>
            <p className="text-sm text-gray-500">
              Percentage: {edu.percentage}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
