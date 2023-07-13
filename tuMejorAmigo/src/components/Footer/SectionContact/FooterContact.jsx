import { Card,Figure } from "react-bootstrap";
import { Contacts } from "../Data";
import { Fragment } from 'react';
import { Link } from "react-router-dom";



export const FooterContact = () => {
  const listItems = Contacts.map((item) => (

    <div key={item.id} className=" d-flex col ">  
    
      
    <Fragment >
    {item.icon}
    </Fragment>
    <div  className="ms-lg-3 mb-4 mb-lg-0 py-1 ">
         <Card.Title className="mt-0 fw-bold pb-1">{item.subtitle}</Card.Title>

{
  item.id === 2 ?(
    <Link to={`https://wa.me/${item.paragraph}` } className="text-secondary ">{item.paragraph}</Link>
  ) : item.id === 3 ? (
    <Link to={`mailto:${item.paragraph}`} className="text-secondary ">{item.paragraph}</Link>
  ):(
    <Card.Text className="text-secondary">{item.paragraph}</Card.Text>
  )
} 
     
      
   
         </div>

        
         
    </div>  ));

  return(
    <Card.Body className="d-flex row" >{listItems}</Card.Body>
  )
};
