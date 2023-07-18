import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Navigate } from "react-router-dom"
export const Checkout = () =>{
    const {cart,fullPurcharse} = useContext(CartContext)
const [values, setValues] = useState({
    name: " ",
    direction: " ",
    email: " "
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
    
    const order = {
        customer:values,
        items:cart,
        total: fullPurcharse,
        date: new Date()
    }
}

if (cart.length === 0) {
    return <Navigate to="/" />
    
}

    return(
 <div className=" container my-5">
    <h2>Checkout</h2>
    <hr />

    <form  onSubmit={handleSubmit}>
        <input value={values.name} onChange={handleInputChange} name="name" type="text" placeholder="Nombre"  className="form-control my-2"/>
        <input value={values.direction} onChange={handleInputChange} name="Direction" type="text" placeholder="Direccion"  className="form-control my-2" />
        <input value={values.email} onChange={handleInputChange} name="email" type="text" placeholder="Email"  className="form-control my-2"/>
        <button className="btn btn-primary">Enviar</button>
    </form>

 </div>
    )
}