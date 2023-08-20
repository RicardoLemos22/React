import React from 'react'
import {Link} from "react-router-dom"

export const ItemDetailContainer = ({idProd}) => {
  return (
  <>
    <h2 class="product-title">Producto {idProd}</h2>
    <div class="row">
      <div class="container">
        <div class="product-details">
          <div class="product-image">
            {/* <img src="./assets/producto1.jpg" alt="Producto UNO" class="img-fluid"/> */}
            <img src={`https://ricardolemos22.github.io/React/assets/producto${idProd}.jpg`} class="img-fluid" alt={`Producto ${idProd}`} /> 
          </div>
          <div class="product-info">
            <p class="product-description">
              Descripción completa del producto. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Labore repudiandae, ut quasi
              inventore quam vitae expedita, ab eos totam voluptates quas fuga
              mollitia tempora et, tempore ipsa necessitatibus nobis laborum
              corrupti cumque quis pariatur aliquid odio quod! Quod quibusdam,
              sunt corrupti accusamus velit, ab libero incidunt rerum, laborum
              eos laudantium.
            </p>
            <div class="d-flex">
              <p class="product-category">Categoría: Facial</p>
              <p class="product-price">$ 25</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)
}