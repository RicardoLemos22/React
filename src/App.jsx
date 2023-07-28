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
        <ItemListContainer greeting="Bienvenidos"></ItemListContainer>
      </main>
    }      
    </>
  )
}

export default App