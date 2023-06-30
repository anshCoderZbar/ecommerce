import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import { BannerImg } from "mock/banner";

export const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 1500,
      }}
      className="container  mx-auto"
      pagination={{ clickable: true }}
      navigation
    >
      {BannerImg?.map((image, i) => {
        return (
          <SwiperSlide key={i}>
            <img
              src="https://loremflickr.com/1400/500/shopping"
              alt="banner1"
              loading="lazy"
              className=" h-auto w-full  py-2"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

{
}
