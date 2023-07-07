import React from "react";
import CategoryList from "./CategoryList";
import "./AllCategories.css";

const AllCategories = ({ allCategories, onCategoryClick }) => {
  const categoryItems = Object.keys(allCategories).map((categoryType, index) => (
    <CategoryList
      key={index}
      categoryType={categoryType}
      onCategoryClick={onCategoryClick}
    />
  ));

  return <div className="allCategories">{categoryItems}</div>;
};

export default AllCategories;
