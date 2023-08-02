import { Image } from "react-bootstrap";

import front from "../../assets/products/bottonFlower.jpg"
export const ItemFrontPage = () => {
  return (
    <div className="card  position-relative " style={{ height: "100vh", with:"100vh"}}>
    
      <Image src={front} fluid className="h-100   " />  
     <div className="card-img-overlay position-absolute me-5 top-50 start-50 translate-middle">
     <h1 data-shadow="Skincare" className="">
      
      Skincare
    </h1>
     </div>
    

    
    </div>
  );
};
