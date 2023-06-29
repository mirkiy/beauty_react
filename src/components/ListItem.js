import React from "react";
import "./ListItem.css";

const ListItem = ({ product }) => {
  return (
    // <div className="productEach">
    //   <div className="nameOfProduct">{product.name}</div>
    //   <div className="brandOfProduct">{product.brand}</div>
    //   <div className="descriptionOfProduct">{product.description}</div>
    //   <div>{product.api_featured_image} </div>
    // </div>

    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card">
          <img src={product.image_link} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">
            {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
