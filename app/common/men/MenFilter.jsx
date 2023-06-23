import { MenFilterData } from "mock/men/Filter";
import React, { useEffect } from "react";

import { FcClearFilters } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";

export const MenFilter = ({ active, setActive }) => {
  useEffect(() => {
    active
      ? (document.documentElement.style.overflowY = "hidden")
      : (document.documentElement.style.overflowY = "auto");
  }, [active]);

  return (
    <div
      className={`${
        active
          ? "-translate-x-0 transition-all !overflow-y-auto"
          : "-translate-x-full transition-all overflow-hidden"
      }  absolute h-screen w-[90%] sm:9/12 md:w-1/2 lg:w-4/12	 left-0 xl:w-80 xl:h-auto xl:left-auto bg-white dark:bg-dark-background xl:translate-x-0 xl:static`}
    >
      <div className="w-full relative py-6 rounded-lg  mb-6 pb-6">
        {active && (
          <div
            onClick={() => setActive(false)}
            className="absolute right-0 border top-2 text-3xl rounded-md border-black dark:border-white xl:hidden"
          >
            <RxCross2 />
          </div>
        )}
        <div className="flex flex-col gap-3 ">
          <div className="flex text-4xl font-semibold mx-5 my-4 md:my-3 justify-between">
            Filters
            <FcClearFilters />
          </div>
          <hr className="w-full border border-black dark:border-white" />
          {MenFilterData?.map((filterGroup) => {
            return (
              <div
                key={filterGroup?.id}
                className="border-b-[1px] border-[#e6e6e6e] mt-3 mx-14"
              >
                <h3 className="text-xl capitalize font-semibold mb-2">
                  {filterGroup?.name}
                </h3>
                <ul className="m-4">
                  {filterGroup?.filters?.length >= 1 &&
                    filterGroup?.filters?.map((elm) => {
                      return (
                        <li key={elm.id} className="mb-2 cursor-pointer">
                          <input
                            type="radio"
                            name="category"
                            className="mr-2 leading-tight"
                            id={`category-${1}`}
                          />
                          <label
                            className=" capitalize font-medium text-base"
                            htmlFor={`category-${1}`}
                          >
                            {elm?.name}
                          </label>
                        </li>
                      );
                    })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
