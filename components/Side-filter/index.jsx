import React, { useEffect } from "react";
import { FcClearFilters } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";

export const SideFilter = ({ filterData, active, setActive }) => {
  useEffect(() => {
    active
      ? (document.documentElement.style.overflowY = "hidden")
      : (document.documentElement.style.overflowY = "auto");
  }, [active]);
  return (
    <div
      className={`${
        active
          ? "-translate-x-0 !overflow-y-auto transition-all"
          : "-translate-x-full overflow-hidden transition-all"
      }  sm:9/12 absolute left-0 mb-5 h-screen w-[90%] bg-white	 dark:bg-dark-background md:w-1/2 lg:w-4/12 xl:static xl:left-auto xl:h-auto xl:w-80 xl:translate-x-0`}
    >
      <div className="relative  mb-24 w-full rounded-lg py-6 pb-6">
        {active && (
          <div
            onClick={() => setActive(false)}
            className="absolute right-0 top-2 rounded-md border border-black text-3xl dark:border-white xl:hidden"
          >
            <RxCross2 />
          </div>
        )}
        <div className="flex flex-col gap-3 ">
          <div className="mx-5 my-4 flex justify-between text-4xl font-semibold md:my-3">
            Filters
            <FcClearFilters />
          </div>
          <hr className="w-full border border-black dark:border-white" />
          {filterData.length >= 1 &&
            filterData?.map((filterGroup, index) => {
              return (
                <div
                  key={index}
                  className="mx-14 mt-3 border-b-[1px] border-[#e6e6e6e]"
                >
                  <h3 className="mb-2 text-xl font-semibold capitalize">
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
                              className=" text-base font-medium capitalize"
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
