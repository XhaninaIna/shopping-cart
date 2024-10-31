import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../styles/navbar.css";

const Navbar = () => {
  const { cartItems, toggleTheme, isDarkTheme} = useCart(); 
  const totalItems = cartItems ? cartItems.reduce((acc, item) => acc + item.quantity, 0) : 0; 

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"> MyShop</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart" className="cart-icon" aria-label="Go to cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="cart-count">{totalItems > 0 ? totalItems : 0}</span> 
          </Link>
        </li>
        <li>
          <button
            className="theme-switcher"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDarkTheme? "☀️": "🌙"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
