import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <div className="col-12  p-5  text-center d-flex flex-column justify-content-center ">
      <h4>Login</h4>
      {/* Input field for email */}
      <div className="d-flex flex-column gap-2 mt-4">
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
      </div>
      <a
        className="icon-link mt-2 align-self-center"
        href="#"
        onClick={handleRegister}
      >
        Don't have an account? Register here.
        <svg class="bi" aria-hidden="true"></svg>
      </a>
      <button className="btn btn-primary btn-md btn-block my-2  rounded-pill w-25 align-self-center">
        {" "}
        Login
      </button>
    </div>
  );
};

export default Login;
