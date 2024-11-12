import React from "react";

const ProductItem = (props) => {
  return (
    <div>
      <img className="Products-Image" src={props.myItem.image}></img>
      <p>{props.myItem.name}</p>
      <p>{props.myItem.price}</p>
    </div>
  );
};

export default ProductItem;
