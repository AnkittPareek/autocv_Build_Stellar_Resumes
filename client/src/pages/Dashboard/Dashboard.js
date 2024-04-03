import React, { startTransition } from "react";
import { useNavigate } from "react-router-dom";
import TopNavBar from "../../common/TopNavBar/TopNavBar";
import Editor from "../Editor/Editor";
import Template1 from "../Layouts/Template1/Index";
import Template2 from "../Layouts/Template2/Index";
import Loader from "../../common/Loader/Loader";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleCreate = () => {
    startTransition(() => {
      navigate("/create");
    });
  };
  return (
    <div>
      <TopNavBar />
      <div className="mt-3 px-5">
        <div className="d-flex justify-content-end ">
          <button className="btn btn-md btn-primary" onClick={handleCreate}>
            Create New +
          </button>
        </div>
        <hr />
        {/* I will List all the resume's here */}

        {/* <Template1 />
        <Template2 /> */}
        {/* <hr /> */}
        {/* <Editor /> */}
      </div>
    </div>
  );
};

export default Dashboard;
