import React from "react";
import { Link } from "react-router-dom";

const Button = ({ type, children, to, variant }) => {
  return (
    <>
      {to ? (
        <Link to={to} className={`btn ${variant || ""}`}>
          {children}
        </Link>
      ) : (
        <button type={type && type} className={`btn ${variant || ""}`}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
