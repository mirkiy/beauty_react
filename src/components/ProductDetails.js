import React from "react";

const ProductDetails = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <div className="card">
        <div className="card-body">
          <img src={product.api_featured_image} 
          className="col-md-3"
          alt={product.name} />
          <h4>{product.name}</h4>
          <h4>{product.brand}</h4>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
