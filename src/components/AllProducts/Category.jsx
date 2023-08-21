import React from "react";

const Category = ({ categories, selectedCategory, onCategoryClick }) => {
  return (
    <div className="bg-amber-100 p-4 h-fit rounded-md">
      <h2 className="text-lg font-semibold text-amber-700 mb-4">Categories</h2>
      <div className="flex md:flex-col space-y-2 flex-row md:space-y-0 space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`md:text-lg text-xs font-semibold text-start capitalize  ${
              selectedCategory === category
                ? "text-amber-700"
                : "text-gray-600 hover:text-amber-700"
            }`}
            onClick={() => onCategoryClick(category)}
          >
            {category === "all" ? "All" : category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
