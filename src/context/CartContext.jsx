
import React, { createContext, useContext, useState, useEffect } from 'react';
const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme]=useState(false);
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);
  
  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find(item => item.product.id === product.id);
      if (itemExists) {
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      return [...prevItems, { product, quantity }];
    });
  };
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.product.id !== id));
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalAmount, isDarkTheme,toggleTheme }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  return useContext(CartContext);
};
