import React from "react";
import TopNavBar from "../../common/TopNavBar/TopNavBar";

const Dashboard = () => {
  return (
    <div>
      <TopNavBar />
      <div className="mt-3 px-5">
        <div className="d-flex justify-content-end ">
          <button className="btn btn-md btn-primary" onClick={() => {}}>
            Create New +
          </button>
        </div>
        <hr />
        {/* I will List all the resume's here */}
      </div>
    </div>
  );
};

export default Dashboard;
