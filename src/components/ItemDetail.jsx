import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext"


const ItemDetail = ( {item} ) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext)
    console.log(carrito)

    const [cantidad, setCantidad] = useState(1)

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

  return (
    <>
    <h2 class="product-title">{item.nombre}</h2>
    <div class="row">
      <div class="container">
        <div class="product-details">
          <div class="product-image">
            <img src={item.img} class="img-fluid" 
                 alt={`Producto ${item.nombre}`} /> 
          </div>
          <div class="product-info">
            <p class="product-description">
              {item.descripcion2}
            </p>
            <div class="d-flex">
              <p class="product-category">Categoría: {item.idCategoria}</p>
              <p class="product-price">$ {item.precio}</p>
              <ItemCount
                  cantidad={cantidad}
                  handleSumar={handleSumar}
                  handleRestar={handleRestar}
                  handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
                />
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default ItemDetail