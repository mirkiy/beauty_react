import React from "react";

const CategoryList = ({ categoryType, onCategoryClick, isSelected }) => {
  const handleClick = () => {
    onCategoryClick(categoryType);
  };

  return (
    <button
      className={`btn ${isSelected ? "btn-primary" : "btn-secondary"}`}
      onClick={handleClick}
    >
      {categoryType}
    </button>
  );
};

export default CategoryList;
