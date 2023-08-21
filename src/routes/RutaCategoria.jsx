import {useEffect} from "react"
import {useParams} from "react-router-dom"
import {NavBar} from "../components/NavBar"
import {ItemListContainer} from "../components/ItemListContainer.jsx"

function RutaCategoria () {
    const params = useParams()
    useEffect(() => {
      document.title="Beauty Elixir | Categoria " + params.idCategoria
    },[])

    return (
      <>
      {
        <header>
          <NavBar></NavBar>  
        </header>
      }
      {
        <main class="container bienvenidos-container">
          <ItemListContainer greeting={"Catálogo de " + params.idCategoria}></ItemListContainer>
          {/* usando: template literals
              greeting={`Catálogo de ${params.idCategoria}`}
          */}
        </main>
      }      
      </>
    )
  }
  
  export default RutaCategoria
