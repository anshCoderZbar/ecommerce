import React from "react";

import { FaInstagram, FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className=" bg-gray-50  dark:bg-gray-900 dark:text-white  opacity- shadow-lg w-full">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-2 px-2 w-full sm:py-4 sm:px-0 md:py-8 md:px-0 lg:py-12 lg:px-0">
          <div className="my-5">logo</div>
          <div className="my-5">
            <h2 className="font-semibold text-lg mb-4">Categories</h2>
            <ul>
              <li className="mt-2 md:mt-4 lg:mt-6 text-sm">Men</li>
              <li className="mt-2 md:mt-4 lg:mt-6 text-sm">Women</li>
              <li className="mt-2 md:mt-4 lg:mt-6 text-sm">Kids</li>
              <li className="mt-2 md:mt-4 lg:mt-6 text-sm">Accessories</li>
            </ul>
          </div>
          <div className="my-5">
            <h2 className="font-semibold text-lg mb-4">Information</h2>
            <ul>
              <li className="mt-2 md:mt-4 lg:mt-6 text-sm">Your Orders</li>
              <li className="mt-2 md:mt-4 lg:mt-6 text-sm">Billing Address</li>
              <li className="mt-2 md:mt-4 lg:mt-6 text-sm">Kids</li>
              <li className="mt-2 md:mt-4 lg:mt-6 text-sm">Accessories</li>
            </ul>
          </div>
          <div className="my-5">
            <h2 className="font-semibold text-lg mb-4">Categories</h2>
            <p className=" mb-1">123 Street, City</p>
            <p className=" mb-1">Phone: 123-456-7890</p>
            <p className="">Email: info@example.com</p>
            <div className="mt-2">
              <div className=" flex items-center gap-3 mt-3 ">
                <FaInstagram className="w-6 h-6" />
                <span className="">user_name</span>
              </div>
              <div className=" flex items-center gap-3 mt-3 ">
                <FaFacebook className="w-6 h-6" />
                <span className="">user_name</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-white p-5 bg-red-700 dark:bg-red-950 capitalize">
        © {new Date().getFullYear()}-copyright claim by ---firm
      </div>
    </footer>
  );
};
