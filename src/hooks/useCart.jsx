import { useContext } from "react";
import { CartContext } from "../Context/cart.jsx"

export const useCart = () =>{
    const context = useContext(CartContext);

    if(context === undefined){
        throw new Error("Acceso denegado")
    }

    return context
}