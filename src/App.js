import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import classes from "./App.module.css";

import Header from "./components/layout/Header";
import Home from "./components/screens/home/Home";
import Honours from "./components/screens/Honours";
import Seminars from "./components/screens/Seminars";
import Shop from "./components/screens/shop/Shop";
import StoreCart from "./components/screens/shop/StoreCart";
import StoreDashboard from "./components/screens/shop/StoreDashboard";
import Dashboard from "./components/screens/shop/Dashboard";
import Cart from "./components/screens/shop/Cart";

function App() {
  const [isShowingShop, setIsShowingShop] = useState(
    window.location.pathname.includes("/shop")
  );

  return (
    <React.Fragment>
      <div className={classes.body}>
        {!isShowingShop && (
          <Header
            onClickStore={() => {
              setIsShowingShop(true);
            }}
          />
        )}
        <main className={classes.main} id="idMain">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/honours" element={<Honours />} />
            <Route path="/seminars" element={<Seminars />} />
            <Route
              path="/shop"
              element={
                <Shop>
                  <StoreDashboard />
                  <StoreCart />
                </Shop>
              }
            ></Route>
          </Routes>
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
