import { useId } from "react"
import './Cart.css'
import {ClearCartIcon, CartIcon} from "./Icons.jsx"
import {useCart} from "../hooks/useCart.jsx"


function CartItem({thumbnail,price,title, quantity, addToCart}){
    return(
        <li>
            <img src={thumbnail} alt={title} />
            <div>
                <strong>{title}</strong>
                <p>$ {price}</p>
            </div>

            <footer>
                <small>
                    qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export default function Cart() {

    const cartCheckboxId = useId();
    const { cart, clearCart,addToCart } = useCart()

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon/>
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden/>

            <aside className="cart">
                <ul>
                    {cart.map(productos =>(
                        <CartItem key={productos.id} 
                        addToCart={()=>addToCart(productos)}
                        {...productos}/>
                    ))}
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon/>
                </button>
            </aside>
        </>
    )
}
