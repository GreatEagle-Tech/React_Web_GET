import React from "react";
import classes from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

function Navbar({ setShow, size }) {
  const navigate = useNavigate();
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <nav>
        <div className={classes.nav_box}>
          <span className={classes.my_shop} onClick={() => navigate("/shop")}>
            My Shopping
          </span>
          <div className={classes.cart} onClick={() => navigate("/shop/cart")}>
            <span class="material-symbols-outlined">shopping_cart</span>

            <span>{size}</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
