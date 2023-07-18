import { addDoc, collection, updateDoc } from "firebase/firestore"
import  MOCK_DATA  from "../components/ItemListContainer/MOCK_DATA.json" assert {type:"json"}
import { dataBase } from "./config.js"
const productsRef = collection(dataBase,"products")


MOCK_DATA.forEach((item) => {
    delete item.id

    addDoc(productsRef,item)

/*     updateDoc(productsRef,item)   PARA ACTUALIZAR DOCUMENTO  */ 

})

