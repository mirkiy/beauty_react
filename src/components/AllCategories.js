import React from "react";
import CategoryList from "./CategoryList";
import "./AllCategories.css"

const AllCategories = ({ allCategories, onCategoryClick, selectedCategory }) => {
  const categoryItems = Object.keys(allCategories).map((categoryType, index) => {
    return (
      <div key={index}>
        <CategoryList
          categoryType={categoryType}
          onCategoryClick={onCategoryClick}
          isSelected={selectedCategory === categoryType}
        />
      </div>
    );
  });

  return <div className="allCategories">{categoryItems}</div>;
};

export default AllCategories;
