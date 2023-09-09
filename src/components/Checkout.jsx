//npm install react-hook-form

import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useForm } from 'react-hook-form'
import { collection, addDoc } from "firebase/firestore"
import { db } from '../firebase/client'

const Checkout = () => {

    
    const [pedidoId, setPedidoId] = useState("")

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const { register, handleSubmit } = useForm()

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        // console.log(pedido)

        const pedidosRef = collection(db, "pedidos")

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id)
                vaciarCarrito()
            })

    }

    if (pedidoId) {
        return (
            <div className="container">
                <h2 className="main-title">Muchas gracias por tu compra</h2>
                <br />
                <p className="product-category">Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }

  return (
    <div className="container">
        <h1 className="main-title">Finalizar compra</h1>
        <form className="formulario" onSubmit={handleSubmit(comprar)}>

            <input type="text" placeholder="Complete su nombre" {...register("nombre")} />
            <input type="email" placeholder="Complete su e-mail" {...register("email")} />
            <input type="email" placeholder="Repita su e-mail"  />

            <button className="enviar" type="submit">Comprar</button>

        </form>
    </div>
  )
}

export default Checkout