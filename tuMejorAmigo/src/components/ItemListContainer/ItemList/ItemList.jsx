

import { ItemCard } from "../../ItemCard/ItemCard";


export const ItemList = ({ items }) => {

  return (
    <section id="sectionCatalogue" className=" h-100  my-1  d-flex justify-content-center " >
   
      <div className="container row justify-content-center   ">
      {items.length === 0
        ? <div class="custom-loader"></div>
        : items.map(
            (elem) => <ItemCard  key={elem.id} {...elem} /> // el map retorna un nuevo array
          )}
      </div>
   
    </section>
  );
};
