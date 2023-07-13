import { Image } from "react-bootstrap";
import frontImage from "../../assets/products/pedestal.jpg";

export const ItemFrontPage = () => {
  return (
    <div className="card  position-relative" style={{ height: "70rem" }}>
      <Image src={frontImage} fluid className="h-100" />
      <div className="card-img-overlay w-50 mt-5 ms-5  p-5 position-absolute top-0 start-50 translate-middle-x  ">
        <h1 data-shadow="Descubre Nuestros Productos" className="p-5">
      
          Descubre Nuestros Productos
        </h1>
      </div>
    </div>
  );
};
