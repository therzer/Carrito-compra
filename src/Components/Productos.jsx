import './Productos.css'
import { AddToCartIcon } from './Icons'

export default function Productos({productos}) {
    return (
        <main className="products">
            <ul>
                {productos.slice(0, 10).map(productos =>(
                    <li key={productos.id}>
                        <img src={productos.thumbnail} alt={productos.title} />

                        <div>
                            <strong>{productos.title}</strong>
                            <p>$ {productos.price}</p>
                        </div>

                        <div>
                            <button>
                                <AddToCartIcon/>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}
