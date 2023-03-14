import React from "react";
import "./heading.scss";

const Heading = ({ type, children }) => {
  return <div className={`heading ${type || ""}`}>{children}</div>;
};

export default Heading;
