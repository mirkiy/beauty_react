import React from "react";

const CategoryList = ({ category, onCategoryClick }) => {
  const handleClick = () => {
    onCategoryClick(category); // Pass the category as a parameter
  };

  return <li onClick={handleClick}>{category.category}</li>;
};

export default CategoryList;
