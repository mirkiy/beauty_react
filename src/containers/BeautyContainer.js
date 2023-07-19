import React, { useEffect, useState } from "react";
import AllCategories from "../components/AllCategories";
import Search from "../components/Search";
import ListItem from "../components/ListItem";
import "./BeautyContainer.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import ErrorPage from "../components/ErrorPage";
import ProductDetails from "../components/ProductDetails";

const BeautyContainer = () => {
  const [allCategories, setAllCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    getAllBeauty();
  }, []);

  const getAllBeauty = () => {
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
      .then((res) => res.json())
      .then((products) => {
        const groupedCategories = {};
        products.forEach((product) => {
          const productType = product.product_type;
          if (!groupedCategories[productType]) {
            groupedCategories[productType] = [];
          }
          groupedCategories[productType].push(product);
        });
        setAllCategories(groupedCategories);
        setIsDataLoaded(true); // Set the flag to indicate data loading is complete
      })
      .catch((error) => console.log(error));
  };

  const toggleCategory = (categoryType) => {
    setSelectedCategory(categoryType);
  };

  const selectProduct = (product) => {
    setSelectedProduct(product);
  };

  const searchProducts = (keyword) => {
    const filteredProducts = Object.values(allCategories)
      .flat()
      .filter((product) =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
      );
    setSearchResults(filteredProducts);
  };

  const selectedProducts = selectedCategory
    ? allCategories[selectedCategory]
    : searchResults;

  return (
    <div className="BeautyContainerMain">
      <h1>BEAUTY</h1>
      {isDataLoaded ? ( // Render the components only if data is loaded
        <>
          <Search onSearch={searchProducts} />
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
            path="/category/:categoryType"
            element={
              <div className="row">
                {selectedProducts.map((product, index) => (
                  <ListItem
                    key={index}
                    product={product}
                    onClick={selectProduct}
                  />
                ))}
              </div>
            }
          />
          <Route
            path="/product/:productId"
            element={<ProductDetails product={selectedProduct} />}
          />
          <Route path="*" element={<ErrorPage />} />
          </Routes>
          </Router>
        </>
      ) : (
        <div>Loading...</div> // Show a loading message while data is being fetched
      )}
    </div>
  );
};
export default BeautyContainer;
