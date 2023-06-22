import React from "react";

import { FcClearFilters } from "react-icons/fc";

export const MenFilter = () => {
  const categories = ["Clothing", "Shoes", "Accessories"];
  const priceRanges = ["Under $50", "$50 - $100", "$100 - $200", "Over $200"];
  const brands = ["Nike", "Adidas", "Puma", "Reebok", "Vans"];
  return (
    <div className="w-72 py-6 rounded-lg  mb-6 pb-6">
      <div className="flex flex-col gap-3">
        <div class="flex text-4xl font-semibold my-4 md:my-3 justify-between">
          Filters
          <FcClearFilters />
        </div>
        <hr class="w-full border border-black dark:border-white"></hr>
        <div className="border-b-[1px] border-[#e6e6e6e] mt-3 mx-6">
          <h3 className="text-xl font-semibold mb-2">Category</h3>
          <ul className="m-4">
            {categories.map((category, index) => (
              <li key={index} className="mb-2 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  className="mr-2 leading-tight"
                  id={`category-${index}`}
                />
                <label
                  class="text-black font-medium text-base"
                  htmlFor={`category-${index}`}
                >
                  {category}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-b-[1px] border-[#e6e6e6e] mt-3 mx-6">
          <h3 className="text-xl font-semibold mb-2">Price Range</h3>
          <ul className="m-4">
            {priceRanges.map((range, index) => (
              <li key={index} className="mb-2 cursor-pointer">
                <input
                  type="radio"
                  name="price-range"
                  className="mr-2 leading-tight"
                  id={`price-range-${index}`}
                />
                <label
                  class="text-black font-medium text-base"
                  htmlFor={`price-range-${index}`}
                >
                  {range}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-b-[1px] border-[#e6e6e6e] mt-3 mx-6">
          <h3 className="text-xl font-semibold mb-2">Brand</h3>
          <ul className="m-4">
            {brands.map((brand, index) => (
              <li key={index} className="mb-2 cursor-pointer">
                <input
                  type="radio"
                  name="brand"
                  className="mr-2 leading-tight"
                  id={`brand-${index}`}
                />
                <label
                  class="text-black font-medium text-base"
                  htmlFor={`brand-${index}`}
                >
                  {brand}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
