import { Image } from "react-bootstrap";


import front from "../../assets/back.png"
import { bottom } from "@popperjs/core";
export const ItemFrontPage = () => {
  return (
    <section className=" section1">
    <Image src={front} fluid className="h-100 w-100" />
    
    <div className="div_button">
      <button className="button">
        Contáctame
      </button>
    </div>
  </section>
  
  );
};
