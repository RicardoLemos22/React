import { Link } from "react-router-dom"
import productos from "./productos.json"


export const ItemList = ({numero}) => {
    const unProd = productos.find(articulo => articulo.id === numero)
    
    return (
        <>
        <div class="col-md-3">
            <div class="card producto-card">
                <img src={unProd.img} class="card-img-top" alt={`Producto ${unProd.nombre}`} />
                <div class="card-body">
                <h5 class="card-title font-weight-bold">{unProd.nombre}</h5>
                <p class="card-text">{unProd.descripcion1}</p>
                <div class="d-flex justify-content-between">
                    <Link to={`/item/${numero}`} class="btn btn-link">Ver Detalles</Link>
                    <span class="card-price font-weight-bold">$ {unProd.precio}</span>
                </div>
                </div>
            </div>        
        </div>
        </>
      )
}
