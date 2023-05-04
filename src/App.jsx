import { products as initialProducts} from "./Productos/products.json";
import Productos from "./Components/Productos"
import { useState } from "react";
import Header from "./Components/Header.jsx";
import {useFiltro} from "./hooks/useFilters.jsx"

function App() {
  const{filtrarProductos} = useFiltro()
  const filtroProductos = filtrarProductos(initialProducts);

  return (
    <>
      <Header />
      <Productos productos={filtroProductos}/>
    </>
  )
}

export default App
