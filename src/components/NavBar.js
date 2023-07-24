import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <button className="btn-all-categories">
      <Link to="/">All Categories</Link>
    </button>
  );
};

export default NavBar;
