import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import {
  Accordion,
  Container,
  Row,
  Col,
  Form,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import jsPDF from "jspdf";
import BasicDetails from "./Details/BasicDetails";
import EducationDetails from "./Details/Education";
import Experience from "./Details/Experience";
import Projects from "./Details/Projects";
import Skills from "./Details/Skills";
import SocialProfiles from "./Details/Social";
import Preview from "./Preview/Preview";
import TopNavBar from "../../common/TopNavBar/TopNavBar";
import ChooseLayout from "./ChooseLayout";
import Layout1 from "../Layouts/Template1/Index";
import Layout2 from "../Layouts/Template2/Index";
const Editor = () => {
  let pdfRef = useRef();

  const [selectedLayout, setSelectedLayout] = useState(null);

  const [basicDetails, setBasicDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    intro: "",
  });

  const [experience, setExperience] = useState([
    {
      organization: "",
      location: "",
      position: "",
      ctc: "",
      startDate: "",
      endDate: "",
      technologies: "",
    },
  ]);
  const [projects, setProjects] = useState([
    {
      title: "",
      teamSize: "",
      duration: "",
      technologies: "",
      description: "",
    },
  ]);
  const [skills, setSkills] = useState([
    {
      name: "",
      percentage: "",
    },
  ]);
  const [socialProfiles, setSocialProfiles] = useState([
    {
      platform: "",
      profileLink: "",
    },
  ]);
  const [education, setEducation] = useState([
    {
      degreeName: "",
      institution: "",
      percentage: "",
    },
  ]);

  const RenderLayout = ({
    basicDetails,
    education,
    experience,
    projects,
    skills,
    socialProfiles,
  }) => {
    return (
      <div //Note: Here the dimensions of div are same as A4
        ref={pdfRef}
        style={{
          backgroundColor: "#f5f5f5",
          width: "160mm",
          minHeight: "297mm",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {selectedLayout ? (
          selectedLayout?.id === 1 ? (
            <Layout1
              basicDetails={basicDetails}
              education={education}
              experience={experience}
              projects={projects}
              skills={skills}
              socialProfiles={socialProfiles}
            />
          ) : (
            <Layout2
              basicDetails={basicDetails}
              education={education}
              experience={experience}
              projects={projects}
              skills={skills}
              socialProfiles={socialProfiles}
            />
          )
        ) : (
          <></>
        )}
      </div>
    );
  };

  const handleDownload = () => {
    const htmlContent = ReactDOM.findDOMNode(pdfRef.current).outerHTML;

    // Create new jsPDF instance
    const doc = new jsPDF("p", "pt", "a4");
    // Convert HTML content to PDF
    doc.html(htmlContent, {
      callback: (pdf) => {
        // Save the PDF
        pdf.save("myResume.pdf");
      },
    });
  };

  return (
    <>
      <TopNavBar />
      <Container>
        {window.location.pathname === "/create" && !selectedLayout ? (
          <ChooseLayout
            setSelectedLayout={setSelectedLayout}
            selectedLayout={selectedLayout}
          />
        ) : (
          <Row>
            <Col>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Basic Details</Accordion.Header>
                  <Accordion.Body>
                    <BasicDetails
                      basicDetails={basicDetails}
                      setBasicDetails={setBasicDetails}
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Education</Accordion.Header>
                  <Accordion.Body>
                    <EducationDetails
                      education={education}
                      setEducation={setEducation}
                    />
                  </Accordion.Body>
                </Accordion.Item>{" "}
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Experience</Accordion.Header>
                  <Accordion.Body>
                    <Experience
                      experience={experience}
                      setExperience={setExperience}
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Projects</Accordion.Header>
                  <Accordion.Body>
                    <Projects projects={projects} setProjects={setProjects} />
                  </Accordion.Body>
                </Accordion.Item>{" "}
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Skills</Accordion.Header>
                  <Accordion.Body>
                    <Skills skills={skills} setSkills={setSkills} />
                  </Accordion.Body>
                </Accordion.Item>{" "}
                <Accordion.Item eventKey="5">
                  <Accordion.Header>Social Media Profies</Accordion.Header>
                  <Accordion.Body>
                    <SocialProfiles
                      socialProfiles={socialProfiles}
                      setSocialProfiles={setSocialProfiles}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col>
              <RenderLayout
                basicDetails={basicDetails}
                education={education}
                experience={experience}
                projects={projects}
                skills={skills}
                socialProfiles={socialProfiles}
              />

              <Row className="mt-3">
                <Col>
                  <Button className="me-2" variant="primary">
                    Save
                  </Button>
                  <Button
                    onClick={handleDownload}
                    className="me-2 "
                    variant="primary"
                  >
                    Download PDF
                  </Button>

                  <Button className="me-2" variant="primary">
                    Share
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default Editor;
