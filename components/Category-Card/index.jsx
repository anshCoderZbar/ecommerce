import React from "react";

export const CategoryCard = ({ data }) => {
  return (
    <div className=" bg-white p-4 dark:bg-dark-background">
      <div className="overflow-hidden rounded-md">
        <img
          // src={data?.img}
          src="https://loremflickr.com/300/300/order"
          alt="Product"
          className="h-full max-h-[300px] w-full max-w-[300px] rounded-md bg-white object-cover transition-all  hover:scale-110 dark:bg-dark-background"
        />
      </div>
      <div className="px-1 pb-4">
        <div className="text-center text-base text-gray-500 dark:text-gray-50 lg:text-lg ">
          {data?.category}
        </div>
        <div className=" mb-1 text-center text-base text-green-700  dark:text-green-500 lg:text-lg">
          {data?.price} onwards
        </div>
        <div className="mb-1 text-center text-sm text-gray-500 dark:text-gray-50 lg:text-base">
          {data?.desc}
        </div>
      </div>
    </div>
  );
};
