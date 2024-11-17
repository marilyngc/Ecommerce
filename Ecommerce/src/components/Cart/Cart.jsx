import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { PiTrashBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Button,Card } from "react-bootstrap";

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
    <div className="container    my-5">
      
<div className="  w-50 my-3"> 
<h2 className="m-3 fs-4 fw-bold">Producto</h2>
      {cart.map((prod) => (
       
         
           <div key={prod.id}  className=" d-flex row justify-content-between align-items-center border-top   border-opacity-25  m-3 pt-3">
             <div className="col-md-4  " style={{width:"120px"}}>
              
               <Card.Img src={prod.img} fluid  alt={prod.img} className="rounded-0"/>
             </div>
             
               <Card.Body className="col-md-8  row justify-content-between align-items-center px-2">
                 <Card.Title className="fs-6 col-lg-7 col ">{prod.nombre}</Card.Title>
                
                 <Card.Text className="fs-6 fw-bold col "> ${prod.precio}</Card.Text>
                 <p className="col-lg col-12 ">{prod.count}</p>
                 <button
            onClick={() => deleteCart(prod.id)}
            className="btn btn-danger col "
          >
            <PiTrashBold />
          </button>
               </Card.Body>
              
          

            
           </div>

         

           
      
   
      ))}
</div>

      <div className="m-4">
        <h5 className="fw-bold">Total: ${fullPurchase()}</h5>
        <hr />
        <button onClick={emptyCart} className="btn btn-danger">
          Vaciar carrito
        </button>
        <Link className="btn btn-succes" to={"/checkout"}>    <Button className="btn button-primary  "  >Terminar compra </Button></Link>
      </div>
    </div>
  );
};

export default Cart;
