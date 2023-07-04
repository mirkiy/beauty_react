import React from "react";
import "./ProductDetails.css";

const ProductDetails = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <div className="card">
        <img
          src={product.api_featured_image}
          className="card-img-top"
          alt={product.name}
        />
        <div className="card-body">
          <h4>{product.name}</h4>
          <h4>{product.brand}</h4>
          <p>
            <strong>Description: </strong> {product.description}
          </p>
          <ul>
            <strong>Tags: </strong>
            {product.tag_list.map((productTag, index) => (
              <li key={index}>{productTag}</li>
            ))}
          </ul>
          <ul>
            <strong>Colours:</strong>
            {product.product_colors.map((productColor, index) => (
              <li key={index}>
                <div
                  className="color-circle"
                  style={{ backgroundColor: productColor.hex_value }}
                ></div>
                {productColor.colour_name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
