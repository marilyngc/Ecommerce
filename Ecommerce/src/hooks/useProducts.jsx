import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../firebase/config";
export const useProducts = () => {
  const [products, setProducts] = useState([]); //Iniciamos vacio
  const { categoryId } = useParams();

  useEffect(() => {
    // 1 - armar una referencia  (sync) sincronico
    const productsRef = collection(dataBase, "products");
    const q = categoryId
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef;
    // 2 - peticion de esa referencia (async) asicronico
    getDocs(q)
      .then((resp) => {
        const items = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setProducts(items);
      })
      .catch((e) => console.log(e));
  }, [categoryId]); // El array vacio es el montage para que no se renderise

  return {
    products,
  };
};
