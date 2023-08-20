// import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import RutaHome from "./routes/RutaHome.jsx"
import RutaCategoria from "./routes/RutaCategoria.jsx"
import RutaArticulo from "./routes/RutaArticulo.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<RutaHome />} />
        <Route exact path="/" element={<RutaHome />}/>
        <Route exact path="/category/:idCategoria" element={<RutaCategoria />}/>
        <Route path="/item/:idProducto" element={<RutaArticulo />}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App