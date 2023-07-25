import React from "react";
import CategoryList from "./CategoryList";

const AllCategories = ({ allCategories, onCategoryClick, selectedCategory }) => {
  return (
    <div className="row">
      {Object.keys(allCategories).map((categoryType) => (
        <CategoryList
          key={categoryType}
          categoryType={categoryType}
          onCategoryClick={onCategoryClick}
          selectedCategory={selectedCategory}
        />
      ))}
    </div>
  );
};

export default AllCategories;
