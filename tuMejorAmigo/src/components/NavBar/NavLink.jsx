import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import {BsFillPersonFill} from "react-icons/bs"
const link = [

  { id: 1, nav: " productos", link: "/" },
  {id:2, nav: <BsFillPersonFill className="fs-4"/> , link: "/iniciarSesion"}
];

export const NavLink = () => {
  return (
    <ListGroup horizontal className="nav-item mx-3 my-0">
      {link.map((text, index) => (
        <Link className="nav-link" key={index} to={text.link}>
          {" "}
          {text.nav}{" "}
        </Link>
      ))}
    </ListGroup>
  );
};
