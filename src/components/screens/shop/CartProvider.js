import CartContext from './CartContext'

const CartProvider = props => {
    const addItemToCart = (item) =>{};
    const handleChanges = (item,d)=>{};
    const cartContext = {
        cart: [],
        setCart: addItemToCart,
        handleChange:handleChanges,
    };
return <CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>

};

export default CartProvider