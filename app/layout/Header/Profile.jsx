import React, { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { CiUser, CiLocationOn } from "react-icons/ci";
import { BiHeart } from "react-icons/bi";

import { PopOver } from "components/Popover";
import Link from "next/link";

export const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="flex flex-col items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CiUser />
        <span className="text-xs font-semibold sm:text-sm">Profile</span>
      </div>
      <PopOver isOpen={isOpen} setIsOpen={setIsOpen}>
        <Link
          href={"/login"}
          className="flex items-center gap-3 px-2 text-base"
        >
          <AiOutlineLogout /> Signin
        </Link>
        <div className="flex items-center gap-3 px-2 py-2 text-base">
          <CiUser />
          Settings
        </div>
        <div className="flex items-center gap-3 px-2 py-2  text-base">
          <BiHeart /> Wishlist
        </div>
        <Link
          href="/address"
          className="flex items-center gap-3 px-2 py-2  text-base"
        >
          <CiLocationOn /> Addresses
        </Link>
        <button className="flex items-center gap-3 px-2 pt-2 text-base">
          <AiOutlineLogout /> Signout
        </button>
      </PopOver>
    </>
  );
};
