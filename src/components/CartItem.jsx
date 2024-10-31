import React from "react";
import {useCart}  from "../context/CartContext";
import "../styles/cartitem.css";

const CartItem = ({ item }) => {

  const { removeFromCart } = useCart();
  const handleRemove = () => {
    removeFromCart(item.product.id);
  };
  const {product , quantity} = item;
  const totalPrice=product.price*quantity;
  return (
    <div className="cart-item">
      <img src={product.imageSrc} alt={product.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-name">{product.name}</h3>
        <p className="cart-item-price">${product.price}</p>
        <p className="cart-item-quantity">Quantity: {quantity}</p>
        <p className="cart-item-quantity">Total: ${totalPrice.toFixed(2)}</p>
      </div>
      <button className="remove-button" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
