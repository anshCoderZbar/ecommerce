import { useRouter } from "next/router";
import React from "react";

import { AiOutlineHeart } from "react-icons/ai";

export const ProductCard = ({ product }) => {
  const router = useRouter();
  return (
    <div className="w-full cursor-pointer rounded-xl bg-white shadow-md duration-500 hover:shadow-xl  dark:bg-dark-background">
      <div
        onClick={() =>
          router.push(`/product/${product?.title?.replaceAll(" ", "_")}`)
        }
      >
        <div className="overflow-hidden rounded-md">
          <img
            src="https://loremflickr.com/400/400/shirt"
            alt="Product"
            className="h-full max-h-[400px] w-full  rounded-md bg-white object-cover transition-all  hover:scale-110 dark:bg-dark-background"
          />
        </div>
        <div className="px-4 py-3">
          <span className="mr-3 text-xs uppercase text-gray-400">Brand</span>
          <p className="block truncate  text-lg font-bold capitalize">
            {product.title}
          </p>
          <div className="flex items-center">
            <p className="my-3 cursor-auto  text-lg font-semibold">
              {product.price}
            </p>
            <del>
              <p className="ml-2 cursor-auto text-sm text-gray-600 dark:text-gray-200">
                $199
              </p>
            </del>
            <div className="ml-auto">
              <AiOutlineHeart />
              {/* <AiFillHeart /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
