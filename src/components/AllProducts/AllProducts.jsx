import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";
import ProductModal from "../Modal/ProductModal";
import Category from "./Category";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  //Store in local Storage
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
  //Modal
  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  //Loading and Fetching
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        // Fetch categories and set them in state
        const categoriesResponse = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(["all", ...categoriesResponse.data]);

        // Fetch products and set them in state
        const productsResponse = await axios.get(
          "https://fakestoreapi.com/products"
        );
        setProducts(productsResponse.data);

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    // Simulate a loading delay
    const loadingTimeout = setTimeout(() => {
      fetchData();
    }, 1);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="flex flex-col md:flex-row p-4">
      {/* SHOW SPINNER */}
      {isLoading ? (
        <div className="flex justify-center w-full items-center h-screen">
          <FaSpinner className="animate-spin text-amber-600" size={75} />
        </div>
      ) : (
        <>
          <Category
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryClick={setSelectedCategory}
          />

          <div className="ml-4 flex-1">
            <h2 className="text-2xl text-amber-700 font-Robo font-semibold mb-4">
              All Products
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
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
            {/* OPEN MODAL */}
            <ProductModal
              isOpen={selectedProduct !== null}
              onClose={closeModal}
              product={selectedProduct}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AllProducts;
