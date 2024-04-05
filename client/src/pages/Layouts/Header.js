import React from "react";
import Avatar from "react-avatar";

const Header = ({ dark, basicDetails }) => {
  return (
    <div
      className={`p-5 d-flex flex-column ${
        dark ? "bg-dark text-white" : "bg-danger-subtle"
      } `}
    >
      <div className="   d-flex justify-content-between ">
        <div className="d-flex flex-column">
          <div className="d-flex gap-2 col-sm-6">
            <Avatar name={basicDetails.name} size="60" round={true} />
            <h1 className="text-3xl font-bold tracking-tighter">
              {basicDetails.name}
            </h1>
          </div>

          <div className="col-sm-6 p-2">
            <dt className="text-gray-500">Email</dt>
            <dd>{basicDetails.email}</dd>

            <dt className="text-gray-500">Phone</dt>
            <dd>{basicDetails.phone}</dd>
          </div>
        </div>
        <div className="col-sm-6 p-2">
          <dt className="text-gray-500">About me</dt>
          <dd>{basicDetails.intro}</dd>
        </div>
      </div>
      <hr className=" " />

      <div className="">
        <dt className="text-gray-500">Address</dt>
        <span>{basicDetails.address}</span>{" "}
        <span>{basicDetails.city ? ", " + basicDetails.city : ""}</span>
        <span>{basicDetails.state ? ", " + basicDetails.state : ""}</span>
        <span>{basicDetails.pincode ? ", " + basicDetails.pincode : ""}</span>
      </div>
    </div>
  );
};

export default Header;
