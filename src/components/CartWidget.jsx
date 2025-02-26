import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-widget">
      🛒 <span>{totalQuantity}</span>
    </Link>
  );
};

export default CartWidget;
