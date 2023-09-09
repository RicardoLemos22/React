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
    <h2 className="product-title">{item.nombre}</h2>
    <div className="row">
      <div className="container">
        <div className="product-details">
          <div className="product-image">
            <img src={item.img} className="img-fluid" 
                 alt={`Producto ${item.nombre}`} /> 
          </div>
          <div className="product-info">
            <p className="product-description">
              {item.descripcion2}
            </p>
            <div className="d-flex">
              <p className="product-category">Categoría: {item.idCategoria}</p>
              <p className="product-price">$ {item.precio}</p>
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