import { useFiltro } from '../hooks/useFilters';
import './Filters.css'
import React, { useId } from 'react'

export default function Filtro() {
    const{ filtro, setFiltro} = useFiltro()
    
    const minPrecioFiltroId = useId()
    const categoriaFiltroId = useId()

    const handleChangeMinPrecio = (event)=>{
        setFiltro(prevState =>({
            ...prevState,
            minPrecio: event.target.value
        }))
    }


    const handleChangeCategoria = (event) => {
        setFiltro(prevState => ({
            ...prevState,
            categoria:event.target.value
        }))
    }

    return (
        <section className='filters'>

            <div>
                <label htmlFor={minPrecioFiltroId}>Precio a partir de:</label>
                <input type="range" 
                id={minPrecioFiltroId} 
                min='0' max='2000' 
                onChange={handleChangeMinPrecio} 
                value={filtro.minPrecio}/>

                <span>$ {filtro.minPrecio}</span>
            </div>

            <div>
                <label htmlFor={categoriaFiltroId}>Categoria</label>
                <select id={categoriaFiltroId} onChange={handleChangeCategoria}>
                    <option value="all">Todas las categorias</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>

        </section>
    )
}
