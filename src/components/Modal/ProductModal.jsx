import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

const ProductModal = ({ isOpen, onClose, product }) => {
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (isOpen && product) {
        try {
          const response = await axios.get(
            `https://fakestoreapi.com/products/${product.id}`
          );
          setProductDetails(response.data);
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      }
    };

    fetchProductDetails();
  }, [isOpen, product]);

  if (!isOpen || !productDetails) return null;

  // Destructioning
  const { title, description, price, image, rating } = productDetails;
  const { rate, count } = rating;

  return (
    <div className="fixed inset-0 overflow-y-auto md:mx-0 flex items-center justify-center transition-opacity duration-300 backdrop-blur-md">
      <div className="flex items-center justify-center">
        <div className="bg-white my-auto p-2 md:p-6 mx-3 md:mx-5 rounded-lg border-2 border-amber-600">
          <div className="flex items-center justify-end">
            <button
              className="cursor-pointer w-fit bg-amber-300 p-1 hover:scale-95 transition-transform shadow-md rounded-md text-amber-600"
              onClick={onClose}
            >
              <AiOutlineClose size={24} />
            </button>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <div className="flex items-center justify-center md:justify-start">
                <img
                  src={image}
                  alt={title}
                  className="mx-auto md:h-auto mix-blend-multiply md:max-h-80 md:object-contain h-20"
                />
              </div>
            </div>
            <div className="md:w-2/3 flex flex-col items-center md:p-6">
              <h3 className="md:text-xl font-Robo text-amber-700 font-semibold mb-2">
                {title}
              </h3>

              <div className="md:w-3/4 md:h-3/4 flex text-center items-center">
                <p className="text-amber-500 text my-2 text-sm md:text-base font-Jakarta mb-4">
                  {description}
                </p>
              </div>
              <div className="flex flex-col gap-2 justify-start w-full m-auto items-start">
                <p className="text-amber-600 mb-2 align-middle font-semibold md:text-xl font-Jakarta flex items-center justify-center">
                  Price <span className="ml-2 font-Robo text-amber-300"> $ {price}</span>
                </p>
                <p className="text-amber-600 mb-2 align-middle font-semibold md:text-xl font-Jakarta flex items-center justify-center">
                  Rating<span className="mx-1 font-Robo text-amber-300"> {rate} </span>
                  <FaStar color="gold" />
                </p>
                <p className="text-amber-600 mb-2 align-middle font-semibold md:text-xl font-Jakarta flex items-center justify-center">
                  Reviewed by
                  <span className="ml-1 font-Robo text-amber-300"> {count}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
