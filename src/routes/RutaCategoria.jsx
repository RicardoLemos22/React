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
          <ItemListContainer 
            greeting={"Catálogo de " + params.idCategoria}
            categoria={params.idCategoria}>
          </ItemListContainer>
        </main>
      }      
      </>
    )
  }
  
  export default RutaCategoria
