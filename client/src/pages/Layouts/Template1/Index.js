import React from "react";
import Header from "../Header";
import Experience from "../Experience";
import Projects from "../Projects";
import Skills from "../Skills";
import SocialProfiles from "../SocialProfiles";
import Education from "../Education";

const Index = ({
  basicDetails,
  education,
  experience,
  projects,
  skills,
  socialProfiles,
}) => {
  return (
    <div style={{ boxSizing: "border-box" }} className=" border border-2 ">
      <Header dark={true} basicDetails={basicDetails} />
      {/* <div className="d-flex gap-2"> */}
      {/* <div className="col-6 "> */}
      <Education education={education} />
      {/* </div> */}
      {/* <div className="col-6"> */}
      <Experience experience={experience} />
      {/* </div> */}
      {/* </div> */}

      <Projects projects={projects} />
      <Skills skills={skills} />
      <SocialProfiles socialProfiles={socialProfiles} />
    </div>
  );
};

export default Index;
