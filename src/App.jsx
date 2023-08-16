// import './App.css'
import {NavBar} from "./components/NavBar.jsx"
import {ItemListContainer} from "./components/ItemListContainer.jsx"


function App() {
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

export default App