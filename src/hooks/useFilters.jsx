import { useContext } from "react"
import { FiltersContext } from "../Context/filters"

export function useFiltro(){
    
        //const [filtro, setFiltro] = useState({
        // categoria:'all',
        //  minPrecio:0
        //})
    
        const {filtro, setFiltro} = useContext(FiltersContext)
        
        //Practicar filtros 
        const filtrarProductos = (products) => {
        return products.filter(product =>{
            return(
            product.price >= filtro.minPrecio && (
                filtro.categoria === 'all' ||
                product.category === filtro.categoria
            )
            )
        })
        }
        return{filtro,filtrarProductos, setFiltro}
}