import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { REGISTER_URL, REGISTER_URL_GOOGLE } from "../../constants";
import { toast } from "react-toastify";
import Loader from "../../common/Loader/Loader";
import axiosInstance from "../../api/axios";
import { validate } from "react-email-validator";
import { useGoogleLogin } from "@react-oauth/google";
import parsePhoneNumber from "libphonenumber-js";

const Registration = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
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

  const registerWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      let { access_token } = tokenResponse;
      setLoading(true);
      await axiosInstance
        .post(REGISTER_URL_GOOGLE, { token: access_token })
        .then((response) => {
          toast.success(
            "Registration successful, Please login to your account"
          );
          setLoading(false);
          navigate("/");
        })
        .catch((error) => {
          setLoading(false);
          toast.error(error.response.data.message);
        });
    },
  });

  const handleRegister = async () => {
    if (!data.username) return toast.error("Please enter a username");
    if (!data.email) return toast.error("Please enter a email");
    if (!validate(data.email)) return toast.error("Please enter a valid email");
    if (!isPhoneValid) return toast.error("Please enter a valid phone number");
    if (!data.password) return toast.error("Please enter a password");
    if (data.password !== data.confirmPassword)
      return toast.error(
        "Your password is not matching with the confirm password"
      );

    setLoading(true);
    await axiosInstance
      .post(REGISTER_URL, {
        username: data.username,
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        toast.success("Registration successful, Please login to your account");
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.response.data.message);
      });
  };
  const showPasswordClick = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="col-12  p-5  text-center d-flex flex-column justify-content-center ">
      {loading && <Loader />}
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
            className="form-control "
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        {/* Input field for password */}
        <div className="form-group ">
          <PhoneInput
            country={"in"}
            value={data.phone}
            isValid={(value, country) => {
              const phoneNumber = parsePhoneNumber(
                value?.toString(),
                country?.iso2?.toUpperCase()
              );
              setIsPhoneValid(phoneNumber?.isValid());
              return phoneNumber?.isValid();
            }}
            inputClass={`w-100`}
            onChange={(phone) => handlePhoneChange(phone)}
          />
        </div>
        <div className="form-group  form-password">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="form-control"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
          />
          <button
            type="button"
            class="btn btn-sm   btn-text btn-text-accent h-100"
            onClick={showPasswordClick}
          >
            <i
              className={!showPassword ? "fa fa-eye" : "fa fa-eye-slash"}
              aria-hidden="true"
            ></i>
          </button>
        </div>
        <div className="form-group form-password">
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            className="form-control"
            placeholder="Confirm Password"
            value={data.confirmPassword}
            onChange={handleChange}
          />
          <button
            type="button"
            class="btn btn-sm   btn-text btn-text-accent h-100"
            onClick={showPasswordClick}
          >
            <i
              className={!showPassword ? "fa fa-eye" : "fa fa-eye-slash"}
              aria-hidden="true"
            ></i>
          </button>
        </div>
        <small
          role="button"
          className="link-primary icon-link mt-2 align-self-center"
          href="#"
          onClick={handleLogin}
        >
          Already have an account? Login here.
          <svg class="bi" aria-hidden="true"></svg>
        </small>
        {/* <button
          type="button"
          class="btn btn-sm   btn-outline-secondary  h-100"
          onClick={() => {
            setShowPassword((prev) => !prev);
          }}
        >
          {showPassword ? "Hide" : "Show"} Password
          <i class="fa fa-eye" aria-hidden="true"></i>
        </button> */}
      </div>
      <button
        onClick={handleRegister}
        className="btn btn-sm   btn-primary my-2 h-100"
      >
        {" "}
        Register
      </button>{" "}
      <button
        onClick={() => registerWithGoogle()}
        className="btn btn-sm   btn-outline-secondary  h-100"
      >
        {" "}
        <i class="fa-brands fa-google"></i> <span> Register With Google</span>
      </button>
    </div>
  );
};

export default Registration;
