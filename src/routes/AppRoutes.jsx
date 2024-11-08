import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage";
import ProgrammingLanguagesPage from "../pages/ProgrammingLanguagesPage";
import ToggleApiPage from "../pages/ToggleApiPage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route
        path="/programming-languages"
        element={<ProgrammingLanguagesPage />}
      />
      <Route path="/toggle-api" element={<ToggleApiPage />} />
    </Routes>
  );
};

export default AppRoutes;
