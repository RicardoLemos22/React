import {BrowserRouter, Route, Routes} from "react-router-dom"
import RutaHome from "./routes/RutaHome.jsx"
import RutaCategoria from "./routes/RutaCategoria.jsx"
import RutaArticulo from "./routes/RutaArticulo.jsx"

// import './App.css'º

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<RutaHome />} />
        <Route exact path="/" element={<RutaHome />}/>
        <Route exact path="/category/:id" element={<RutaCategoria />}/>
        <Route path="/item/:id" element={<RutaArticulo />}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App