import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Navigate,useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { dataBase } from "../../firebase/config";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export const Checkout = () => {
  const { cart, fullPurchase } = useContext(CartContext);
  const [values, setValues] = useState({
    name: "",
    direction: "",
    email: "",
  });

  const navigate = useNavigate();

  const MySwal = withReactContent(Swal);
  function toast (msg,icon)  {
    MySwal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = MySwal.stopTimer;
          toast.onmouseleave = MySwal.resumeTimer;
          const progressBar = toast.querySelector(
            ".swal2-timer-progress-bar"
          );
          if (progressBar) {
            progressBar.style.backgroundColor = "#d05fa2"; // El color que desees
          }
        },
      }).fire({
        icon: icon,
        
         text: msg
      })
  }
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // validacion
    if (!values.name || values.name.length === 0) {
       toast("El nombre es obligatorio","warning");
     
      return;
    }
    if (!values.direction || values.direction.length === 0) {
        toast("La dirección es obligatoria","warning");
   
      return;
    }
    if (!values.email || values.email.length === 0) {
        toast("El correo electrónico es obligatorio","warning");
    
      return;
    }

    const order = {
      customer: values,
      items: cart,
      total: fullPurchase(),
    };

    const orderRef = collection(dataBase, "orders");
    console.log(order);


    addDoc(orderRef, order)
      .then((doc) => {
        toast("Compra Confirmada!!","success");
        console.log(doc.id)
       
        setTimeout(() => {
            return navigate("/");;
        },4000)
        
      })
      .catch((err) => console.log(err));
  };

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
 
    <section id="sectionLogin">
      <div className="main_new container">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form action="" onSubmit={handleSubmit}>
            <label className="labelLogin" htmlFor="chk" aria-hidden="true">
              Checkout
            </label>
            <input
              value={values.name}
              onChange={handleInputChange}
              className="inputLogin"
              name="name"
              type="text"
              placeholder="Nombre"
            />
            <input
              value={values.direction}
              onChange={handleInputChange}
              className="inputLogin"
              name="direction"
              type="text"
              placeholder="Direccion"
            />
            <input
              value={values.email}
              onChange={handleInputChange}
              className="inputLogin"
              name="email"
              type="email"
              placeholder="Email"
            />

            <button type="submit" className="buttonLogin">
              Enviar compra
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
