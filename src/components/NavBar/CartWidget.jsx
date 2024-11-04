import { FiShoppingCart } from "react-icons/fi"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CarWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to="/cart" className="cartwidget">
      <FiShoppingCart className="icon-cart" size={35} color="#EEE5E9" />
      <p className="cart-counter">{totalQuantity()}</p>
    </Link>
  )
}

export default CarWidget
