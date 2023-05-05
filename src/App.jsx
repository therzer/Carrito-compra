import { products as initialProducts} from "./Productos/products.json";
import Productos from "./Components/Productos"
import { useState } from "react";
import Header from "./Components/Header.jsx";
import {useFiltro} from "./hooks/useFilters.jsx"
import Cart from "./Components/Cart";
import { CartProvider } from "./Context/cart";

function App() {
  const{filtrarProductos} = useFiltro()
  const filtroProductos = filtrarProductos(initialProducts);

  return (
    <CartProvider>
      <Header />
      <Cart/>
      <Productos productos={filtroProductos}/>
    </CartProvider>
  )
}

export default App
