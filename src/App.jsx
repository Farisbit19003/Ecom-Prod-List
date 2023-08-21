import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AllProducts from "./components/AllProducts/AllProducts";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {

  const [cart, setCart] = useState([]);
  
  const handleAddToCart = (updatedCart) => {
    setCart(updatedCart);
  };

  return (
    <React.Fragment>
      <Header />

      {/* Routes setup */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} handleAddToCart={handleAddToCart} />}
        />
      </Routes>

      <Footer />
    </React.Fragment>
  );
}

export default App;
