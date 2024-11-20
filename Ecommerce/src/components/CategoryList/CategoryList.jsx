import { Image, Nav } from "react-bootstrap"
import { DataCategory } from "./DataCategory"
import { Link } from "react-router-dom"
import { useState } from "react"
export const CategoryList = () => {
    const [radioOn, setRadioOn] = useState(null);

    const handleRadioOn = (id) => {
        setRadioOn(id); // Activar el radio correspondiente
      };
    return (
        <Nav className="radio-inputs mt-4  container d-flex flex-column justify-content-center align-items-center">
        {/* Título */}
        <div className="flex" style={{ width: 'auto' }}>
          <h2
            className="styleh2 "
          
          >
            Navega por categorías
          </h2>
        </div>
  
        {/* Contenedor de categorías */}
        <div className="row mt-3 ">
          {DataCategory.map((item) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4" key={item.id}>
              <Link to={item.link} onClick={() => handleRadioOn(item.id)} className={` d-block text-center`}>
                <label>
                  <input className="radio-input" type="radio" name="engine"   checked={radioOn === item.id}
                  readOnly/>
                  <span className="radio-tile">
                    <span className="radio-icon">
                      {item.icon}
                    </span>
                    <span className="radio-label">{item.title}</span>
                  </span>
                </label>
              </Link>
            </div>
          ))}
        </div>
      </Nav>
    )
}