import React from "react";
import { ToastContainer } from "react-toastify";
import { Footer, Hero, Navbar } from "./Components";
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
      <main className="min-h-screen">
        <Hero />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/product-details/:productId"
            element={<ProductDetails />}
          />
          <Route path="/category/:catId" element={<Collection />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}
