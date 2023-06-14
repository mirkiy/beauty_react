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

//   const onCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };
  const getAllBeauty = () => {
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
      .then((res) => res.json())
      .then((allCategories) => setAllCategories(allCategories))
      console.log(allCategories);
  };

  return (
    <div className="BeautyContainerMain">
      <h1>BEAUTY</h1>
      {/* <button className="btn btn-primary" onClick={getAllBeauty}>
        start
      </button> */}
      <div>
        <AllCategories
          allCategories={allCategories}
        //   onCategoryClick={onCategoryClick}
        />
      </div>
      <Search />
    </div>
  );
};
export default BeautyContainer;
