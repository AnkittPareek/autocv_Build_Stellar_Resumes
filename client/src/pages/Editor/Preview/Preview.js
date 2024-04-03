import React from "react";

const Preview = ({
  basicDetails,
  experience,
  projects,
  skills,
  socialProfiles,
  education,
}) => {
  return (
    <div className="container py-6">
      <div className="row gap-4">
        <div className="col-12">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter">
                {basicDetails.name}
              </h1>
              <p className="text-gray-500">{basicDetails.designation}</p>
            </div>
            <div className="space-y-2">
              <dl className="row gap-2">
                <div className="col-sm-6">
                  <dt className="text-gray-500">Email</dt>
                  <dd>{basicDetails.email}</dd>
                </div>
                <div className="col-sm-6">
                  <dt className="text-gray-500">Phone</dt>
                  <dd>{basicDetails.phone}</dd>
                </div>
                <div className="col-12">
                  <dt className="text-gray-500">Address</dt>
                  <dd>
                    {basicDetails.address}, {basicDetails.city},{" "}
                    {basicDetails.state} - {basicDetails.pincode}
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <p>{basicDetails.intro}</p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter">Education</h2>
            </div>
            <div className="space-y-2">
              {education.map((edu, index) => (
                <div key={index} className="space-y-1">
                  <h3 className="font-bold">{edu.degreeName}</h3>
                  <p className="text-sm text-gray-500">
                    {edu.institution} ({edu.percentage})
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter">
                Experience
              </h2>
            </div>
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <div key={index} className="space-y-1">
                  <h3 className="font-bold">{exp.organization}</h3>
                  <p className="text-sm text-gray-500">
                    {exp.position} - {exp.location} ({exp.startDate} -{" "}
                    {exp.endDate})
                  </p>
                  <p className="text-sm text-gray-500">CTC: {exp.ctc}</p>
                  <p className="text-sm text-gray-500">
                    Technologies: {exp.technologies}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter">Projects</h2>
            </div>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div key={index} className="space-y-1">
                  <h3 className="font-bold">{project.title}</h3>
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
              ))}
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter">Skills</h2>
            </div>
            <div className="space-y-2">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="d-inline-block bg-gray-200 rounded-md px-3 py-1 text-sm"
                >
                  {skill.name} - {skill.percentage}
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter">
                Social Profiles
              </h2>
            </div>
            <div className="space-y-4">
              {socialProfiles.map((profile, index) => (
                <div key={index} className="space-y-1">
                  <h3 className="font-bold">{profile.platform}</h3>
                  <p className="text-sm text-gray-500">
                    Profile Link: {profile.profileLink}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
