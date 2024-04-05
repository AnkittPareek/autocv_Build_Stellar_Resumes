import React, { useState } from "react";
import Avatar from "react-avatar";
import { APP_NAME } from "../../constants";
import { getUserName } from "../commonFunctions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const TopNavBar = ({ isFrom }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    toast.success("Logged out successfully");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <span className="navbar-brand pointer">
        <h5>{APP_NAME}</h5>
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={handleDropdownToggle}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={
          "collapse navbar-collapse justify-content-end" +
          (showDropdown ? " show" : "")
        }
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              onClick={handleDropdownToggle}
            >
              <strong>{getUserName()}</strong>{" "}
              <span>
                <Avatar name={getUserName()} size="40" round={true} />
              </span>
            </a>
            <div
              className={"dropdown-menu" + (showDropdown ? " show" : "")}
              aria-labelledby="navbarDropdownMenuLink"
            >
              {isFrom !== "dashboard" && (
                <>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => {
                      navigate("/dashboard");
                    }}
                  >
                    Dashboard
                  </a>
                  <hr />
                </>
              )}
              <a className="dropdown-item" href="#" onClick={handleLogout}>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavBar;
