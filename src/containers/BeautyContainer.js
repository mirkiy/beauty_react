import React, { useEffect, useState } from "react";
import AllCategories from "../components/AllCategories";
import Search from "../components/Search";
import ListItem from "../components/ListItem";
import "./BeautyContainer.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";

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

  const toggleCategory = (categoryType) => {
    if (selectedCategory === categoryType) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryType);
    }
  };

  const selectedProducts = selectedCategory
    ? allCategories[selectedCategory]
    : [];

  return (
    <div className="BeautyContainerMain">
      <h1>BEAUTY</h1>
      <Search />

      <Router>
      <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <AllCategories
                allCategories={allCategories}
                onCategoryClick={toggleCategory}
                selectedCategory={selectedCategory}
              />
            }
          />

          <Route
            path="/product"
            element={selectedProducts.map((product, index) => (
              <ListItem key={index} product={product} />
            ))}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default BeautyContainer;
