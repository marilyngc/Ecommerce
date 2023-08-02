import { Image, Nav } from "react-bootstrap"
import { DataCategory } from "./DataCategory"
import { Link } from "react-router-dom"
export const CategoryList = () => {

    return (
        <Nav className="radio-inputs  mt-4 p-4 container d-flex justify-content-center align-items-center">
          {
            DataCategory.map((item) => (
                <Link to={item.link}key={item.id}>
                
                <label >
                <input className="radio-input" type="radio" name="engine" />
                <span className="radio-tile">
                    <span className="radio-icon">
                   
{item.icon}



					</span>
                    <span className="radio-label">{item.title}</span>
                </span>
            </label>
                </Link>
                
            ))
          }
          
          
         
        </Nav>
    )
}