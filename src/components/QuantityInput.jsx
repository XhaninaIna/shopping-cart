import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/quantityinput.css";

const QuantityInput = ({ productId }) => {
  const { quantities, setQuantity } = useCart();
  const quantity = quantities[productId] || 1;

  const handleIncrease = () => setQuantity(productId, quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(productId, quantity - 1);
  };

  return (
    <div className="quantity">
      <button onClick={handleDecrease} className="quantity-button">
        -
      </button>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(productId, Number(e.target.value))}
        className="quantity-field"
      />
      <button onClick={handleIncrease} className="quantity-button">
        +
      </button>
    </div>
  );
};

export default QuantityInput;
