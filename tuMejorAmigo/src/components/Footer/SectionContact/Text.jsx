import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import logoJehnny from "../../../assets/logo/JehnnyFont2.png";
export const Text = () => {
    return(
        <div className="col-xs-12 col-lg-4 ">

            <Link to="/">   <Image src={logoJehnny} style={{ width:"200px", height: "100px"}}   /> </Link>
        <p className="mt-2">
          Registrate para poder hacer una reserva y que tu mascota disfrute
          del acompañamiento de un miembro de nuestro equipo.
        </p>
      </div>
    )
}