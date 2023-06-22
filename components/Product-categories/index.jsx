import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { CategoryCard } from "components/Category-Card";

export const ProductCategories = (props) => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={2}
      modules={[Navigation]}
      navigation
      className="bg-white dark:bg-dark-background py-5 shadow-lg dark:shadow-none"
      breakpoints={{
        400: {
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
        1600: {
          slidesPerView: 6,
        },
      }}
    >
      {props?.category?.map((data, i) => {
        return (
          <SwiperSlide
            key={i}
            className=" bg-white dark:bg-dark-background rounded overflow-hidden"
          >
            <CategoryCard data={data} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
