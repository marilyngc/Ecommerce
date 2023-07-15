import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { PiTrashBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, fullPurchase, emptyCart, deleteCart } = useContext(CartContext);
  if (cart.lenght === 0) {
    return (
      <div className="container my-5">
        <h2>Tu carrito está vacio</h2>
        <hr />
        <Link className="btn btn-primary" to={"/"}>
          {" "}
          Ver productos
        </Link>
      </div>
    );
  }
  return (
    <div className="container my-5">
      <h2>Tu compra</h2>

      {cart.map((prod) => (
        <div key={prod.id} className="container my-5">
          <h4>{prod.nombre}</h4>
          <img className="w-25" src={prod.img} alt="" />
          <p>${prod.precio}</p>
          <p>{prod.count}</p>
          <button
            onClick={() => deleteCart(prod.id)}
            className="btn btn-danger"
          >
            <PiTrashBold />
          </button>
        </div>
      ))}

      <div>
        <h5>Total: ${fullPurchase()}</h5>
        <hr />
        <button onClick={emptyCart} className="btn btn-danger">
          Vaciar carrito
        </button>
      </div>
    </div>
  );
};

export default Cart;
