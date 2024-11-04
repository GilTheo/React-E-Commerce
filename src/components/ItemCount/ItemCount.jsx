import React from "react"
import { useState } from "react"
import "./itemcount.css"

const ItemCount = ({ stock, addProduct }) => {
  const [count, setCount] = useState(1)

  const handleClickRest = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const handleClickAdd = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }
  return (
    <>
      <div className="detail-counter-container">
        <button className="counter-button" onClick={handleClickRest}>
          -
        </button>
        <p className="counter-display">{count}</p>
        <button className="counter-button" onClick={handleClickAdd}>
          +
        </button>
      </div>
      <div>
        <button className="add-to-cart-button" onClick={() => addProduct(count)}>
          Agregar al carrito
        </button>
      </div>
    </>
  )
}

export default ItemCount
