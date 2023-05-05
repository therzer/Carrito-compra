import { createContext, useState } from "react";

export const cardInitialState = JSON.parse(window.localStorage.getItem('card')) || [];

export const CartContext = createContext();

export const updateLocalStorage = state =>{
    window.localStorage.setItem('card', JSON.stringify(state))
}

export function CartProvider({children}){
    const [cart, setCart] = useState([])

    const addToCart = product =>{
        const productInCartIndex = cart.findIndex(item => item.id === product.id);

        if(productInCartIndex >=0){
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart);
        }


        const newState =[
            setCart(prevState => ([
                ...prevState,
                {
                    ...product,
                    quantity:1
                }
            ]))
        ]

        updateLocalStorage(newState)
        return newState;

    }

    const removeFromCart = product =>{
        setCart(prevState => prevState.filter(item => item.id != product.id))
    }

    const clearCart = () =>{
        setCart([])
    }

    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}