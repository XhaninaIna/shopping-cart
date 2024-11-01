import React from "react";
import "../styles/quantityinput.css";

const QuantityInput = ({ quantity, setQuantity }) => {
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="quantity">
        <button onClick={handleDecrease} className="quantity-button">
          -
        </button>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="quantity-field"
        />
        <button onClick={handleIncrease} className="quantity-button">
          +
        </button>
      </div>
    </>
  );
};

export default QuantityInput;
