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
          <div className="tags-container">
            <strong>Tags:</strong>
            {product.tag_list.map((productTag, index) => (
              <React.Fragment key={index}>
              <div className="tags" > {productTag} </div>
              {index !== product.tag_list.length - 1 && <span> | </span>}
              </React.Fragment>
            ))}
          </div>
          <div className="color-flex-container"> 
            {product.product_colors.map((productColor, index) => (
              <div key={index} className="color-flex-item">
                <div
                  className="color-circle"
                  style={{ backgroundColor: productColor.hex_value }}
                ></div>
                <div>{productColor.colour_name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
