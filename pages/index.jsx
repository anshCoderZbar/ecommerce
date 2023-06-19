import Image from "next/image";
import { Layout } from "app/layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import banner1 from "app/assets/banner/banner1.jpg";
import { BannerImg } from "mock/banner";

export default function Home() {
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
                  className="w-full h-auto lg:h-[500px]"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Layout>
    </main>
  );
}
