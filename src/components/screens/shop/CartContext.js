import React from "react";

const CartContext = React.createContext({
    cart: [],
    setCart: (item)=>{},
    handleChange: (item,d) =>{}
});

export default CartContext;