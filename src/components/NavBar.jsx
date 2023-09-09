import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'


const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-md navbar-light bg-light bg-warning">
      <Link to="/" className="navbar-brand">
          <div className="navbar-brand-container">
              <img src="https://ehiglobal.com.ar/assets/ricardo/elixir_logo.png" alt="Beauty Elixir"/>
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
            <Link className="nav-link" to="/categories/facial">Cuidado Facial</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/categories/corporal">Cuidado Corporal</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/categories/fragancias">Fragancias</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/categories/maquillaje">Maquillaje</Link>
        </li>
        </ul>

        <CartWidget />

      </div>
    </nav>

  )
}

export default Navbar