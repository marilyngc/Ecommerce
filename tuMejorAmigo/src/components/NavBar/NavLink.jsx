import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import {BsFillPersonFill} from "react-icons/bs"
const link = [

 /*  { id: 1, nav: " productos", link: "/" }, */
  {id:2, nav: <BsFillPersonFill  style={{  width: "1.7rem", height:"1.7rem" }} /> , link: "/iniciarSesion"}
];

export const NavLink = () => {
  return (
    <ListGroup horizontal className="  ms-2 mx-lg-3 ">
      {link.map((text, index) => (
        <Link className="nav-link  " key={index} to={text.link}>
          {" "}
          {text.nav}{" Ingresar"}
        </Link>
      ))}
    </ListGroup>
  );
};
