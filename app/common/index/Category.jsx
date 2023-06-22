import React from "react";
import Image from "next/image";
import { animated, useSpring } from "@react-spring/web";

import { Section } from "mock/section";

export const Category = () => {
  const [props, api] = useSpring(
    () => ({
      from: { transform: "scale(0)", opacity: 0 },
      to: { transform: "scale(1)", opacity: 1 },
      immediate: false,
      config: { duration: 1000 },
    }),
    []
  );
  return (
    <div className="container mx-auto pt-3 sm:pt-5">
      <div className="flex flex-wrap gap-5 md:gap-7 lg:gap-10 items-center justify-center py-5 ">
        {Section?.map((data, i) => {
          return (
            <animated.div style={props} key={i} className="content relative">
              <Image
                src={data?.img}
                alt={data?.heading}
                loading="lazy"
                className="rounded-md w-28 shadow-lg h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 "
              />
              <div className="overlay absolute bg-red-400 rounded-md bottom-0 left-0 right-0 overflow-hidden h-0 transition-all duration-300 dark:bg-red-950">
                <div className="text text-white  text-sm md:text-xl absolute overflow-hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 capitalize">
                  {data?.heading}
                </div>
              </div>
            </animated.div>
          );
        })}
      </div>
    </div>
  );
};
