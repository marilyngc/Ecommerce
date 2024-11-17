import { ItemList } from "./ItemList/ItemList";
import {ItemFrontPage} from "./ItemFrontPage";
import { useProducts } from "../../hooks/useProducts";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

import { CategoryList } from "../CategoryList/CategoryList";


export const ItemListContainer = () => {
  const { products } = useProducts();


  return (
    <main className="container-fluid  p-0 " >
      <ItemFrontPage/>
    
      <CategoryList/>
      
 

      <ItemList  items={products} />
    </main>
  );
};
