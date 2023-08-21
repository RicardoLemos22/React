import {NavBar} from "../components/NavBar"
import {ItemListContainer} from "../components/ItemListContainer.jsx"
//import {useEffect} from "react"

import {ArticulosList} from "../components/ArticulosList.jsx"

function RutaHome () {
    return (
      <>
      {
        <header>
          <NavBar></NavBar>  
        </header>
      }
      {
        <main class="container bienvenidos-container">
          <ItemListContainer greeting="Catálogo completo de Productos"></ItemListContainer>
        </main>
      }
      </>
    )
  }
  
  export default RutaHome
