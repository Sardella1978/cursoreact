import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {db} from "../firebase";
import {getDocs, collection, query, where} from "firebase/firestore"

function ItemListContainer () {

const [items, setItems] = useState ([])
const {categoryId} = useParams ()
const [loading, setLoading] = useState()

useEffect(() => {

  if (categoryId) {
    const collectionProductos = collection(db, "Productos")
    const filtroDeLaConsulta = query(collectionProductos, where("categoryId", "==", "velas"))
    console.log (filtroDeLaConsulta)
    const consulta = getDocs(filtroDeLaConsulta)

    consulta
      .then((resultado) => {
        const productos_mapeados = resultado.docs.map(referencia => {
          const aux = referencia.data()
          aux.id = referencia.id
          return aux
        })
        setItems(productos_mapeados)
        setLoading(false)

      })
      .catch((error) => {
        console.log(error)
      })
    }
   
    else {

    const collectionProductos = collection(db, "Productos")
    const consulta = getDocs(collectionProductos)

    consulta
      .then((resultado) => {
        const productos_mapeados = resultado.docs.map(referencia => {
          const aux = referencia.data()
          aux.id = referencia.id
          return aux
        })
        setItems(productos_mapeados)
        setLoading(false)

      })
      .catch((error) => {
        console.log(error)
      })
  }

}, [categoryId])

  
  return (
    
    <>
      <h2>Catálogo de productos</h2>
      <div className="ItemListContainer">
      <ItemList productos={items}/>
      </div>
    </>
  )
  }
  export default ItemListContainer   