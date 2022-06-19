import "./app.css";
import React, { useState, useEffect, useContext } from "react";
import { UserContext, UserContext2, UserContext3, UserContext5 } from "./Shop";
import Navbar from "./Navbar";
import Cart from "./Cart";

function StoreCart(props) {
  const cart = useContext(UserContext);
  const setCart = useContext(UserContext2);
  const handleChange = useContext(UserContext3);
  const length = useContext(UserContext5);
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "full",
        height: "full",
        minHeight: "300%",
      }}
    >
      {" "}
      <React.Fragment>
        <Navbar setShow={false} size={length} />
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      </React.Fragment>
    </div>
  );
}

export default StoreCart;
