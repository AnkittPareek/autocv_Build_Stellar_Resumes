import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axios";
import { LOGIN_URL, LOGIN_URL_GOOGLE } from "../../constants";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import Loader from "../../common/Loader/Loader";
import { validate } from "react-email-validator";
import { useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
    if (!validate(data.email)) return toast.error("Please enter a valid email");

    setLoading(true);

    axiosInstance
      .post(LOGIN_URL, {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        const accessToken = response.data.accessToken;

        const decodedToken = jwtDecode(accessToken);

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

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      let { access_token } = tokenResponse;
      await axiosInstance
        .post(LOGIN_URL_GOOGLE, { token: access_token })
        .then((response) => {
          const accessToken = response.data.accessToken;

          const decodedToken = jwtDecode(accessToken);

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
    },
  });

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
            type={showPassword ? "text" : "password"}
            name="password"
            className="form-control"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
          />
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
          type="button"
          class="btn btn-sm   btn-outline-secondary  h-100"
          onClick={() => {
            setShowPassword((prev) => !prev);
          }}
        >
          Show Password<i class="fa fa-eye" aria-hidden="true"></i>
        </button>
      </div>
      <button
        onClick={handleLogin}
        className="btn btn-sm   btn-primary my-2 h-100"
      >
        {" "}
        Login
      </button>{" "}
      <button
        onClick={loginWithGoogle}
        className="btn btn-sm   btn-outline-info  h-100"
      >
        {" "}
        Login with Google
      </button>
    </div>
  );
};

export default Login;
