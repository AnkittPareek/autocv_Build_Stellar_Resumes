import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Registration = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    username: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handlePhoneChange = (phone) => {
    setData({ ...data, phone: phone });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="col-12  p-5  text-center d-flex flex-column justify-content-center ">
      <h4>Register</h4>
      {/* Input field for email */}
      <div className="d-flex flex-column gap-2 mt-4">
        <div className="form-group ">
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Username"
            value={data.username}
            onChange={handleChange}
          />
        </div>{" "}
        <div className="form-group ">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        {/* Input field for password */}
        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            placeholder="Confirm Password"
            value={data.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="form-group ">
          <PhoneInput
            country={"us"}
            value={data.phone}
            inputClass="w-100"
            onChange={(phone) => handlePhoneChange(phone)}
          />
        </div>
      </div>
      <a
        className="icon-link mt-2 align-self-center"
        href="#"
        onClick={handleLogin}
      >
        Already have an account? Login here.
        <svg class="bi" aria-hidden="true"></svg>
      </a>
      <button className="btn btn-primary btn-md btn-block my-2  rounded-pill w-25 align-self-center">
        {" "}
        Register
      </button>
    </div>
  );
};

export default Registration;
