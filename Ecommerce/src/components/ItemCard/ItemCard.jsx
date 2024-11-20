
import { Link } from "react-router-dom";

const colors = ['color1', 'color2', 'color3'];
const calculateColorIndex = (id) => {
  const sum = Array.from(id).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return sum % colors.length; // Índice cíclico
};
export const ItemCard = ({ id, nombre, precio, img, beneficios }) => {
  const colorClass = colors[calculateColorIndex(id)];

  

  return (
    <>
    
        <section className="section_card " >
 
  <div className="container_new">
   
  
    <div className="card_new">
      <div className="card-inner_new" >
        <div className="box_new">
          <div className="imgBox_new">
            <img src={img} alt="Shower Gel"/>
          </div>
          <div className="icon_new">
          <Link
 className={`iconBox_new ${colorClass}`}
  to={`/detail/${id}`}
>
  <span className="material-symbols-outlined">arrow_outward</span>
</Link>

           
          </div>
        </div>
      </div>
      <div className="content">
        <h4>{nombre}</h4>
        <p>${precio}</p>
        {precio > 5.0 && (
          <p style={{ fontWeight: 600, color: "red" }}>Envio gratis!</p>
        )}
        <ul >
          {beneficios.map((txt,id) => (
            
<li  
  key={id} 
  style={{ 
    "--clr-tag": "#d05fa2",
    backgroundColor: id % 3 === 0 ? "#d3b19a" : id % 3 === 1 ? "#70b3b1" : "#d05fa2" 
 
  }} 
  className={`colorbranding${id}`} 
>
  {txt}
</li>   
          ))}
          </ul>
        
     
        
      </div>
    </div>
  </div>
</section>
       
    </>
  );
};
