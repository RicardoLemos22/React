import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

    const { cantidadComprada } = useContext(CartContext);

  return (
    
    // <div>
    //     <Link className="menu-link" to="/carrito">
    //         Carrito
    //         <span className="numerito">{cantidadEnCarrito()}</span>
    //     </Link>
    // </div>
      <>
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <Link className="nav-link" to="/carrito">
            <i className="fas fa-shopping-bag fa-lg"></i>
            <span className="badge badge-pill badge-danger">{cantidadComprada()}</span>
            </Link>
        </li>
        </ul>
      </>

    
    
  )
}

export default CartWidget