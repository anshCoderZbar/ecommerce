import React, { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { BiHeart } from "react-icons/bi";

import { PopOver } from "components/Popover";

export const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <CiUser />
      <span
        onClick={() => setIsOpen(!isOpen)}
        className="text-xs sm:text-sm font-semibold"
      >
        Profile
      </span>
      <PopOver isOpen={isOpen} setIsOpen={setIsOpen}>
        <button className="flex gap-3 items-center text-base px-2">
          <AiOutlineLogout /> Signin
        </button>
        {/* <div className="flex gap-3 items-center text-base py-2 px-2">
          <CiUser />
          Settings
        </div>
        <div className="flex gap-3 items-center text-base py-2  px-2">
          <BiHeart /> Wishlist
        </div>
        <button className="flex gap-3 items-center text-base pt-2 px-2">
          <AiOutlineLogout /> Signout
        </button> */}
      </PopOver>
    </>
  );
};
