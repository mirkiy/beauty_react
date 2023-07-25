import React from "react";
import { Link } from "react-router-dom";

const CategoryList = ({ categoryType, onCategoryClick }) => {
  const handleClick = () => {
    onCategoryClick(categoryType);
  };

  return (
    <Link to={`/category/${categoryType}`} className="col-md-3">
      <button className="category-btn" onClick={handleClick}>
        {categoryType}
      </button>
    </Link>
  );
};

export default CategoryList;
