import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./itemlistcontainer.css"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db.js"
import ItemList from "../ItemList/ItemList.jsx"

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([])
  const { idCategory } = useParams()

  const getProducts = () => {
    const productsRef = collection(db, "products")
    getDocs(productsRef)
      // formateamos correctamente los productos
      .then((dataDb) => {
        const productsDb = dataDb.docs.map((productDb) => {
          return { id: productDb.id, ...productDb.data() }
        })

        setProducts(productsDb)
      })
  }

  const getProductsByCategory = () => {
    const productsRef = collection(db, "products")
    const queryCategories = query(productsRef, where("category", "==", idCategory))
    getDocs(queryCategories)
      // volvemos a formatear la data
      .then((dataDb) => {
        const productsDb = dataDb.docs.map((productDb) => {
          return { id: productDb.id, ...productDb.data() }
        })
        setProducts(productsDb)
      })
  }

  useEffect(() => {
    if (idCategory) {
      getProductsByCategory()
    } else {
      getProducts()
    }
  }, [idCategory])

  return (
    <div className="max-width">
      <h2 className="title">{title}</h2>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
