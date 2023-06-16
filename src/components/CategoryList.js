import React from "react";

const CategoryList = ({ categoryType, onCategoryClick }) => {
  const handleClick = () => {
    onCategoryClick(categoryType);
  };

  return (
    <button className="btn btn-primary" onClick={handleClick}>
      {categoryType}
    </button>
  );
};

export default CategoryList;
