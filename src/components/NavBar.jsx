import {CartWidget} from "./CartWidget.jsx"

export const NavBar = () => {
    return (
        <>{
            <nav class="navbar navbar-expand-md navbar-light bg-light bg-warning">
                <a class="navbar-brand" href="#">
                    <div class="navbar-brand-container">
                    <img src="../assets/elixir_logo.png" alt="Logo"/>
                    <span class="navbar-brand-text">Beauty Elixir</span>
                    </div>
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Cuidado Facial</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Cuidado Corporal</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Fragancias</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Maquillaje</a>
                    </li>
                    </ul>

                    <CartWidget numero={22}></CartWidget>

                </div>
            </nav>
        }</>
    )
}

