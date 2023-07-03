import React from "react";
import { useParams } from "react-router-dom";
import ListItem from "./ListItem";

const ProductDetails = ({ product }) => {
  const { productId } = useParams();

  if (!product || product.id !== productId) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <ListItem product={product} />
    </div>
  );
};

export default ProductDetails;
