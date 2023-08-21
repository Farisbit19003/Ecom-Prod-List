import React from "react";
import Hero from "./Hero/Hero";
import Products from "./Products/Products";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* HERO COMPONENT */}
      <Hero />
      {/* JUST 6 PRODUCTS */}
      <Products />
      {/* BUTTON TO SHOW ALL PRODUCTS */}
      <div className="flex items-center justify-center">
        <button className="hover:scale-95 transition-transform text-lg text-amber-300 hover:text-white  font-semibold my-2 shadow-md bg-amber-600 p-4 rounded-md">
          <Link to="/all-products">View All Products</Link>
        </button>
      </div>
    </>
  );
};

export default Home;
