import { Layout } from "app/layout";
import React from "react";

export default function CartPage() {
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

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discountPercentage = 10;
  const discountAmount = (subtotal * discountPercentage) / 100;
  const total = subtotal - discountAmount;

  // const handleRemoveItem = (itemId) => {
  //   console.log(`Removing item with ID ${itemId}`);
  // };

  const handlePlaceOrder = () => {
    console.log("Placing order...");
  };

  return (
    <main>
      <Layout>
        <div className="bg-white dark:bg-dark-background">
          <div className="container mx-auto px-4 py-8">
            <div className="mx-auto grid  h-auto grid-cols-1 gap-4 md:grid-cols-[70%,30%] xl:max-w-[80%]">
              <div className="h-fit w-full border shadow-lg">
                {cartItems?.map((elm) => {
                  return (
                    <div className="border-b p-2 sm:p-6">
                      <div className="flex">
                        <div className="h-28 w-28">
                          <img src={elm?.image} className="h-full w-full" />
                        </div>
                        <div className="mt-3 min-h-[112px] max-w-[460px] px-2 pb-2 pt-0 sm:px-6 sm:pb-6">
                          <h2 className="text-sm sm:text-base">{elm?.name}</h2>
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
                        <div className="ms-auto mt-2 hidden sm:block">
                          <span className="text-sm">
                            Delivery Date: June 30, 2023
                          </span>
                        </div>
                      </div>
                      <div className="ms-auto mt-2 block sm:hidden">
                        <span className="text-sm">
                          Delivery Date: June 30, 2023
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-5 py-3">
                        <div className="flex gap-2">
                          <button className="to-f9f9f9 inline-block h-7 w-7 cursor-pointer rounded-full border border-[#c2c2c2] bg-gradient-to-b from-white text-sm">
                            -
                          </button>
                          <div className="h-7 w-[46px]">
                            <input
                              type="number"
                              className="w-full rounded-sm border border-[#c2c2c2] p-1 text-center align-middle text-sm font-medium focus:outline-none"
                              value="1"
                            />
                          </div>
                          <button className="to-f9f9f9 inline-block h-7 w-7 cursor-pointer rounded-full border border-[#c2c2c2] bg-gradient-to-b from-white text-sm">
                            +
                          </button>
                        </div>
                        <div className="flex gap-3">
                          <button className="text-xs font-medium uppercase sm:text-base">
                            Save for later
                          </button>
                          <button className="text-xs font-medium uppercase sm:text-base">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex h-fit w-full flex-col gap-3 border  bg-white shadow-md dark:bg-dark-background">
                <h2 className="border-b border-[#e6e6e6] px-6 py-4  text-lg font-semibold ">
                  Price Details
                </h2>
                <div className="mb-1  flex items-center justify-between px-6 font-medium">
                  <span className="text-base">Subtotal</span>
                  <span className="text-gray-800 dark:text-gray-100">
                    ₹{subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="mb-1  flex items-center justify-between px-6 font-medium">
                  <span className="text-base">Discount</span>
                  <span className="text-green-600">
                    -₹{discountAmount.toFixed(2)}
                  </span>
                </div>
                <div className="mb-1  flex items-center justify-between px-6 font-medium">
                  <span className="text-base">Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex items-center justify-between border-b border-t border-dashed px-6  py-4">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-lg font-semibold">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <div className="px-6 py-4">
                  <button
                    className=" mb-4 w-full rounded bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600"
                    onClick={handlePlaceOrder}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
