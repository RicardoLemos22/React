import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (

    // <nav className="navbar">
    //     <Link to="/" className="logo"><h1>Carpishop</h1></Link>
    //     <ul className="menu">
    //         <li><Link className="menu-link" to="/">Inicio</Link></li>
    //         <li><Link className="menu-link" to="/productos">Productos</Link></li>
    //         <li><Link className="menu-link" to="/productos/medias">Medias</Link></li>
    //         <li><Link className="menu-link" to="/productos/pantalones">Pantalones</Link></li>
    //         <li><Link className="menu-link" to="/productos/remeras">Remeras</Link></li>
    //         <li><Link className="menu-link" to="/productos/buzos">Buzos</Link></li>
    //         <li><CartWidget /></li>
    //     </ul>
    // </nav>

    <nav className="navbar navbar-expand-md navbar-light bg-light bg-warning">
      <Link to="/" className="navbar-brand" reloadDocument>
          <div className="navbar-brand-container">
              <img src="https://ehiglobal.com.ar/assets/ricardo/elixir_logo.png" alt="Logo"/>
              <span className="navbar-brand-text">Beauty Elixir</span>
          </div>
      </Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto ml-auto">
        <li className="nav-item">
            <Link reloadDocument className="nav-link" to="/categories/facial">Cuidado Facial</Link>
        </li>
        <li className="nav-item">
            <Link reloadDocument className="nav-link" to="/categories/corporal">Cuidado Corporal</Link>
        </li>
        <li className="nav-item">
            <Link reloadDocument className="nav-link" to="/categories/fragancias">Fragancias</Link>
        </li>
        <li className="nav-item">
            <Link reloadDocument className="nav-link" to="/categories/maquillaje">Maquillaje</Link>
        </li>
        </ul>

        <CartWidget />

      </div>
    </nav>

  )
}

export default Navbar