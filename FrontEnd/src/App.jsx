import React from "react";
import { ToastContainer } from "react-toastify";
import { Footer, Navbar } from "./Components";
import { Route, Routes } from "react-router-dom";
import {
  Auth,
  Cart,
  Collection,
  Home,
  Orders,
  ProductDetails,
  Products,
} from "./Pages";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route exact path="/auth" element={<Auth />} />
        <Route
          exact
          path="/product-details/:productId"
          element={<ProductDetails />}
        />
        <Route exact path="/category/:catId" element={<Collection />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}
