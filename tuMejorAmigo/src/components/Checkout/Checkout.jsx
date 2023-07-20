import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Navigate } from "react-router-dom"
import { addDoc, collection} from "firebase/firestore"
import {dataBase } from "../../firebase/config"
export const Checkout = () =>{
    const {cart,fullPurchase} = useContext(CartContext)
const [values, setValues] = useState({
    name: "",
    direction: "",
    email: ""
})

const handleInputChange = (e)=> {

setValues({
    ...values,
    [e.target.name]: e.target.value
})
}
const handleSubmit = (e) => {
    e.preventDefault()

    // validacion
    if (!values.name || values.name.length === 0) {
        alert("El nombre es obligatorio");
        return;
      }
      if (!values.direction || values.direction.length === 0) {
        alert("La dirección es obligatoria");
        return;
      }
      if (!values.email || values.email.length === 0) {
        alert("El correo electrónico es obligatorio");
        return;
      }
      
    const order = {
        customer:values,
        items:cart,
        total: fullPurchase()
        ,
 
    }

    const orderRef = collection(dataBase, "orders")
console.log(order)
    addDoc(orderRef,order)
    .then((doc) => console.log(doc.id))
    .catch(err => console.log(err))
}

if (cart.length === 0) {
    return <Navigate to="/" />
    
}

    return(
 <div className=" container my-5">
    <h2>Checkout</h2>
    <hr />

    <form  onSubmit={handleSubmit}>
        <input value={values.name} onChange={handleInputChange} name="name" type="text" placeholder="Nombre"  className="form-control my-2 "/>
        <input value={values.direction} onChange={handleInputChange} name="direction" type="text" placeholder="Direccion"  className="form-control my-2" />
        <input value={values.email} onChange={handleInputChange} name="email" type="email" placeholder="Email"  className="form-control my-2"/>
        <button className="btn btn-primary" type="submit">Enviar</button>
    </form>

 </div>
    )
}