import React from "react";
import { Link } from "react-router-dom";
import "./ListItem.css";

const ListItem = ({ product, onClick }) => {
  const handleClick = () => {
    onClick(product);
  };

  return (
    <div className="col-md-4">
      <div className="card">
        <Link to={`/product/${product.id}`}>
          <img src={product.api_featured_image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <h6 className="card-brand">{product.brand}</h6>
          </div>
        </Link>
        <button className="btn btn-primary" onClick={handleClick}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default ListItem;
