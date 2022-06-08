import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import classes from "./App.module.css";

import Header from "./components/layout/Header";
import Home from "./components/screens/home/Home";
import Honours from "./components/screens/Honours";
import Seminars from "./components/screens/Seminars";
import Shop from "./components/screens/shop/Shop";
import StoreCart from "./components/screens/shop/StoreCart";

function App() {
  const [isShowingShop, setIsShowingShop] = useState(
    window.location.pathname.includes("/shop")
  );

  return (
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
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/cart" element={<StoreCart />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
