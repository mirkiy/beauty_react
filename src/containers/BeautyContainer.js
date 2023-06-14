import React, { useEffect, useState } from "react";
import AllCategories from "../components/AllCategories";
import Search from "../components/Search";
import "./BeautyContainer.css";

const BeautyContainer = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    getAllBeauty();
  }, []);

  const getAllBeauty = () => {
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
      .then((res) => res.json())
      .then((allCategories) => setAllCategories(allCategories))
      .catch((error) => console.log(error));
  };

  return (
    <div className="BeautyContainerMain">
      <h1>BEAUTY</h1>
      <Search />
      <AllCategories
        allCategories={allCategories}
        onCategoryClick={setSelectedCategory} // Pass the setSelectedCategory function as a prop
      />
    </div>
  );
};

export default BeautyContainer;
