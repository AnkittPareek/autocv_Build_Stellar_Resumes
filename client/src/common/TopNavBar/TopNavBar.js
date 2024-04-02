import React, { useState } from "react";
import Avatar from "react-avatar";
import { APP_NAME } from "../../constants";

const TopNavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Add logout logic here
    console.log("Logout clicked");
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
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              onClick={handleDropdownToggle}
            >
              <strong>John Doe</strong>{" "}
              <span>
                <Avatar name="John Doe" size="40" round={true} />
              </span>
            </a>
            <div
              className={"dropdown-menu" + (showDropdown ? " show" : "")}
              aria-labelledby="navbarDropdownMenuLink"
            >
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
