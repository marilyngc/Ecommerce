import { createContext } from "react";
import { useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    setCart([...cart, item]);
 
  };

  const fullPurchase = () => cart.reduce((acc, prod) => acc + prod.precio * prod.count, 0);
  

/*   const modifyQuantity = (id) =>{
    const newCart = cart.slice()
    const item = newCart.find(i => i.id === id)

    setCart(newCart)
  } */
  const isInCart = (id) => cart.find((prod) => prod.id === id);
  const emptyCart = () => setCart([]);
  const deleteCart = (id) => setCart(cart.filter((prod) => prod.id !== id));
  const fullStock = () => cart.reduce((acc, prod) => acc + prod.count , 0);

  return (
    <CartContext.Provider
      value={{ cart, addCart, isInCart, fullPurchase, emptyCart, deleteCart,fullStock }}
    >
      {children}
    </CartContext.Provider>
  );
};
