import { Layout } from "app/layout";
import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function WishList() {
  const cartItems = [
    {
      id: 1,
      name: "Product 1",
      category: "Category 1",
      details: "product-details",
      price: 10.99,
      actualPrice: 20.99,
      quantity: 9,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      name: "Product 1",
      category: "Category 1",
      details: "product-details",
      price: 10.99,
      actualPrice: 20.99,
      quantity: 9,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 3,
      name: "Product 1",
      category: "Category 1",
      details: "product-details",
      price: 10.99,
      actualPrice: 20.99,
      quantity: 9,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
  ];

  return (
    <main>
      <Layout>
        <div className="bg-white dark:bg-dark-background">
          <div className="container mx-auto px-4 py-8">
            <div className="mx-auto  xl:max-w-[80%]">
              <div className="h-fit w-full border shadow-lg">
                {cartItems?.map((elm, index) => {
                  return (
                    <div key={index} className="border-b ">
                      <div className="flex items-center justify-between">
                        <div className="flex p-2 sm:p-6">
                          <div className="h-28 w-28">
                            <img src={elm?.image} className="h-full w-full" />
                          </div>
                          <div className="mt-3 min-h-[112px] max-w-[460px] px-2 pb-2 pt-0 sm:px-6 sm:pb-6">
                            <h2 className="text-sm sm:text-base">
                              {elm?.name}
                            </h2>
                            <span className="da text-sm text-gray-500 dark:text-gray-100 sm:text-base">
                              {elm?.details}
                            </span>
                            <div className="mt-5 flex flex-wrap items-center gap-1 sm:gap-3">
                              <span className="text-sm text-gray-400 line-through dark:text-gray-100 sm:text-base">
                                {elm?.actualPrice}
                              </span>
                              <span className="ml-2 text-base font-medium sm:text-xl">
                                {elm?.price}
                              </span>
                              <span className="text-sm font-semibold text-green-800 dark:text-green-600 sm:text-base">
                                50% off
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className=" flex h-28 cursor-pointer items-center justify-center bg-[#ececec54] px-2 text-lg text-red-600">
                          {/* <AiOutlineHeart /> */}
                          <AiFillHeart />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
