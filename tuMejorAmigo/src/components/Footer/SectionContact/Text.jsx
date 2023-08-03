import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import logoJehnny from "../../../assets/logo/jeh.png";
export const Text = () => {
    return(
        <div className="col-xs-12 col-lg-4 ">

            <Link to="/">   <Image src={logoJehnny} style={{ width:"200px"}}   /> </Link>
        <p className="mt-3">
          Registrate para poder hacer una compra y que tu piel disfrute
          del cuidado de nuestros productos.
        </p>
      </div>
    )
}