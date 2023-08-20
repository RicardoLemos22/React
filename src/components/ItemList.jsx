import { Link } from "react-router-dom"

export const ItemList = ({numero}) => {
    return (
        <>
        <div class="col-md-3">
            <div class="card producto-card">
                <img src={`https://ricardolemos22.github.io/React/assets/producto${numero}.jpg`} class="card-img-top" alt={`Producto ${numero}`} />
                <div class="card-body">
                <h5 class="card-title font-weight-bold">Producto {numero}</h5>
                <p class="card-text">Descripción breve del producto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div class="d-flex justify-content-between">
                    <Link to={`/item/${numero}`} class="btn btn-link">Ver Detalles</Link>
                    <span class="card-price font-weight-bold">$ 50</span>
                </div>
                </div>
            </div>        
        </div>
        </>
      )
}
