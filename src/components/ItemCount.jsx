import React from 'react'

const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

  return (
    <div>
        {/* <div className="item-count">
            <button onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>
        </div>
        <button className="agregar-al-carrito" onClick={handleAgregar}>Agregar</button> */}

        <div className="item-count d-flex align-items-center ml-5">
          <button className="btn btn-outline-secondary btn-sm" onClick={handleRestar}>-</button>
          <p className="mx-2 d-flex align-items-center">{cantidad}</p>
          <button className="btn btn-outline-secondary btn-sm" onClick={handleSumar}>+</button>
        </div>
        <button className="btn btn-outline-secondary btn-sm d-flex align-items-center ml-5" onClick={handleAgregar}>Agregar</button>

    </div>
  )
}

export default ItemCount