import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem("cart"); //empty the cart
    navigate("/");  // Redirect to home page
  };

  return (
    <form className="w-full mt-4" onSubmit={handleSubmit}>
      <h3 className="text-lg text-amber-300 font-Jakarta  font-semibold mb-2">
        Billing Information
      </h3>
      <div className="mb-4">
        {/* NAME */}
        <label className="block text-sm font-medium text-amber-700">Name</label>
        <input
          type="text"
          className="mt-1 block w-1/2 p-2 rounded-md shadow-sm  focus:ring-2 focus:ring-amber-700 border-2 border-amber-300 outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      {/* CONTACT NO# */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-amber-700">Contact No</label>
        <input
          type="tel"
          className="mt-1 block w-1/2 p-2 rounded-md shadow-sm  focus:ring-2 focus:ring-amber-700 border-2 border-amber-300 outline-none"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
      </div>
      {/* EMAIL */}
      <div className="mb-4">
        <label className="block  text-sm font-medium text-amber-700">
          Email Address
        </label>
        <input
          type="email"
          className="mt-1 p-2 block w-1/2 rounded-md shadow-sm focus:ring-2 focus:ring-amber-700 border-2 border-amber-300 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      {/* ADDRESS */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-amber-700">
          Address
        </label>
        <textarea
          className="mt-1 p-2 block w-1/2 rounded-md shadow-sm focus:ring-2 focus:ring-amber-700 border-2 border-amber-300  outline-none"
          rows="2"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      {/* BUTTON TO GO BACK TO HOME AND CLEAR THE LOCAL STORAGE */}
      <button
        type="submit"
        className="bg-amber-500 transition-transform hover:scale-95 text-white font-semibold py-2 px-4 rounded"
      >
        Proceed to Checkout
      </button>
    </form>
  );
};

export default CheckoutForm;
