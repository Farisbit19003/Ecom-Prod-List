import React from "react";
import { BsShopWindow } from "react-icons/bs";
import { Link } from "react-router-dom";
import CartTable from "./CartTable";
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
  
 return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="flex flex-row justify-between items-center w-full">
        <h2 className="md:text-3xl text-lg font-semibold  text-amber-300 mb-4">
          Checkout
        </h2>
        <div className="transition-transform whitespace-nowrap p-2 shadow-md rounded-md w-fit mb-2 h-fit hover:scale-95 flex justify-end items-center flex-row gap-1 border text-amber-300 bg-amber-700 ">
          <Link to="/">
            <BsShopWindow size={24} />
          </Link>
        </div>
      </div>
      <CartTable/>
      <CheckoutForm />
    </div>
  );
};

export default Checkout;
