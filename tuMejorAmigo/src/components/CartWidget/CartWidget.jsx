import { useContext } from "react";
import { BsBagHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { fullStock } = useContext(CartContext);
  return (
    <Link to={"/cart"} className="nav-link-cart d-block p-2   ">
      {" "}
      <BsBagHeart className="fs-4" /> 
      <span className="text-light rounded-4  px-2 py-1"   style={{color:"black"}}>{fullStock()} </span> {" "}
    </Link>
  );
};
