import { useContext, useState,useEffect } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Link } from "react-router-dom"

export const LoginScreen = () => {

   const {login} = useContext(AuthContext)
 const [values,setValues] = useState({
    email: "",
    password:""
 })

 const handleInputChange = (e) => {
    setValues({
       ...values,
       [e.target.name]:e.target.value
    })
 }
     const handleSubmit = (e) => {
        e.preventDefault()
      login(values)
    }

    
  const [isLoaded, setIsLoaded] = useState(false); // Para controlar si la carga está completa

  // Cambiar el estado cuando el componente se haya montado
  useEffect(() => {
    // Simula la finalización de la carga (puedes usar esto después de cargar los datos si es necesario)
    setIsLoaded(true);
  }, []);
    return (

      //   <div className="container">
      //          <h2>Login</h2>

      //          <form action="" onSubmit={handleSubmit}>
      //           <input 
      //           onChange={handleInputChange }
      //           value={values.email}
      //           type="email"
      //           placeholder="email" 
      //           className="form-control"
      //           name="email"
      //           />




          
      //           <input
      //           onChange={handleInputChange }
      //              value={values.password}
      //           type="password"
      //           placeholder="password" 
      //           className="form-control"
      //           name="password"
                
      //           />

      //           <button  type="submit">Iniciar sesion</button>
      //           <Link to="/register">Registrarme</Link>
      //          </form>
      //   </div>

      <>
       <section id="sectionLogin">
        <div className="main_new container">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="signup">
            <form action="" onSubmit={handleSubmit}>
            <Link className="labelLogin" to="/register"  >
            <label  for="chk" aria-hidden="true">
            Registro
              </label></Link>
              <input
              onChange={handleInputChange}
              value={values.userName}
              className="inputLogin"
              type="text"
              name="userName"
              placeholder="Nombre"
              required
            />
            <input
              onChange={handleInputChange}
              value={values.email}
              className="inputLogin"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              onChange={handleInputChange}
              value={values.phone}
              className="inputLogin"
              type="number"
              name="phone"
              placeholder="Telefono"
              required
            />
            <input
              onChange={handleInputChange}
              value={values.password}
              className="inputLogin"
              type="password"
              name="password"
              placeholder="Contraseña"
              required
            />
              <button type="submit" className="buttonLogin">Registrarme</button>
            </form>
          </div>

          <div className={`login  logininLogin ${isLoaded ? 'loaded' : ''}`}>
            <form>
            <Link className="labelLogin"  style={{cursor:"pointer"}}to="/login"  >
            <label  for="chk" aria-hidden="true">
            Iniciar sesión
              </label></Link>
            
              <input
                className="inputLogin"
                onChange={handleInputChange }
                  value={values.email}
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <input
                className="inputLogin"
                onChange={handleInputChange }
                value={values.password}
                type="password"
                name="password"
                placeholder="Contraseña"
                required=""
              />
              <button  type="submit" className="buttonLogin">Inicar sesión</button>
            </form>
          </div>
        </div>
      </section>
      </>
    )
}