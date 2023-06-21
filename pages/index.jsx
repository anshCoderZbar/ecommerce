import { Layout } from "app/layout";

import { Banner } from "app/common/index/Banner";
import { Category } from "app/common/index/Category";
import { LatestCollection } from "app/common/index/LatestCollections";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  return (
    <main>
      <Layout>
        <Banner />
        <div className="bg-white dark:bg-gray-900">
          <Category />
        </div>
        <div className="container mx-auto my-5">
          <div className="flex justify-between items-center px-2">
            <h2 className="text-base sm:text-lg font-semibold">
              Latest Collections
            </h2>
            <button className="border bg-red-500  text-white outline-none py-1 px-4 sm:py-2 sm:px-6 rounded-md hover:bg-red-700">
              View More
            </button>
          </div>
          <LatestCollection />
        </div>
      </Layout>
    </main>
  );
}
