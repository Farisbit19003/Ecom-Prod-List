import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex bg-[url(https://res.cloudinary.com/dc367rgig/image/upload/v1692358879/pexels-mart-production-7679659_do4lnk.jpg)] h-screen bg-center bg-fixed bg-cover bg-no-repeat items-center  justify-start bg-amber-300 text-start">
        <div className="flex flex-col text-white font-semibold p-3 gap-3">
          <span className="font-Robo text-xl md:text-3xl animate-fade-in-left">
            Welcome to Style Haven!
          </span>
          <p className="font-Jakarta md:text-lg animate-fade-in-right leading-10">
            Discover a world of fashion and elegance where your unique style
            takes center stage. From trendy ensembles to timeless classics, we
            curate the finest collection of clothing that speaks volumes about
            your personality. Whether you're seeking the latest trends or
            searching for that perfect statement piece, Style Haven is your
            ultimate destination for all things fashion. Explore our curated
            selections, embrace your individuality, and let your style shine.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
