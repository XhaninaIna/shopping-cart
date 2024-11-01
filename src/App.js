// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/theme.css";
const App = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <AppRoutes />
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
