import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import { BannerImg } from "mock/banner";

export const Banner = () => {
  return (
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
  );
};
