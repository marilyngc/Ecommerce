
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/styles.scss";
import "./App.css";


import { AuthContextProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

import { AppRouter } from "./router/AppRouter";


function App() {


  return (
    <AuthContextProvider> {/* context */}
    
<CartProvider> {/*  context */}
<AppRouter/>

</CartProvider>
  
    </AuthContextProvider>


  );
}

export default App;
