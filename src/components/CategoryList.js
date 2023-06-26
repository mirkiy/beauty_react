import React from "react";
import "./CategoryList.css"

const CategoryList = ({ categoryType, onCategoryClick, isSelected }) => {
  const handleClick = () => {
    onCategoryClick(categoryType);
  };

  return (
    <div className="categoryList">
    <button
      className={`btn ${isSelected ? "btn-primary" : "btn-secondary"}`}
      onClick={handleClick}
    >
      {categoryType}
    </button>
    </div>
  );
};

export default CategoryList;
