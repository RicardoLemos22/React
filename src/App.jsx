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
      <ItemListContainer greeting="Bienvenidos"></ItemListContainer>
    </>
  )
}

export default App