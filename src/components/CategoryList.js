import React from "react";
import { Link } from "react-router-dom";
import "./CategoryList.css";

const CategoryList = ({ categoryType, onCategoryClick }) => {
  const handleClick = () => {
    onCategoryClick(categoryType);
  };

  return (
    <div className="categoryList">
      <Link to={`/category/${categoryType}`}>
        <button className="btn btn-outline-success" onClick={handleClick}>
          {categoryType}
        </button>
      </Link>
    </div>
  );
};

export default CategoryList;
