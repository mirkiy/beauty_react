import React from "react";

const CategoryList = ({ category, onCategoryClick }) => {
  const handleClick = () => {
    onCategoryClick(category); // Pass the category as a parameter
  };

  return <button className="btn btn-primary" onClick={handleClick}>{category.brand}</button>;
};

export default CategoryList;
