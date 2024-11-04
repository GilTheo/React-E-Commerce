import React from "react"
import "./itemdetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({ product }) => {
  const { addProductInCart } = useContext(CartContext)

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count }

    addProductInCart(productCart)
  }

  return (
    <div className="item-detail-container">
      <div className="item-detail">
        <img src={product.image} />
        <div className="item-detail-content">
          <h2>{product.name}</h2>
          <p className="description">{product.description}</p>
          <p className="precio">Precio: ${product.price}</p>
          <ItemCount stock={product.stock} addProduct={addProduct} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
