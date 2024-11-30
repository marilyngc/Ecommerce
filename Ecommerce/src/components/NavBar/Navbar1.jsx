
import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink } from "./NavLink";
import { Link } from "react-router-dom";
import logoJehnny from "../../assets/logo/Imagen2.png";

import { Container, Form, Nav, Navbar, Offcanvas, Image } from "react-bootstrap";
export const Navbar1 = ({ variant }) => {
 

  return (
    <header className={"  w-50 navbarStyle z-3 px-3 " +  (variant ? "   custom-position  ": " custom-position-null")}>
    <nav class="d-flex w-100 mx-auto align-items-center justify-content-between ">
  <div className="d-none d-lg-block icon-back d-flex align-items-center justify-content-center">
  <Link to="/">   <Image src={logoJehnny}style={{ width: "190px", height: "50px" }} /> </Link>

  </div>
    <div class="d-flex align-items-center justify-content-center" >
      <NavLink variant={variant} />
      <CartWidget variant={variant} />
    </div>
  </nav>
  </header>
  );
};
