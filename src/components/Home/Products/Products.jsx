import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";
import ProductModal from "../../Modal/ProductModal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  //Add to Cart
  const addToCart = (product) => {
    // Check if the product is already in the cart
    const productIndex = cart.findIndex((item) => item.id === product.id);

    if (productIndex !== -1) {
      // If the product is already in the cart, update its quantity
      const updatedCart = cart.map((item, index) => {
        if (index === productIndex) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  useEffect(() => {
    // Introduce a delay of 1.5 seconds before showing the loading spinner
    const loadingDelay = setTimeout(() => {
      setIsLoading(true);
    }, 1500);
    //Fetching just 6 Products
    axios
      .get("https://fakestoreapi.com/products?limit=6")
      .then((response) => {
        clearTimeout(loadingDelay);
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        clearTimeout(loadingDelay);
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, []);
  //Modal
  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="text-center p-2">
      <h2 className="text-2xl text-amber-700 font-Robo font-semibold mb-4">
        Top Products
      </h2>
      {/* SHOW SPINNER */}
      {isLoading ? (
        <div className="flex justify-center items-center h-32">
          <FaSpinner className="animate-spin text-amber-600" size={48} />
        </div>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <li
              key={product.id}
              className="bg-amber-100 p-4 shadow-md rounded-md"
            >
              <div className="flex justify-between items-center text-amber-300">
                <div
                  className="p-2 shadow-md bg-amber-600 rounded-md transition-transform hover:scale-95 cursor-pointer"
                  onClick={() => openModal(product)}
                >
                  <AiOutlineEye
                    size={24}
                    className="align-middle transition-transform hover:scale-95"
                  />
                </div>
                <div
                  className="p-2 shadow-md bg-amber-600 rounded-md transition-transform hover:scale-95 cursor-pointer"
                  onClick={() => {
                    addToCart(product);
                  }}
                >
                  <AiOutlineShoppingCart
                    size={24}
                    className="align-middle transition-transform hover:scale-95"
                  />
                </div>
              </div>
              <img
                src={product.image}
                alt={product.title}
                className="mx-auto h-24 w-24 mb-2"
              />
              <p className="text-lg font-Jakarta text-amber-600 font-semibold">
                {product.title}
              </p>
              <p className="text-amber-500 font-Robo text-lg">
                ${product.price}
              </p>
            </li>
          ))}
        </ul>
      )}
      {/* MODAL */}
      <ProductModal
        isOpen={selectedProduct !== null}
        onClose={closeModal}
        product={selectedProduct}
      />
    </div>
  );
};

export default Products;
