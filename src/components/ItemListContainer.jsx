import React from 'react'
import {ItemList} from '../components/ItemList.jsx'
import productos from "./productos.json"

const Texto = ({ greeting }) => <h2>{greeting}</h2>

export const ItemListContainer = ({greeting,categoria}) => {

    const listaProd = () => {
      if (categoria === "") {
        return productos.map(art => (
          <>
          <ItemList key={art.id} numero={art.id}></ItemList>
          </>
        ));
      } else {
        return productos
          .filter(art => art.idCategoria === categoria)
          .map(art => (
            <>
            <ItemList key={art.id} numero={art.id}></ItemList>
            </>
          ));
      }
    }
    
  return (
        <>
        {
          <Texto greeting={greeting}></Texto>
        }
        <div class="row">
          {listaProd()}
        </div>
      </>
      )
}