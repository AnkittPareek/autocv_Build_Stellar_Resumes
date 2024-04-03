import React from "react";

const Loader = ({ loading }) => {
  return (
    <div className={`loader-overlay `}>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
