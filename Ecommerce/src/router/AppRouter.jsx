import { BrowserRouter, Routes, Route, Navigate, NavLink } from "react-router-dom";

import { NavBar } from "../components/NavBar/NavBar";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer";
import Page404 from "../components/404/Page404";
import { Footer } from "../components/Footer/Footer";

import Cart from "../components/Cart/Cart";
import { Checkout } from "../components/Checkout/Checkout";
import { AuthContext } from "../context/AuthContext"
import { LoginScreen } from "../components/LoginScreen/LoginScreen";
import { useContext } from "react";
import { RegisterScreen } from "../components/LoginScreen/RegisterScreen";


export const AppRouter = () => {
    const { user } = useContext(AuthContext)
    return (
        <BrowserRouter>
            
                {
                    user.logged 
                    ?
                    <>
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/profile" element={<Profile />} />
                  
                    </>
                    :
                    <>
                    <Routes>
                <Route path="/" element={<NavBar variant />} />
                <Route path="/catalogo/:categoryId" element={<NavBar variant /> }  tono={<NavLink variant/>}/>
                <Route path="*" element={<NavBar /> } />
            </Routes>

            <Routes>

            <Route path="/cart" element={<Cart />} />
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/catalogo/:categoryId" element={<ItemListContainer />} />
                <Route path="/detail/:itemId" element={<ItemDetailContainer/>} />


                <Route path="/checkout" element={<Checkout />} />
                {/*    <Route path="*" element={<Navigate to={"/"}/>}/> */}
          {/*       <Route path="*" element={<Page404 />} /> */}
                <Route path="/login" element={<LoginScreen/>} />
                <Route path="/register" element={<RegisterScreen/>} />
                
                </Routes>
                    </>
                }
          
          <Footer />
          
        </BrowserRouter>
    )
}