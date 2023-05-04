import { createContext, useState } from "react";

export const FiltersContext = createContext()

export function FiltersProvider({children}){
    const [filtro, setFiltro] = useState({
        categoria:'all',
        minPrecio:25
    });

    return(
        <FiltersContext.Provider value={{
            filtro,
            setFiltro
        }}>
            {children}
        </FiltersContext.Provider>
    )
}