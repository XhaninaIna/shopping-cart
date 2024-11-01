import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productsData } from "../data/data";
import { useCart } from "../context/CartContext";
import QuantityInput from "../components/QuantityInput";
import "../styles/productdetail.css";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = productsData.find((item) => item.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) return <div>Product not found!</div>;

  const handleAddToCart = () => addToCart(product);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="product-detail">
      <h2>Product Detail</h2>
      <img
        src={product.imageSrc}
        alt={product.name}
        className="product-detail-image"
      />
      <div className="product-detail-info">
        <h2 className="product-detail-name">{product.name}</h2>
        <p className="product-detail-description">{product.description}</p>
        <p className="product-detail-price">${product.price.toFixed(2)}</p>
        <QuantityInput productId={product.id} />
        <button onClick={handleAddToCart} className="add-to-cart-button">
          Add to Cart
        </button>
        <button onClick={handleBack} className="back-to-cart-button">
          Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
