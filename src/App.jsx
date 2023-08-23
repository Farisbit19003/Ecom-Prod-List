import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // Import the ToastContainer component
import "react-toastify/dist/ReactToastify.css"; // Import the styles
import AllProducts from "./components/AllProducts/AllProducts";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <React.Fragment>
      <Header />

      {/* Routes setup */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />

      {/* Add the ToastContainer */}
      <ToastContainer
        position="top-right"
        autoClose={1000} 
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </React.Fragment>
  );
}

export default App;
