import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const Cart = () => {
const{cart,fullPurchase} = useContext(CartContext);

    return(
        <div>
            <h2>Tu compra</h2>

            {
                cart.map((prod) => (
                    <div key={prod.id}>
                        <h4>{prod.img}</h4>
                        <img src={prod.img} alt="" />
                        <p>${prod.precio}</p>
                        <p>{prod.stock}</p>
                    </div>
                ))
            }

            <div>
                <h5>Total:{fullPurchase()}</h5>
            </div>
        </div>
    )
}

export default Cart