import React from "react";
import CategoryList from "./CategoryList";

const AllCategories = ({ allCategories, onCategoryClick }) => {
  const categoryItems = allCategories.map((category, index) => {
    return (
      <CategoryList
        category={category}
        key={index}
        onCategoryClick={onCategoryClick}
      />
    );
  });

  return <div className="allCategories">{categoryItems}</div>;
};

export default AllCategories;
