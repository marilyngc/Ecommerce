
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/styles.scss";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Footer } from "./components/Footer/Footer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import Page404 from "./components/404/Page404";
import { CartProvider } from "./context/CartContext";
import { DarkModerProvider } from "./context/DarkModeContext";
import Cart from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout";
function App() {


  return (
    <DarkModerProvider> {/* context */}
<CartProvider> {/*  context */}
<BrowserRouter>
        <Routes>
           <Route path="/" element={<NavBar variant />} /> 
           <Route path="/catalogo/:categoryId"  element={<NavBar variant />} />
          <Route path="*" element={<NavBar />} />
        </Routes>

        <Routes>
       

          <Route path="/" element={<ItemListContainer />} />
          <Route path="/catalogo/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart/>} />
          
          <Route  path="/checkout" element={<Checkout/>}/>
          {/*    <Route path="*" element={<Navigate to={"/"}/>}/> */}
          <Route path="*" element={<Page404 />} />
        </Routes>

        <Footer />
      </BrowserRouter>
</CartProvider>
    </DarkModerProvider>



  );
}

export default App;
