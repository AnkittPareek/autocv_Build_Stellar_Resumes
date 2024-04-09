import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNavBar from "../../common/TopNavBar/TopNavBar";
import Template1 from "../Layouts/Template1/Index";
import Template2 from "../Layouts/Template2/Index";
import Loader from "../../common/Loader/Loader";
import axiosInstance from "../../api/axios";
import { RESUME_FETCHALL_URL } from "../../constants";
import { toast } from "react-toastify";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    setLoading(true);
    axiosInstance
      .get(RESUME_FETCHALL_URL)
      .then((res) => {
        setResumes(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast.error("Something went wrong");
      });
  };

  const handleCreate = () => {
    navigate("/create");
  };

  const handleResumeClick = (resumeId) => {
    navigate(`/update/${resumeId}`);
  };

  return (
    <div>
      {loading && <Loader />}
      <TopNavBar isFrom="dashboard" />
      <div className="mt-3 px-5">
        <div className="d-flex justify-content-end ">
          <button className="btn btn-md btn-primary" onClick={handleCreate}>
            Create New +
          </button>
        </div>
        <hr />
        {/* Listing all the resumes here*/}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {resumes.map((resume, index) => {
            let layout = resume.layout;
            let resumeId = resume._id;
            let {
              basicDetails,
              experience,
              projects,
              skills,
              socialProfiles,
              education,
            } = resume;
            return (
              <div className=" col mb-4 " key={resumeId}>
                <div
                  className="card dashboard_resume_card"
                  onClick={() => handleResumeClick(resumeId)}
                >
                  <div
                    className="card-body"
                    style={{ maxHeight: "700px", overflow: "hidden" }}
                  >
                    {layout === "1" ? (
                      <Template1
                        basicDetails={basicDetails}
                        experience={experience}
                        projects={projects}
                        skills={skills}
                        socialProfiles={socialProfiles}
                        education={education}
                      />
                    ) : (
                      <Template2
                        basicDetails={basicDetails}
                        experience={experience}
                        projects={projects}
                        skills={skills}
                        socialProfiles={socialProfiles}
                        education={education}
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
