import React from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { RxCross2 } from "react-icons/rx"
import "./cart.css"

const Cart = () => {
  const { cart, deleteProductById, deleteCart, totalPrice, updateProductQuantity } = useContext(CartContext)

  const handleDecrease = (productCart) => {
    if (productCart.quantity > 1) {
      updateProductQuantity(productCart.id, productCart.quantity - 1)
    }
  }

  const handleIncrease = (productCart) => {
    if (productCart.quantity < productCart.stock) {
      updateProductQuantity(productCart.id, productCart.quantity + 1)
    }
  }

  return (
    <div>
      <h2 className="title">Productos en el Carrito</h2>
      <div className="cart-container">
        {cart.map((productCart) => (
          <div key={productCart.id} className="cart-content">
            <img src={productCart.image} />
            <p className="product-name">{productCart.name}</p>
            <div className="counter-container">
              <button onClick={() => handleDecrease(productCart)}>-</button>
              <p>{productCart.quantity}</p>
              <button onClick={() => handleIncrease(productCart)}>+</button>
            </div>
            <p>
              Precio c/u: <span className="cart-prices">${productCart.price}</span>
            </p>
            <p>
              Precio parcial: <span className="cart-prices">${productCart.quantity * productCart.price}</span>
            </p>
            <RxCross2 className="elim-btn" onClick={() => deleteProductById(productCart.id)} />
          </div>
        ))}
        <div className="total-cart">
          <p>
            Precio total: <span className="cart-prices">${totalPrice()}</span>
          </p>
          <button onClick={deleteCart}>Vaciar Carrito</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
