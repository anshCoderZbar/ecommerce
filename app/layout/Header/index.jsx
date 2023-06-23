import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CiShoppingCart, CiSearch } from "react-icons/ci";
import { BiArrowBack } from "react-icons/bi";
import { useTheme } from "next-themes";

import { Profile } from "./Profile";
import { HeaderRoutes } from "mock/header";

export const Header = () => {
  const [active, setActive] = useState(false);
  const [openInput, setOpenInput] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    active
      ? (document.documentElement.style.overflowY = "hidden")
      : (document.documentElement.style.overflowY = "auto");
  }, [active]);

  return (
    <nav className="py-6 bg-white shadow-lg w-full  dark:bg-dark-background dark:text-white">
      <div
        className={`container mx-auto flex justify-between items-center gap-4 ${
          openInput ? "hidden" : "block"
        }`}
      >
        <div className="flex items-center gap-1">
          <div
            className="block lg:hidden z-[99999] ml-2"
            onClick={() => setActive(!active)}
          >
            <div className="h-[2px] w-7 my-2 rounded-full bg-black dark:bg-white"></div>
            <div className="h-[2px] w-7 my-2 rounded-full bg-black dark:bg-white"></div>
            <div className="h-[2px] w-7 my-2 rounded-full bg-black dark:bg-white"></div>
          </div>
          <Link href={"/"} className="logo">
            logo
          </Link>
        </div>
        <div
          className={`absolute top-0 left-0 w-full z-50 sm:w-[50%] bg-white dark:bg-dark-background  h-full flex items-center justify-center  ${
            active
              ? "translate-x-[0%] transition-all duration-500 shadow-lg overflow-hidden "
              : "-translate-x-[100%] transition-all duration-500"
          } lg:static lg:top-auto lg:left-auto lg:w-auto lg:h-auto lg:translate-x-0`}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-14 lg:gap-4 xl:gap-10 justify-center">
            {HeaderRoutes &&
              HeaderRoutes?.map((routes) => {
                return (
                  <li
                    key={routes?.id}
                    className="cursor-pointer uppercase font-semibold text-base hover:text-black dark:hover:text-white after:block after:origin-center after:scale-x-0 after:border-b-2 after:transition-all after:duration-500 after:ease-in-out hover:after:scale-x-100 hover:after:border-red-700"
                  >
                    <Link href={routes?.slug}> {routes?.name}</Link>
                  </li>
                );
              })}
          </ul>
        </div>

        <div className="relative hidden md:block">
          <input
            type="text"
            className=" border-[1px] p-1 w-full md:w-[350px] lg:w-[300px] xl:w-[500px] border-[#e6e6e6] pl-10 px-3 rounded-md bg-gray-100 focus:outline-none focus:bg-white placeholder:text-sm dark:dark:bg-dark-background"
            placeholder="Search for products"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
            <CiSearch />
          </div>
        </div>
        <div className="flex  items-center  bg-white dark:bg-dark-background gap-3 sm:gap-5  md:gap-8 text-xl mr-5">
          <div
            className="flex items-center flex-col md:hidden"
            onClick={() => setOpenInput(true)}
          >
            <CiSearch />
            <span className="text-xs sm:text-sm font-semibold">Search</span>
          </div>
          <div className="flex items-center flex-col cursor-pointer">
            <Link href="/cart" className="relative z-0 ">
              <span className="h-1 w-1 flex justify-center -top-1 -right-2 items-center bg-red-500 text-xs text-white p-2 rounded-full absolute ">
                0
              </span>
              <CiShoppingCart />
            </Link>
            <span className="text-xs sm:text-sm font-semibold">Cart</span>
          </div>
          <div className="flex items-center flex-col cursor-pointer">
            <Profile />
          </div>
          <select
            className="bg-transparent border rounded-lg p-1 outline-none text-sm cursor-pointer"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option
              value="system"
              className=" dark:bg-dark-background dark:text-white"
            >
              System
            </option>
            <option
              value="dark"
              className=" dark:bg-dark-background dark:text-white"
            >
              Dark
            </option>
            <option
              value="light"
              className=" dark:bg-dark-background dark:text-white"
            >
              Light
            </option>
          </select>
        </div>
      </div>
      <div
        className={` ${
          openInput ? "block" : "hidden"
        } flex items-center  mx-5 sm:m-0 gap-5 `}
      >
        <div className=" flex items-center gap-5  w-full">
          <div onClick={() => setOpenInput(false)}>
            <BiArrowBack />
          </div>
          <input
            className="none w-full bg-transparent focus:outline-none"
            placeholder="Search for products"
          />
        </div>
        <div className="text-xl text-red-700">
          <CiSearch />
        </div>
      </div>
    </nav>
  );
};
