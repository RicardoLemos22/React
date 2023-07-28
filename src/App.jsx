// import './App.css'
import {NavBar} from "./components/NavBar.jsx"


const Texto = ({ parrafo }) => {
  return <p>{parrafo}</p>
}

function App() {
  return (
    <>
      <Texto parrafo="Hola coders"></Texto>
    </>
  )
}

export default App
