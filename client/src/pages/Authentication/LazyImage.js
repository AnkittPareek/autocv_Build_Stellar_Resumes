import React from "react";

const LazyImage = ({ src, alt }) => {
  return <img className="img-fluid" src={src} alt={alt} />;
};

export default LazyImage;
