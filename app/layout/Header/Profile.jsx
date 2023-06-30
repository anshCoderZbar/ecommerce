import React, { useState } from "react";
import { CiUser } from "react-icons/ci";

import { DropDown } from "components/Dropdown";
import { useRouter } from "next/router";
import { profileMenu } from "mock/header/Profile";

export const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <div
        className="flex flex-col items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CiUser />
        <span className="text-xs font-semibold sm:text-sm">Profile</span>
      </div>
      <DropDown isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="rounded border" role="none">
          {profileMenu?.map((items, index) => {
            return (
              <div className="p-1">
                <button
                  onClick={() => router.push(items?.slug)}
                  key={index}
                  className={`group flex w-full items-center  ${
                    index === profileMenu?.length - 1 ? "" : "border-b"
                  } px-2 py-2 text-base`}
                >
                  <p className="mr-2">{items?.icon}</p>
                  <span>{items?.name}</span>
                </button>
              </div>
            );
          })}
        </div>
        {/* <button className="group flex w-full items-center  border-b px-2 py-2 text-base text-black">
          <AiOutlineLogout /> Signout
        </button> */}
      </DropDown>
    </>
  );
};
