import "./style.css"

import { BrowserRouter, Route, Routes } from "react-router-dom"

import { CartProvider } from "./context/CartContext"
import Navbar from "./components/NavBar"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import Carrito from "./components/Carrito"
import Checkout from "./components/Checkout"


function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <header>
            <Navbar />
          </header>
          
          <main className="container bienvenidos-container">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />}/>
              <Route path="/categories" element={<ItemListContainer />} />
              <Route path="/categories/:categoryId" element={<ItemListContainer />} />
              <Route path="/carrito" element={<Carrito />}/>
              <Route path="/checkout" element={<Checkout />}/>
            </Routes>
          </main>
          
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App