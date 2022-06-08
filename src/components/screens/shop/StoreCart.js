import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import React, { useState, useEffect, useContext } from "react";
import { UserContext, UserContext2, UserContext3 } from "./Shop";
import Store from "./Shop";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Cart from "./Cart";

function StoreCart(props) {
  // const cart = useContext(UserContext);
  const cart = [];
  const setCart = useContext(UserContext2);
  const handleChange = useContext(UserContext3);

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "full",
        height: "full",
        minHeight: "300%",
      }}
    >
      <React.Fragment>
        <Navbar setShow={false} size="5" />

        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      </React.Fragment>
    </div>
  );
}

export default StoreCart;
