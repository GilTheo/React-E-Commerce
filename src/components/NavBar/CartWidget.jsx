import { FiShoppingCart } from "react-icons/fi";

const CarWidget = () => {
  return (
    <div className="cartwidget">
      <FiShoppingCart className="icon-cart" size={35} color="#EEE5E9" />
      <p className="cart-counter">0</p>
    </div>
  );
};

export default CarWidget;
