import {NavBar} from "../components/NavBar"
import {ItemListContainer} from "../components/ItemListContainer.jsx"
//import { useEffect } from "react"

//'navega a <ItemListContainer'
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
          <ItemListContainer greeting="Catálogo de Productos"></ItemListContainer>
        </main>
      }      
      </>
    )
  }
  
  export default RutaHome
