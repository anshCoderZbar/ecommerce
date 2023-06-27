import { useRouter } from "next/router";
import React from "react";

import { BiHeart } from "react-icons/bi";

export const ProductCard = ({ product }) => {
  const router = useRouter();
  return (
    <div className="w-full bg-white dark:bg-dark-background cursor-pointer shadow-md rounded-xl duration-500  hover:shadow-xl">
      <div
        onClick={() =>
          router.push(`/men/${product?.title?.replaceAll(" ", "_")}`)
        }
      >
        <div className="rounded-md flex justify-center overflow-hidden">
          <img
            src={product?.image}
            alt="Product"
            className="w-44 h-44 rounded-md sm:h-48 sm:w-48 md:h-48 md:w-48 lg:h-60 lg:w-72 xl:w-72 xl:h-60 bg-white dark:bg-dark-background  transition-all hover:scale-110"
          />
        </div>
        <div className="px-4 py-3">
          <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
          <p className="text-lg font-bold  truncate block capitalize">
            {product.title}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold  cursor-auto my-3">
              {product.price}
            </p>
            <del>
              <p className="text-sm text-gray-600 dark:text-gray-200 cursor-auto ml-2">
                $199
              </p>
            </del>
            <div className="ml-auto">
              <BiHeart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
