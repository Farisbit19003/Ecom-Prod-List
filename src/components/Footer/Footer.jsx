import React, { useState } from "react";
import { AiOutlineCopyrightCircle, AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollVisibility = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  window.addEventListener("scroll", handleScrollVisibility);

  return (
    <footer>
      <div className="flex p-2 items-center justify-between bg-amber-400">
        <div className="flex flex-row p-2 gap-2">
          <p className="font-semibold flex gap-2 items-center font-Robo text-amber-700 text-xl md:text-3xl">
            Style Haven
          </p>
          <p className="font-medium flex items-center gap-1 justify-center font-Robo text-amber-700 text-xl md:text-2xl">
            <AiOutlineCopyrightCircle className="align-middle" /> 2023
          </p>
        </div>
        {showScrollButton && (
          <div
            onClick={handleScroll}
            className="cursor-pointer shadow-2xl transition-transform hover:scale-95 rounded-full p-2 bg-amber-300 text-amber-700 hover:text-amber-900"
          >
            <AiOutlineArrowUp size={24} />
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
