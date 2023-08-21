import {React, useEffect, useState } from "react"

export const ArticulosList = () => {
  const [articulos, setArticulos] = useState([])

  useEffect(() => {
    async function fetchArticulos() {
      try {
        const response = await fetch('../assets/articulos.json')
        const data = await response.json()
        setArticulos(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchArticulos()
  }, [])

  return (
    <div>
      {articulos.map((articulo) => (
        <p key={articulo.id}>Descripción id: {articulo.id}, es: {articulo.descripcion}</p>
      ))}
    </div>
  )
}

//export default ArticulosList
