import React from "react";
import "./ListItem.css";

const ListItem = ({ product }) => {
  return (
    <div className="col-md-4">
        <div className="card">
          <img
            src={product.api_featured_image}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <h6 className="card-brand">{product.brand}</h6>
            <p className="card-text">{product.description}</p>
          </div>
        </div>
      </div>

  );
};

export default ListItem;
