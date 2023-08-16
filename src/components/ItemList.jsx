
export const ItemList = () => {
    return (
        <>
        <div class="col-md-3">
            <div class="card producto-card">
                <img src="./assets/producto1.jpg" class="card-img-top" alt="Producto 1" />
                <div class="card-body">
                <h5 class="card-title font-weight-bold">Producto 1</h5>
                <p class="card-text">Descripción breve del producto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div class="d-flex justify-content-between">
                    <a href="#" class="btn btn-link">Ver Detalles</a>
                    <span class="card-price font-weight-bold">$ 50</span>
                </div>
                </div>
            </div>        
        </div>
        </>
      )
}
