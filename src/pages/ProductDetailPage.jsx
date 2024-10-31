import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../data/data";
import { useCart } from '../context/CartContext';
import QuantityInput from "../components/QuantityInput";
import {useNavigate} from "react-router-dom";
import "../styles/productdetail.css";
const ProductDetailPage = () => {
  const navigate= useNavigate();
  const { id } = useParams();
  const product = productsData.find((item) => item.id === parseInt(id));
  const {cartItems, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  if (!product) return <div>Product not found!</div>;
  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };
  const handleBack=()=>{
    navigate("/");
  }
  return (
    <div className="product-detail">
      <h2> Product Detail</h2>
      <img
        src={product.imageSrc}
        alt={product.name}
        className="product-detail-image"
      />
      <div className="product-detail-info">
        <h2 className="product-detail-name">{product.name}</h2>
        <p className="product-detail-description">{product.description}</p>
        <p className="product-detail-price">${product.price.toFixed(2)}</p>
        <QuantityInput quantity={quantity} setQuantity={setQuantity} />
        <button onClick={handleAddToCart} className="add-to-cart-button">
          {" "}
          Add to Cart
        </button>
        <button onClick={handleBack}  className="back-to-cart-button" >Back</button>
      </div>
    </div>
  );
};
export default ProductDetailPage;
