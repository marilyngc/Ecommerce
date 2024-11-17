import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Link } from "react-router-dom"

export const RegisterScreen = () => {

   const {register} = useContext(AuthContext)
 const [values,setValues] = useState({
    email: " ",
    password:" "
 })

 const handleInputChange = (e) => {
    setValues({
       ...values,
       [e.target.name]:e.target.value
    })
 }
     const handleSubmit = (e) => {
        e.preventDefault()
      register(values)
    }
    return (

        <div className="container">
               <h2>Registrarse</h2>

               <form action="" onSubmit={handleSubmit}>
                <input 
                onChange={handleInputChange }
                value={values.email}
                type="email"
                placeholder="email" 
                className="form-control"
                name="email"
                />




          
                <input
                onChange={handleInputChange }
                   value={values.password}
                type="password"
                placeholder="password" 
                className="form-control"
                name="password"
                
                />

                <button  type="submit">Registrarse</button>
                <Link to="/login">Ya estoy registrado</Link>
               </form>
        </div>
    )
}