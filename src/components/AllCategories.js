import React from "react";
import CategoryList from "./CategoryList";
import "./AllCategories.css";

const AllCategories = ({ allCategories, onCategoryClick }) => {
  const categoryItems = Object.keys(allCategories).map((categoryType, index) => {
    return (
      <div key={index}>
        <CategoryList
          categoryType={categoryType}
          onCategoryClick={onCategoryClick}
        />
      </div>
    );
  });

  return <div className="allCategories">{categoryItems}</div>;
};

export default AllCategories;
