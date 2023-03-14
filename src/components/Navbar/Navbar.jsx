import React from "react";
import "./navbar.scss";
import { NavAuth, NavUser } from "./";

const Navbar = () => {
  const isAuth = false;
  return (
    <div className="nav">
      <div className="container">
        <div className="nav_wrap">
          <div className="nav_logo"></div>
          {isAuth ? <NavUser /> : <NavAuth />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
