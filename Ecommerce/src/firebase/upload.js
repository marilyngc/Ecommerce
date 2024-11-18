import { addDoc, collection } from "firebase/firestore";
import MOCK_DATA from "../components/ItemListContainer/MOCK_DATA.json"assert { type: "json" };
import { dataBase } from "./config.js";

const productsRef = collection(dataBase, "products");

const addProductsToFirestore = async () => {
  try {
    for (const item of MOCK_DATA) {
      delete item.id;
      await addDoc(productsRef, item);
    }
    console.log("Productos agregados exitosamente a Firestore");
  } catch (error) {
    console.error("Error al agregar productos a Firestore:", error);
  }
};

addProductsToFirestore();
