import React from "react";
import "./ListItem.css"

const ListItem = ({ product }) => {
  return (
    <div>
      <p>{product.name}</p>
      <p>{product.brand}</p>

    </div>
  );
};

export default ListItem;
