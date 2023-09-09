import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/client";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const categoria = useParams().categoria;
    //const [titulo] = useState("Catálogo completo de Productos");
    const [titulo, setTitulo] = useState((categoria || "") === "" ? "Catálogo completo de Productos" : "Catálogo de " + categoria);
    


    useEffect(() => {

      const productosRef = collection(db, "productos");
      const q = categoria ? query(productosRef, where("idCategoria", "==", categoria)) : productosRef;

      getDocs(q)
        .then((resp) => {

          setProductos(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })
          )
        })
        
    }, [categoria])
    
    
  return (
    <div>
        <ItemList productos={productos} titulo={titulo} />
    </div>
  )
}

export default ItemListContainer