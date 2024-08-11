import { Image } from "react-bootstrap";

import front from "../../assets/products/bottonFlower.jpg"
export const ItemFrontPage = () => {
  return (
    <section className="card  position-relative section1  " >
    
      <Image src={front} fluid className=" h-100  w-100" />  
     <div className="card-img-overlay position-absolute w-100 text-center top-50 start-50 translate-middle">
   
     <h1 data-shadow="Skincare" className="">
      
      Skincare
    </h1>
    <div className=" d-flex justify-content-center pt-lg-5 mt-lg-5">
    <button className="button mt-lg-5 mt-4    ">
    Contáctame
    
</button>
    </div>
  
     </div>
    
    
    
    </section>
  );
};
