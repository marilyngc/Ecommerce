import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink } from "./NavLink"

import { Container, Form, Nav, Navbar, Offcanvas, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoJehnny from "../../assets/logo/jeh.png";








export function NavBar({ variant = false }) {
  return (
    <>

      {['xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} fixed={variant ? 'top' : undefined} className={" px-3  shadow " + (variant ? "navbarBg" : "bg-transparent")}>
          <Container fluid>


            <Link to="/">   <Image src={logoJehnny} style={{ width: "130px", height: "35px" }} /> </Link>
            
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="d-flex justify-content-center   w-100">
                  <Link to="/">   <Image src={logoJehnny}style={{ width: "150px", height: "50px" }} /> </Link>

                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 ">
                  <NavLink />
                 
                </Nav>
                <CartWidget />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}


