
import { SectionContact } from "./SectionContact/SectionContact";
import { Copyright } from "./Copyright";
export const Footer = () => {
  return (
    // FOOTER

    <footer className="hcode-footer-bottom bg-neutral-900  h-auto d-flex justify-content-center align-items-center flex-wrap mt-lg-3 mt-5" >
       <SectionContact/>
 
    <Copyright/>
     
    </footer>
  );
};
