import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useContext } from "react";
import "./app.css";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Cart from "./Cart";
import StoreCart from "./StoreCart";

export const UserContext = createContext();
export const UserContext2 = createContext();
export const UserContext3 = createContext();
export const UserContext4 = createContext();
export const UserContext5 = createContext();
function Shop(props) {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "full",
        height: "full",
        minHeight: "300%",
      }}
    >
      <UserContext.Provider value={cart}>
        <UserContext2.Provider value={setCart}>
          <UserContext3.Provider value={handleChange}>
            <UserContext4.Provider value={handleClick}>
              <UserContext5.Provider value={cart.length}>
                {props.children}
              </UserContext5.Provider>
            </UserContext4.Provider>
          </UserContext3.Provider>
        </UserContext2.Provider>
      </UserContext.Provider>
    </div>
  );

  // return (
  //   <div
  //     style={{
  //       backgroundColor: "white",
  //       width: "full",
  //       height: "full",
  //       minHeight: "300%",
  //     }}
  //   >
  //     <React.Fragment>
  //       <Navbar setShow={setShow} size={cart.length} />
  //       {show ? (
  //         <Dashboard handleClick={handleClick} />
  //       ) : (
  //         <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
  //       )}
  //     </React.Fragment>
  //   </div>
  // );
  // return (
  //   <React.Fragment>
  //     <Navbar setShow={setShow} size={cart.length} />

  //     <BrowserRouter>
  //       <Routes>
  //         <Route index element={<Dashboard handleClick={handleClick} />} />

  //         <Route
  //           path="cart"
  //           element={
  //             <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
  //           }
  //         />
  //       </Routes>
  //     </BrowserRouter>
  //   </React.Fragment>
  // );
}

export default Shop;
