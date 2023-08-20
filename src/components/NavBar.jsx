import {CartWidget} from "./CartWidget.jsx"
import {Link} from "react-router-dom"
import appLogo from "../assets/elixir_logo.png"

export const NavBar = () => {
    return (
        <>{
            <nav class="navbar navbar-expand-md navbar-light bg-light bg-warning">
                <Link to="/" class="navbar-brand" reloadDocument>
                    <div class="navbar-brand-container">
                        <img src={appLogo} alt="Logo"/>
                        <span class="navbar-brand-text">Beauty Elixir</span>
                    </div>
                </Link>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto ml-auto">
                    <li class="nav-item">
                        {/* <a class="nav-link" href="#">Cuidado Facial</a> */}
                        <Link reloadDocument class="nav-link" to="/category/facial">Cuidado Facial</Link>
                    </li>
                    <li class="nav-item">
                        <Link reloadDocument class="nav-link" to="/category/corporal">Cuidado Corporal</Link>
                    </li>
                    <li class="nav-item">
                        <Link reloadDocument class="nav-link" to="/category/fragancias">Fragancias</Link>
                    </li>
                    <li class="nav-item">
                        <Link reloadDocument class="nav-link" to="/category/maquillaje">Maquillaje</Link>
                    </li>
                    </ul>

                    <CartWidget numero={22}></CartWidget>

                </div>
            </nav>
        }</>
    )
}

