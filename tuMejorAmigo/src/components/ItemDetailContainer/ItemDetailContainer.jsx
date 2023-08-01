import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import {doc, getDoc} from "firebase/firestore"
import { dataBase } from "../../firebase/config";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null); //Iniciamos vacio
  const {itemId} = useParams();
const [loading, setLoading] = useState(true)
  useEffect(() => {
setLoading(true)
   // 1 . armar la referencia (syn)sincronico
const itemRef = doc(dataBase, "products", itemId)
   // 2 - solicitar referencia (asyn)asincronico
   getDoc(itemRef)
   .then((doc) =>{
setItem({
  ...doc.data(),
  id: doc.id
})

   })
   .catch(e => console.log(e))
   .finally(() =>setLoading(false) )
  }, [itemId]); // El array vacio es el montage para que no se renderise
  return (
    <div className="container h-100  my-5  d-flex justify-content-center">
{
  loading
  ? <div class="custom-loader my-5 "></div>
  : <ItemDetail{...item} />
}
    </div>
  )
};
