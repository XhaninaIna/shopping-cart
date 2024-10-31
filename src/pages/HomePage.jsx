import React from "react";
import { productsData } from "../data/data";
import ProductCard from "../components/ProductCard";
import "../styles/homepage.css"; 

export default function HomePage() {
  return (
    <>
    <h4 style={{textAlign:"center"}}>OUR PRODUCTS</h4>
    <div className="product-grid">
      {productsData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </>
  );
}
