import { useEffect } from "react"

//'navega a <ItemListContainer'
function RutaCategoria () {
    useEffect(() => {
      document.title="Titulo de RutaCategoria"
    },[])  

    return (
      <div>
        <h1>RutaCategoria</h1>
      </div>
    )
  }
  
  export default RutaCategoria
