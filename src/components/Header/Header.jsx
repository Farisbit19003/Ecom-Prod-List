import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="flex md:p-2  items-center justify-between bg-amber-400">
        <Link to="/" className="flex items-center">
          <p className="font-semibold ml-1 flex items-center font-Robo text-amber-700 text-3xl">
            Style Haven
          </p>
        </Link>
        <Link
          to="/checkout"
          className="flex items-center mr-1 hover:scale-95 transition-transform text-amber-700"
        >
          <AiOutlineShoppingCart size={29} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
