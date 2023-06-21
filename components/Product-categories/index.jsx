import React from "react";
import menbanner from "app/assets/products/menbanner.webp";
import { MenCategory } from "mock/categories/Men";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation } from "swiper";

export const ProductCategories = () => {
  return (
    <div className="bg-white my-5 flex shadow-lg gap-5">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        modules={[Navigation]}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
      >
        {MenCategory?.map((data, i) => {
          return (
            <SwiperSlide
              key={i}
              className="max-w-fit bg-white rounded overflow-hidden"
            >
              <Image
                src={data?.img}
                alt="Product"
                className="w-52 h-52 bg-white p-5"
              />
              <div className="px-6 pb-4">
                <div className="text-gray-500 text-center mb-2">
                  {data?.category}
                </div>
                <div className=" text-center text-xl mb-2 text-green-700">
                  {data?.price}
                </div>
                <div className="text-gray-500 text-center mb-2">
                  {data?.desc}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
