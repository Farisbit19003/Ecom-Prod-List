import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="flex md:p-2 items-center justify-between bg-amber-400">
        <Link to="/" className="flex items-center">
          <p className="font-semibold flex items-center font-Robo text-amber-700 text-3xl">
            Style Haven
          </p>
        </Link>
        <Link
          to="/checkout"
          className="flex items-center hover:scale-95 transition-transform text-amber-700"
        >
          <AiOutlineShoppingCart size={29} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
