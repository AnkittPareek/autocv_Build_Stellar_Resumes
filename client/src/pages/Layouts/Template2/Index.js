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
      <Header dark={false} basicDetails={basicDetails} />

      <Education education={education} />
      <Experience experience={experience} />

      <Projects projects={projects} />
      <Skills skills={skills} />
      <SocialProfiles socialProfiles={socialProfiles} />
    </div>
  );
};

export default Index;
