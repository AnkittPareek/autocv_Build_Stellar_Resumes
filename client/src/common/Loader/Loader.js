import React from "react";
import "./Loader.css"; // Import your CSS file for styling

const Loader = ({ loading }) => {
  return (
    <div className={`loader-overlay `}>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
