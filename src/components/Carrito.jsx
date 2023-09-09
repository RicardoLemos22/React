import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className="container">
        <h1 className="main-title">Carrito</h1>
        <br />
        <br />
        {
            carrito.map((prod) => (
                <div key={prod.id} className="product-details">
                    <br />
                    <h4 className="product-info">{prod.nombre}</h4>
                    <p className="product-info">Precio unit: $ {prod.precio}</p>
                    <p className="product-info">Cant: {prod.cantidad}</p>
                    <p className="product-info">Precio total: $ {prod.precio * prod.cantidad}</p>
                    <br />
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <>
                <h2>Precio total: ${precioTotal()}</h2>
                <button className='btn btn-outline-secondary btn-sm mr-3' onClick={handleVaciar}>Vaciar</button>
                <Link to="/checkout">Finalizar compra</Link>
            </> :
            <h2>El carrito de compras se encuentra vacío</h2>
        }
        
    </div>
  )
}

export default Carrito