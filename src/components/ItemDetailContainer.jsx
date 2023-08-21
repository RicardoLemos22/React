import { Link } from "react-router-dom"
import productos from "./productos.json"


export const ItemDetailContainer = ({idProd}) => {
  const unProd = productos.find(articulo => articulo.id === idProd)

  return (
  <>
    <h2 class="product-title">{unProd.nombre}</h2>
    <div class="row">
      <div class="container">
        <div class="product-details">
          <div class="product-image">
            <img src={unProd.img} class="img-fluid" 
                 alt={`Producto ${unProd.nombre}`} /> 
          </div>
          <div class="product-info">
            <p class="product-description">
              {unProd.descripcion2}
            </p>
            <div class="d-flex">
              <p class="product-category">Categoría: {unProd.idCategoria}</p>
              <p class="product-price">$ {unProd.precio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)
}