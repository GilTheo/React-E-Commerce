import { createContext, useState } from "react"
import React from "react"

const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addProductInCart = (newProduct) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((product) => product.id === newProduct.id)

      if (existingProduct) {
        const updatedQuantity = existingProduct.quantity + newProduct.quantity
        if (updatedQuantity > newProduct.stock) {
          return prevCart
        } else {
          return prevCart.map((product) => (product.id === newProduct.id ? { ...product, quantity: updatedQuantity } : product))
        }
      } else {
        if (newProduct.quantity <= newProduct.stock) {
          return [...prevCart, newProduct]
        }
        return prevCart
      }
    })
  }

  const totalQuantity = () => {
    const quantity = cart.reduce((total, productCart) => total + productCart.quantity, 0)
    return quantity
  }

  const totalPrice = () => {
    const price = cart.reduce((total, productCart) => total + productCart.quantity * productCart.price, 0)
    return price
  }

  const deleteProductById = (idProduct) => {
    const filteredProducts = cart.filter((productCart) => productCart.id !== idProduct)
    setCart(filteredProducts)
  }

  const deleteCart = () => {
    setCart([])
  }

  const updateProductQuantity = (id, quantity) => {
    setCart((prevCart) => prevCart.map((product) => (product.id === id ? { ...product, quantity } : product)))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductInCart,
        totalQuantity,
        totalPrice,
        deleteProductById,
        deleteCart,
        updateProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext }
