import React from 'react'
import { Link } from 'react-router-dom'

const Item = ( {producto} ) => {
  return (
    <>
    {/* <div className="producto">
        <img src={producto.img} alt={producto.nombre} />
        <div>
            <h4>{producto.nombre}</h4>
            <p>Precio: ${producto.precio}</p>
            <p>Categoría: {toCapital(producto.idCategoria)}</p>
            <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
        </div>
    </div> */}

    <div class="col-md-3">
            <div class="card producto-card">
                <img src={producto.img} class="card-img-top" alt={`Producto ${producto.nombre}`} />
                <div class="card-body">
                <h5 class="card-title font-weight-bold">{producto.nombre}</h5>
                <p class="card-text">{producto.descripcion1}</p>
                <div class="d-flex justify-content-between">
                    <Link to={`/item/${producto.id}`} class="btn btn-link">Ver Detalles</Link>
                    <span class="card-price font-weight-bold">$ {producto.precio}</span>
                </div>
                </div>
            </div>        
        </div>


    </>
  )
}

export default Item