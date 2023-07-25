import React from "react";
import { Link } from "react-router-dom";
import "./CategoryList.css"; 

const CategoryList = ({ categoryType, onCategoryClick }) => {
  const handleClick = () => {
    onCategoryClick(categoryType);
  };

  return (
    <div className="col-md-2">
      <Link to={`/category/${categoryType}`}>
        <button className="category-btn" onClick={handleClick}>{categoryType}</button>
      </Link>
    </div>
  );
};

export default CategoryList;
