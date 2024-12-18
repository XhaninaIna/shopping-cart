import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import QuantityInput from "./QuantityInput";
import "../styles/productcard.css";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };
  const handleNavigateToDetail = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card">
      <img
        src={product.imageSrc}
        alt={product.name}
        className="product-image"
        onClick={handleNavigateToDetail}
      />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <div className="product-actions">
        <QuantityInput
          quantity={quantity}
          setQuantity={setQuantity}
          productId={product.id}
        />
        <button onClick={handleAddToCart} className="add-to-cart-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
