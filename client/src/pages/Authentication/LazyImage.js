import React from "react";

const LazyImage = ({ src, alt, className }) => {
  return <img className={`img-fluid ${className}`} src={src} alt={alt} />;
};

export default LazyImage;
