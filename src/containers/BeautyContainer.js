import React, { useEffect, useState } from "react";
import AllCategories from "../components/AllCategories";
import Search from "../components/Search";
import ListItem from "../components/ListItem";
import "./BeautyContainer.css";

const BeautyContainer = () => {
  const [allCategories, setAllCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    getAllBeauty();
  }, []);

  const getAllBeauty = () => {
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
      .then((res) => res.json())
      .then((products) => {
        const groupedCategories = {};
        products.map((product) => {
          const productType = product.product_type;
          if (!groupedCategories[productType]) {
            groupedCategories[productType] = [];
          }
          groupedCategories[productType].push(product);
        });
        setAllCategories(groupedCategories);
      })
      .catch((error) => console.log(error));
  };

  const selectedProducts = selectedCategory ? allCategories[selectedCategory] : [];

  return (
    <div className="BeautyContainerMain">
      <h1>BEAUTY</h1>
      <Search />
      <AllCategories
        allCategories={allCategories}
        onCategoryClick={setSelectedCategory}
      />
      {selectedProducts.map((product, index) => (
        <ListItem key={index} product={product} />
      ))}
    </div>
  );
};

export default BeautyContainer;
