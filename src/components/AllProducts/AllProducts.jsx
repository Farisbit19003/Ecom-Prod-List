import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { BsShopWindow } from "react-icons/bs";
import { FaSpinner } from "react-icons/fa";
import { useCart } from "../CartContext";
import ProductModal from "../Modal/ProductModal";
import Category from "./Category";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { dispatch } = useCart();

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
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
            <div className="flex flex-row justify-between p-1">
              <h2 className="text-2xl text-amber-700 font-Robo font-semibold">
                All Products
              </h2>
              <div className="transition-transform whitespace-nowrap p-2 shadow-md rounded-md w-fit  h-fit hover:scale-95 flex flex-row gap-1 border text-amber-300 bg-amber-700 ">
                <Link to="/">
                  <BsShopWindow size={24} />
                </Link>
              </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <li
                  key={product.id}
                  className="bg-amber-100 p-4 shadow-lg rounded-lg"
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
                    className="mx-auto h-24 w-24 mb-2 mix-blend-multiply"
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
