import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import Search from "./Search";

const NavBar = ({ searchProducts }) => {
  const location = useLocation();
  return (
    <div className="NavBar">
      {location.pathname === "/" && <Search onSearch={searchProducts} />}
      <button className="btn-all-categories">
        <Link to="/">All Categories</Link>
      </button>
    </div>
  );
};

export default NavBar;
