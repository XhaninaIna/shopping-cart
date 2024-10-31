import React from "react";
import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext"; 
import "../styles/cartpage.css";

const CartPage = () => {
  const { cartItems, totalAmount } = useCart(); 
  console.log(cartItems);

  return (
    <div className="cart-page">
      <h2 className="cart-title">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>
      )}
      <div className="cart-summary">
        <h3 className="total-amount">Total: ${totalAmount.toFixed(2)}</h3>
        
      </div>
    </div>
  );
};

export default CartPage;
