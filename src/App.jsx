import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
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

       <ToastContainer/>
       
    </React.Fragment>
  );
}

export default App;
