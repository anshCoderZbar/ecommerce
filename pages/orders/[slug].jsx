import { Layout } from "app/layout";
import React from "react";
import { AiFillMail } from "react-icons/ai";

export default function OrderDetail() {
  return (
    <Layout>
      <div className="bg-white dark:bg-dark-background">
        <div className="px-4 py-14 2xl:container md:px-6 2xl:mx-auto 2xl:px-20">
          <div className="item-start flex flex-col justify-start space-y-2">
            <h1 className="text-3xl font-semibold leading-7  dark:text-white lg:text-4xl lg:leading-9">
              Order #13432
            </h1>
            <p className="text-base font-medium leading-6  ">
              Delevered on 21st Mart 2021
            </p>
          </div>
          <div className="jusitfy-center mt-10 flex w-full flex-col items-stretch space-y-4  md:space-y-6 xl:flex-row xl:space-x-8 xl:space-y-0">
            <div className=" w-full space-y-4 md:space-y-6 xl:space-y-8">
              <div className="flex w-full flex-col items-start justify-start border border-[#e6e6e6]  px-4 py-4  md:p-6 md:py-6 xl:p-8">
                <p className="text-lg font-semibold leading-6  dark:text-white md:text-xl xl:leading-5">
                  Customer’s Cart
                </p>
                <div className="mt-4 flex w-full flex-col items-start justify-start md:mt-6 md:flex-row md:items-center md:space-x-6 xl:space-x-8">
                  <div className="mt-6 flex w-full flex-col items-start justify-start space-y-4 md:mt-0 md:flex-row md:items-center md:space-x-6 xl:space-x-8">
                    <div className="w-full md:w-40">
                      <img
                        className=" w-full "
                        src="https://i.ibb.co/s6snNx0/Rectangle-17.png"
                        alt="dress"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-between space-y-4 md:flex-row md:space-y-0">
                      <div className="flex w-full flex-col items-start justify-start space-y-8">
                        <h3 className="text-xl font-semibold leading-6  dark:text-white xl:text-2xl">
                          High Quaility Italic Dress
                        </h3>
                        <div className="flex flex-col items-start justify-start space-y-2">
                          <p className="text-sm leading-none  dark:text-white">
                            <span className="">Style:</span>
                            Italic Minimal Design
                          </p>
                          <p className="text-sm leading-none  dark:text-white">
                            <span className="">Size:</span>
                            Small
                          </p>
                          <p className="text-sm leading-none  dark:text-white">
                            <span className="">Color:</span>
                            Light Blue
                          </p>
                        </div>
                      </div>
                      <div className="flex w-full items-start justify-between space-x-8">
                        <p className="text-base leading-6 dark:text-white xl:text-lg">
                          $20.00
                          <span className="text-red-300 line-through">
                            {" "}
                            $30.00
                          </span>
                        </p>
                        <p className="text-base leading-6  dark:text-white xl:text-lg">
                          01
                        </p>
                        <p className="text-base font-semibold leading-6  dark:text-white xl:text-lg">
                          $20.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col  items-stretch justify-center space-y-4 border border-[#e6e6e6] md:flex-row md:space-x-6 md:space-y-0 xl:space-x-8">
                <div className="flex w-full flex-col space-y-6  px-4 py-6  md:p-6 xl:p-8">
                  <h3 className="text-xl font-semibold leading-5  dark:text-white">
                    Summary
                  </h3>
                  <div className="flex w-full flex-col items-center justify-center space-y-4 border-b border-gray-200 pb-4">
                    <div className="flex w-full justify-between">
                      <p className="text-base leading-4  dark:text-white">
                        Subtotal
                      </p>
                      <p className="text-base leading-4  ">$56.00</p>
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <p className="text-base leading-4  dark:text-white">
                        Discount
                      </p>
                      <p className="text-base leading-4  ">-$28.00 (50%)</p>
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <p className="text-base leading-4  dark:text-white">
                        Shipping
                      </p>
                      <p className="text-base leading-4  ">$8.00</p>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <p className="text-base font-semibold leading-4  dark:text-white">
                      Total
                    </p>
                    <p className="text-base font-semibold leading-4  ">
                      $36.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-fit w-full flex-col items-center justify-between border border-[#e6e6e6]  px-4 py-6  md:items-start md:p-6 xl:w-96 xl:p-8">
              <h3 className="text-xl font-semibold leading-5  dark:text-white">
                Customer
              </h3>
              <div className="flex h-full w-full flex-col items-stretch justify-start md:flex-row md:space-x-6 lg:space-x-8 xl:flex-col xl:space-x-0">
                <div className="flex flex-shrink-0 flex-col items-start justify-start">
                  <div className="flex w-full items-center justify-center space-x-4 border-b border-gray-200 py-8 md:justify-start">
                    <div className="flex flex-col items-start justify-start space-y-2">
                      <p className="text-left text-base font-semibold leading-4  dark:text-white">
                        David Kent
                      </p>
                      <p className=" text-sm leading-5 ">10 Previous Orders</p>
                    </div>
                  </div>

                  <div className="flex w-full items-center justify-center space-x-4 border-b border-gray-200 py-4  dark:text-white md:justify-start">
                    <AiFillMail />
                    <p className="cursor-pointer text-sm leading-5 ">
                      david89@gmail.com
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex h-fit w-full flex-col items-stretch justify-between md:mt-0">
                  <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:items-start md:justify-start md:space-x-6 md:space-y-0 lg:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-12">
                    <div className="flex flex-col items-center justify-center space-y-4 md:items-start md:justify-start xl:mt-8">
                      <p className="text-center text-base font-semibold leading-4  dark:text-white md:text-left">
                        Shipping Address
                      </p>
                      <p className="w-48 text-center text-sm leading-5   md:text-left lg:w-full xl:w-48">
                        180 North King Street, Northhampton MA 1060
                      </p>
                    </div>
                    <div className="flex w-full items-center justify-center md:items-start md:justify-start">
                      <button className="mt-6 w-96 border border-gray-800 py-5 text-base font-medium leading-4  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-gray-900 md:mt-0 2xl:w-full">
                        Edit Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
