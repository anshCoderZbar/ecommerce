import React, { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { BiHeart } from "react-icons/bi";

import { PopOver } from "components/Popover";
import Link from "next/link";

export const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="flex flex-col justify-center items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CiUser />
        <span className="text-xs sm:text-sm font-semibold">Profile</span>
      </div>
      <PopOver isOpen={isOpen} setIsOpen={setIsOpen}>
        <Link
          href={"/login"}
          className="flex gap-3 items-center text-base px-2"
        >
          <AiOutlineLogout /> Signin
        </Link>
        <div className="flex gap-3 items-center text-base py-2 px-2">
          <CiUser />
          Settings
        </div>
        <div className="flex gap-3 items-center text-base py-2  px-2">
          <BiHeart /> Wishlist
        </div>
        <button className="flex gap-3 items-center text-base pt-2 px-2">
          <AiOutlineLogout /> Signout
        </button>
      </PopOver>
    </>
  );
};
