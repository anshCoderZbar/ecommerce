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
    <nav className="w-full bg-white py-6 shadow-lg  dark:bg-dark-background dark:text-white">
      {active && <div className="fixed inset-0 bg-black opacity-50"></div>}
      <div
        className={`container mx-auto flex items-center justify-between gap-4 ${
          openInput ? "hidden" : "block"
        }`}
      >
        <div className="flex items-center gap-1">
          <div
            className="z-[99999] ml-2 block lg:hidden"
            onClick={() => setActive(!active)}
          >
            <div className="my-2 h-[2px] w-7 rounded-full bg-black dark:bg-white"></div>
            <div className="my-2 h-[2px] w-7 rounded-full bg-black dark:bg-white"></div>
            <div className="my-2 h-[2px] w-7 rounded-full bg-black dark:bg-white"></div>
          </div>
          <Link href={"/"} className="logo">
            logo
          </Link>
        </div>
        <div
          className={`absolute left-0 top-0 z-50 flex h-full w-full items-center  justify-center bg-white dark:bg-dark-background sm:w-[50%]  ${
            active
              ? "translate-x-[0%] overflow-hidden shadow-lg transition-all duration-500 "
              : "-translate-x-[100%] transition-all duration-500"
          } lg:static lg:left-auto lg:top-auto lg:h-auto lg:w-auto lg:translate-x-0`}
        >
          <ul className="flex flex-col items-center justify-center gap-14 lg:flex-row lg:gap-4 xl:gap-10">
            {HeaderRoutes &&
              HeaderRoutes?.map((routes) => {
                return (
                  <li
                    key={routes?.id}
                    className="cursor-pointer text-base font-semibold uppercase after:block after:origin-center after:scale-x-0 after:border-b-2 after:transition-all after:duration-500 after:ease-in-out hover:text-black hover:after:scale-x-100 hover:after:border-red-700 dark:hover:text-white"
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
            className=" w-full rounded-md border-[1px] border-[#e6e6e6] bg-gray-100 p-1 px-3 pl-10 placeholder:text-sm focus:bg-white focus:outline-none dark:dark:bg-dark-background md:w-[350px] lg:w-[300px] xl:w-[500px]"
            placeholder="Search for products"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
            <CiSearch />
          </div>
        </div>
        <div className="mr-5  flex  items-center gap-3 bg-white text-xl  dark:bg-dark-background sm:gap-5 md:gap-8">
          <div
            className="flex flex-col items-center md:hidden"
            onClick={() => setOpenInput(true)}
          >
            <CiSearch />
            <span className="text-xs font-semibold sm:text-sm">Search</span>
          </div>
          <div className="flex cursor-pointer flex-col items-center">
            <Link href="/cart" className="relative z-0 ">
              <span className="absolute -right-2 -top-1 flex h-1 w-1 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white ">
                0
              </span>
              <CiShoppingCart />
            </Link>
            <span className="text-xs font-semibold sm:text-sm">Cart</span>
          </div>
          <div className=" cursor-pointer">
            <Profile />
          </div>
          <select
            className="cursor-pointer rounded-lg border bg-transparent p-1 text-sm outline-none"
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
        } mx-5 flex  items-center gap-5 sm:m-0 `}
      >
        <div className=" flex w-full items-center  gap-5">
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
