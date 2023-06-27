import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <button className="btn btn-outline-info">
        <Link to="/">All Categories</Link>
      </button>
    
    </ul>
  );
};

export default NavBar;
