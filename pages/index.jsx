import Image from "next/image";
import { Layout } from "app/layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { animated, useSpring } from "@react-spring/web";

import { BannerImg } from "mock/banner";
import { Section } from "mock/section";

import { MenCategories } from "app/common/index/MenCategories";

export default function Home() {
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
    <main>
      <Layout>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation
        >
          {BannerImg?.map((image, i) => {
            return (
              <SwiperSlide key={i}>
                <Image
                  src={image?.img}
                  alt="banner1"
                  loading="lazy"
                  className="w-full h-auto aspect-video max-w-full lg:h-[500px]"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="bg-white dark:bg-gray-900">
          <div className="container mx-auto ">
            <div className="flex flex-wrap gap-5 md:gap-7 lg:gap-10 items-center justify-center py-5 ">
              {Section?.map((data, i) => {
                return (
                  <animated.div
                    style={props}
                    key={i}
                    className="content relative"
                  >
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
        </div>
        <div className="container mx-auto my-5">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Popular Products</h2>
            <button className="border bg-red-500 text-white outline-none py-2 px-8 rounded-md hover:bg-red-700">
              View More
            </button>
          </div>
          <MenCategories />
        </div>
      </Layout>
    </main>
  );
}
