import React from "react";

import { FaInstagram, FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className=" opacity-  w-full bg-gray-100  shadow-lg dark:bg-dark-background dark:text-white">
      <div className="container mx-auto">
        <div className="grid w-full px-2 py-2 sm:grid-cols-2 sm:px-0 sm:py-4 md:grid-cols-3 md:px-0 md:py-8 lg:grid-cols-4 lg:px-0 lg:py-12">
          <div className="my-5">logo</div>
          <div className="my-5">
            <h2 className="mb-4 text-lg font-semibold">Categories</h2>
            <ul>
              <li className="mt-2 text-sm md:mt-4 lg:mt-6">Men</li>
              <li className="mt-2 text-sm md:mt-4 lg:mt-6">Women</li>
              <li className="mt-2 text-sm md:mt-4 lg:mt-6">Kids</li>
              <li className="mt-2 text-sm md:mt-4 lg:mt-6">Accessories</li>
            </ul>
          </div>
          <div className="my-5">
            <h2 className="mb-4 text-lg font-semibold">Information</h2>
            <ul>
              <li className="mt-2 text-sm md:mt-4 lg:mt-6">Your Orders</li>
              <li className="mt-2 text-sm md:mt-4 lg:mt-6">Billing Address</li>
              <li className="mt-2 text-sm md:mt-4 lg:mt-6">Return policy</li>
            </ul>
          </div>
          <div className="my-5">
            <h2 className="mb-4 text-lg font-semibold">Contact Us</h2>
            <p className=" mb-1">123 Street, City</p>
            <p className=" mb-1">Phone: 123-456-7890</p>
            <p className="">Email: info@example.com</p>
            <div className="mt-2">
              <div className=" mt-3 flex items-center gap-3 ">
                <FaInstagram className="h-6 w-6" />
                <span className="">user_name</span>
              </div>
              <div className=" mt-3 flex items-center gap-3 ">
                <FaFacebook className="h-6 w-6" />
                <span className="">user_name</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-700 p-5 text-center capitalize text-white dark:bg-red-950">
        © {new Date().getFullYear()}-copyright claim by ---firm
      </div>
    </footer>
  );
};
