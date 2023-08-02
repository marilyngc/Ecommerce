import { ItemList } from "./ItemList/ItemList";
import {ItemFrontPage} from "./ItemFrontPage";
import { useProducts } from "../../hooks/useProducts";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { RiHandSanitizerLine } from "react-icons/ri";
import { BsUniversalAccess} from "react-icons/bs";
import { TbHorseToy} from "react-icons/tb";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineMedicalServices } from "react-icons/md";
import { CategoryList } from "../CategoryList/CategoryList";


export const ItemListContainer = () => {
  const { products } = useProducts();


  return (
    <main className="container-fluid p-0  " >
      <ItemFrontPage/>
    
      <CategoryList/>
      
 

      <ItemList  items={products} />
    </main>
  );
};
