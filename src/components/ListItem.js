import React from "react";
import { Link } from "react-router-dom";
import "./ListItem.css";

const ListItem = ({ product, onClick }) => {
  console.log("Product Name:", product.name);
  const handleClick = () => {
    onClick(product);
  };
  console.log(product)

  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <img
            src={product.api_featured_image}
            className="card-img-top"
            alt="..."
          />
          <h5 className="card-title">{product.name}</h5>
          <h6 className="card-brand">{product.brand}</h6>
        </div>
        <Link to={`/product/${product.id}`}>
          <button className="btn btn-primary" onClick={handleClick}>
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ListItem;
