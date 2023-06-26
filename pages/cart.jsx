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
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discountPercentage = 10;
  const discountAmount = (subtotal * discountPercentage) / 100;
  const total = subtotal - discountAmount;

  const handleRemoveItem = (itemId) => {
    console.log(`Removing item with ID ${itemId}`);
  };

  const handlePlaceOrder = () => {
    console.log("Placing order...");
  };

  return (
    <main>
      <Layout>
        <div className="bg-white dark:bg-dark-background">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1  md:grid-cols-[70%,30%] xl:max-w-[80%] gap-4 h-auto mx-auto">
              <div className="w-full h-fit bg-white border shadow-lg">
                {cartItems?.map((elm) => {
                  return (
                    <div className="p-2 sm:p-6 border-b">
                      <div className="flex">
                        <div className="w-28 h-28">
                          <img src={elm?.image} className="w-full h-full" />
                        </div>
                        <div className="mt-3 pt-0 px-2 pb-2 sm:px-6 sm:pb-6 min-h-[112px] max-w-[460px]">
                          <h2 className="text-sm sm:text-base">{elm?.name}</h2>
                          <span className="text-sm sm:text-base text-gray-500">
                            {elm?.details}
                          </span>
                          <div className="flex flex-wrap items-center gap-1 sm:gap-3 mt-5">
                            <span className="text-sm sm:text-base text-gray-400 line-through">
                              {elm?.actualPrice}
                            </span>
                            <span className="text-base sm:text-xl  font-medium ml-2">
                              {elm?.price}
                            </span>
                            <span className="text-sm sm:text-base text-green-800 font-semibold">
                              50% off
                            </span>
                          </div>
                        </div>
                        <div className="mt-2 ms-auto hidden sm:block">
                          <span className="text-sm">
                            Delivery Date: June 30, 2023
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 ms-auto block sm:hidden">
                        <span className="text-sm">
                          Delivery Date: June 30, 2023
                        </span>
                      </div>
                      <div className="py-3 flex flex-wrap gap-5">
                        <div className="flex gap-2">
                          <button className="w-7 h-7 bg-gradient-to-b from-white to-f9f9f9 inline-block border border-[#c2c2c2] cursor-pointer text-sm rounded-full">
                            -
                          </button>
                          <div className="w-[46px] h-7">
                            <input
                              type="number"
                              className="border border-[#c2c2c2] rounded-sm w-full p-1 focus:outline-none text-sm align-middle text-center font-medium"
                              value="1"
                            />
                          </div>
                          <button className="w-7 h-7 bg-gradient-to-b from-white to-f9f9f9 inline-block border border-[#c2c2c2] cursor-pointer text-sm rounded-full">
                            +
                          </button>
                        </div>
                        <div className="flex gap-3">
                          <button className="text-xs sm:text-base font-medium uppercase">
                            Save for later
                          </button>
                          <button className="text-xs sm:text-base font-medium uppercase">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="bg-white border dark:bg-dark-background w-full h-fit flex  flex-col gap-3 shadow-md">
                <h2 className="text-lg py-4 px-6 text-[#878787]  font-semibold border-b border-[#e6e6e6]">
                  Price Details
                </h2>
                <div className="flex  px-6 justify-between items-center font-medium mb-1">
                  <span className="text-base">Subtotal</span>
                  <span className="text-gray-800">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex  px-6 justify-between items-center font-medium mb-1">
                  <span className="text-base">Discount</span>
                  <span className="text-green-600">
                    -₹{discountAmount.toFixed(2)}
                  </span>
                </div>
                <div className="flex  px-6 justify-between items-center font-medium mb-1">
                  <span className="text-base">Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between items-center py-4 px-6 border-t border-b  border-dashed">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-lg font-semibold">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <div className="py-4 px-6">
                  <button
                    className=" bg-red-500 w-full mb-4 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
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
