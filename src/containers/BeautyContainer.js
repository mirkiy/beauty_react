import React from "react";

const BeautyContainer = () => {
  const getAllBeauty = () => {
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
      .then((res) => res.json())
      .then((response) => console.log(response));
  };

  return (
    <div>
      <h1>BEAUTY</h1>
      <button className="btn btn-primary" onClick={getAllBeauty}>start</button>
    </div>
  );
};
export default BeautyContainer;
