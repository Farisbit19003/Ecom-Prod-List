import React, { useState } from "react";
import CartTable from "./CartTable";
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {

  //Setting the State to local Storage 
  const [cart, setCart] = useState(getCartFromLocalStorage());
  //handle any change 
  const handleCartChange = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-semibold text-amber-300 mb-4">Checkout</h2>
      <CartTable cart={cart} handleCartChange={handleCartChange} />
      <CheckoutForm />
    </div>
  );
};

export default Checkout;

//GETTING FFROM LOCAL STORAGE
function getCartFromLocalStorage() {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
}
