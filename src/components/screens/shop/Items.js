import React from "react";
import classes from "./Dashboard.module.css";
function Items({ item, handleClick }) {
  const { title, price, image } = item;
  return (
    <div className={classes.card}>
      <div className={classes.image_box}>
        <img src={image} alt="" />
      </div>
      <div className={classes.details}>
        <p>{title}</p>
        <p>Price - {price}Rs</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Items;
