import React from 'react'
import { Link } from 'react-router-dom'

const Item = ( {producto} ) => {
  return (
    <div className="col-md-3">
        <div className="card producto-card">
            <img src={producto.img} className="card-img-top" alt={`Producto ${producto.nombre}`} />
            <div className="card-body">
            <h5 className="card-title font-weight-bold">{producto.nombre}</h5>
            <p className="card-text">{producto.descripcion1}</p>
            <div className="d-flex justify-content-between">
                <Link to={`/item/${producto.id}`} className="btn btn-link">Ver Detalles</Link>
                <span className="card-price font-weight-bold">$ {producto.precio}</span>
            </div>
            </div>
        </div>        
    </div>

  )
}

export default Item