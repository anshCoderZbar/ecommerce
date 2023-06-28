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
    <div className="container mx-auto py-3 sm:py-4">
      <div className="flex flex-wrap items-center justify-center gap-5 py-5 md:gap-7 lg:gap-10 ">
        {Section?.map((data, i) => {
          return (
            <animated.div style={props} key={i} className="content relative">
              {/* <Image
                  src={data?.img}
                  alt={data?.heading}
                  loading="lazy"
                  className="h-full w-full rounded-md object-cover shadow-lg"
                /> */}
              <div className="overflow-hidden rounded-md">
                <img
                  // src={data?.img}
                  src="https://loremflickr.com/200/200/order"
                  alt="Product"
                  className="h-full max-h-[200px] w-full max-w-[200px] rounded-md bg-white object-cover transition-all  hover:scale-110 dark:bg-dark-background"
                />
              </div>
              <div className="overlay absolute bottom-0 left-0 right-0 h-0 overflow-hidden rounded-md bg-red-400 transition-all duration-300 dark:bg-red-950">
                <div className="text absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform overflow-hidden text-sm capitalize text-white md:text-xl">
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
