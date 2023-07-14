import { createContext } from "react";
import { useState } from "react";
export const CartContext = createContext()

export const CartProvider = ( {children}) => {


    const [cart, setCart] = useState([]);

    const addCart = (item) => {
      setCart([...cart,item])
    }
  
    const fullPurchase = () => {
        return cart.reduce((acc,prod) => acc + prod.precio * prod.stock,0 )
    }
    const isInCart = (id) =>  cart.find((prod) => prod.id === id)
  
    return(
        <CartContext.Provider  value={{cart,addCart, isInCart}}>

{children}
        </CartContext.Provider>
    )
}