import { Layout } from "app/layout";

import { Banner } from "app/common/index/Banner";
import { Category } from "app/common/index/Category";
import { LatestCollection } from "app/common/index/LatestCollections";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="bg-white dark:bg-dark-background">
          <Banner />
          <Category />
          <div className="container mx-auto py-4">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-sm font-bold tracking-wide sm:text-base sm:tracking-wide md:text-lg md:tracking-wider">
                TRENDS FOR HIM
              </h2>
            </div>
            <LatestCollection />
          </div>
          <div className="container mx-auto py-4">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-sm font-bold tracking-wide sm:text-base sm:tracking-wide md:text-lg md:tracking-wider">
                TRENDS FOR HER
              </h2>
            </div>
            <LatestCollection />
          </div>
          <div className="container mx-auto py-4">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-sm font-bold tracking-wide sm:text-base sm:tracking-wide md:text-lg md:tracking-wider">
                BEST OF KIDSWEAR
              </h2>
            </div>
            <LatestCollection />
          </div>
          <div className="container mx-auto py-4">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-sm font-bold tracking-wide sm:text-base sm:tracking-wide md:text-lg md:tracking-wider">
                LATEST IN BEAUTY & GROOMING
              </h2>
            </div>
            <LatestCollection />
          </div>
        </div>
      </Layout>
    </>
  );
}
