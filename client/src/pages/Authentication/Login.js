import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axios";
import { LOGIN_URL } from "../../constants";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import Loader from "../../common/Loader/Loader";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  const handleLogin = (e) => {
    if (!data?.password) return toast.error("Please enter your password.");
    if (!data?.email) return toast.error("Please enter your email.");

    setLoading(true);

    axiosInstance
      .post(LOGIN_URL, {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        // Extract the access token from the response
        const accessToken = response.data.accessToken;

        // Decode the token to get user information
        const decodedToken = jwtDecode(accessToken);

        // Store the access token and userdata in local storage
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("user", JSON.stringify(decodedToken));

        toast.success("Login successful");
        setLoading(false);
        navigate("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="col-12  p-5  text-center d-flex flex-column justify-content-center ">
      {loading && <Loader />}
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
      <button
        onClick={handleLogin}
        className="btn btn-primary btn-md btn-block my-2  rounded-pill w-25 align-self-center"
      >
        {" "}
        Login
      </button>
    </div>
  );
};

export default Login;
