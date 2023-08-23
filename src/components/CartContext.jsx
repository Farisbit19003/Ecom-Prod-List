import React, { createContext, useContext, useReducer } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

const initialState = { cart: [] };

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const productIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (productIndex !== -1) {
        toast.error("Product is already in the cart..!!");
       return state;
      } else {
        const updatedCart = [...state.cart, { ...action.payload, quantity: 1 }];
        localStorage.setItem("cart", JSON.stringify(updatedCart)); 
        return {
          ...state,
          cart: updatedCart,
        };
      }

    case "SET_CART":
      localStorage.setItem("cart", JSON.stringify(action.payload));
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
