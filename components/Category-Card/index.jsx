import React from "react";
import Image from "next/image";

export const CategoryCard = ({ data }) => {
  return (
    <div className="w-fit">
      <Image
        src={data?.img}
        alt="Product"
        className="w-44 h-44 object-center sm:h-48 sm:w-48 md:h-48 md:w-48 lg:h-60 lg:w-72 xl:w-72 xl:h-60 bg-white p-3 md:p-4 lg:p-5"
      />
      <div className="px-1 pb-4">
        <div className="text-gray-500 text-base lg:text-lg text-center ">
          {data?.category}
        </div>
        <div className=" text-center text-base mb-1 lg:text-lg  text-green-700">
          {data?.price} onwards
        </div>
        <div className="text-gray-500 mb-1 lg:text-base text-center text-sm">
          {data?.desc}
        </div>
      </div>
    </div>
  );
};
