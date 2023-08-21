import {ItemList} from "../components/ItemList.jsx"
//import {Link} from "react-router-dom"
import {React, useEffect, useState } from 'react'
import datosJSON from "../assets/articulos.json"

const Texto = ({ greeting }) => <h2>{greeting}</h2>

export const ItemListContainer = ({greeting}) => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    async function fetchArticulos() {
      try {
        const response = await fetch(datosJSON)
        const data = await response.json()
        setArticulos(data)
      } catch (error) {
        console.error('Error leyendo archivo local. Info: ', error)
      }
    }

    fetchArticulos()
  }, [])
  
    return (
        <>
        {
          <Texto greeting={greeting}></Texto>
          
        }
        <div class="row">
          {articulos.map((articulo) => (
          <ItemList numero={articulo.id}></ItemList>
          ))}
        </div>
      </>
      )
}

