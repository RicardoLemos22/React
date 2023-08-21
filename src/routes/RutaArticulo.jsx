import {useEffect} from "react"
import {NavBar} from "../components/NavBar"
import {ItemDetailContainer} from "../components/ItemDetailContainer"
import {useParams} from "react-router-dom"


function RutaArticulo () {
    const params = useParams()
    useEffect(() => {
      document.title="Beauty Elixir | Producto " + params.id
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
          <ItemDetailContainer idProd={Number(params.id)}></ItemDetailContainer>
        </main>
      }      
      </>
    )
  }
  
  export default RutaArticulo
