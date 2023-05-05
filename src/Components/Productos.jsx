import './Productos.css'
import { AddToCartIcon, RemoveFromCartIcon} from './Icons'
import {useCart} from "../hooks/useCart.jsx"

export default function Productos({productos}) {

    const { addToCart, removeFromCart , cart} = useCart()

    const checkProductInCart = productos => {
        return cart.some(item => item.id === productos.id)
    }

    return (
        <main className="products">
            <ul>
                {productos.slice(0, 10).map(productos =>{
                    
                    const isProductInCart = checkProductInCart(productos);

                    return(
                        <li key={productos.id}>
                            <img src={productos.thumbnail} alt={productos.title} />

                            <div>
                                <strong>{productos.title}</strong>
                                <p>$ {productos.price}</p>
                            </div>

                            <div>
                                <button
                                style ={{backgroundColor: isProductInCart ? 'red' : '#09f'}}
                                onClick={()=>{
                                    isProductInCart
                                    ? removeFromCart(productos)
                                    : addToCart(productos)
                                }}>
                                    {
                                        isProductInCart 
                                        ?<RemoveFromCartIcon/>
                                        :<AddToCartIcon/>
                                    }
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}
