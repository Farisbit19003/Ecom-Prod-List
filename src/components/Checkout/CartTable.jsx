import React from "react";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCart } from "../CartContext";

const CartTable = () => {

  const { state, dispatch } = useCart(); // Access the cart state and dispatch action
  const cart = state?.cart;

  const handleQuantityChange = (product, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item?.id === product?.id ? { ...item, quantity: newQuantity } : item
    );
    dispatch({ type: "SET_CART", payload: updatedCart }); // Dispatch the updated cart data
  };

  const handleIncrement = (product) => {
    handleQuantityChange(product, product?.quantity + 1);
  };

  const handleDecrement = (product) => {
    if (product.quantity > 1) {
      handleQuantityChange(product, product?.quantity - 1);
    }
  };
  //DELETING THE ITEM
   const handleDelete = (product) => {
    const updatedCart = cart?.filter((item) => item?.id !== product?.id);
    dispatch({ type: "SET_CART", payload: updatedCart }); // Dispatch the updated cart data
  };
  //TOTAL PURCHASE PRICE
  const total = cart?.reduce((total, product) => {
    return total + product?.price * product?.quantity;
  }, 0);
  
  
  return (
    <>
      <div className=" mx-auto mt-2 h-fit w-full">
        <div className="flex flex-row justify-center items-center mx-2 my-2">
          <p className="flex font-sans text-amber-300 font-semibold text-lg ">
            Cart Items
          </p>
        </div>

        {cart?.length === 0 ? (
          <div className="text-center mt-4">
            <p className="text-lg text-amber-700  font-Robo">
              Your cart is currently empty.
            </p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto overflow-hidden flex flex-col  border-2 border-amber-700 justify-center">
              <table className="mx-2 my-2 whitespace-nowrap rounded  font-sans shadow-lg">
                <thead>
                  <tr className="border-b font-Jakarta  border-amber-700 text-amber-700">
                    <th className="p-2">Product</th>
                    <th className="p-2">Price</th>
                    <th className="p-2">Quantity</th>
                    <th className="p-2">Total</th>
                    <th className="p-2">Actions</th>
                  </tr>
                </thead>
                <tbody className="font-Robo">
                  {cart?.map((product) => (
                    <tr
                      key={product?.id}
                      className="border-b hover:bg-amber-200 border-amber-700 text-center"
                    >
                      <td className="p-2">{product?.title}</td>
                      <td className="p-2">${product?.price}</td>
                      <td className="p-2 gap-2 flex justify-center">
                        <button
                          className="bg-amber-700 text-amber-300 p-1 transition-transform hover:scale-95 rounded-md shadow-md"
                          onClick={() => handleDecrement(product)}
                        >
                          <AiOutlineMinus />
                        </button>
                        <span>{product?.quantity}</span>
                        <button
                          className="bg-amber-700 text-amber-300 p-1 transition-transform hover:scale-95 rounded-md shadow-md"
                          onClick={() => handleIncrement(product)}
                        >
                          <AiOutlinePlus />
                        </button>
                      </td>
                      <td className="p-2">
                      ${(product?.price * product?.quantity).toFixed(2)}
                      </td>
                      <td>
                        <button
                          className="bg-amber-700 text-amber-300 p-1 w-fit transition-transform hover:scale-95 rounded-md shadow-md"
                          onClick={() => handleDelete(product)}
                        >
                          <AiOutlineDelete size={24} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
        <div className="mt-4 flex w-full items-center justify-end">
          <p className="text-lg border-2 border-amber-700 p-2 text-amber-400 font-Robo font-semibold">
            {/* ROUND OFF TO 2 DECIMAL PLACES */}
            Total: ${total?.toFixed(2)}
          </p>
        </div>
      </div>
    </>
  );
};

export default CartTable;
