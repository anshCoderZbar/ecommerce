import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { CategoryCard } from "components/Category-Card";

export const ProductCategories = (props) => {
  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={2}
      modules={[Navigation]}
      navigation
      className="bg-white py-5 shadow-lg dark:bg-dark-background dark:shadow-none"
      breakpoints={{
        450: {
          slidesPerView: 3,
        },
        750: {
          slidesPerView: 4,
        },
        900: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
        2000: {
          slidesPerView: 6,
        },
      }}
    >
      {props?.category?.map((data, i) => {
        return (
          <SwiperSlide
            key={i}
            className=" bg-red overflow-hidden  dark:bg-dark-background"
          >
            <CategoryCard data={data} key={i} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
