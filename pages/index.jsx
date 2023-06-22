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
        <div className="bg-white dark:bg-dark-background">
          <Category />

          <div className="container mx-auto py-4">
            <div className="flex justify-between items-center px-2">
              <h2 className="text-sm tracking-wide sm:text-base sm:tracking-wide md:text-lg md:tracking-wider font-bold">
                TRENDS FOR HIM
              </h2>
            </div>
            <LatestCollection />
          </div>
          <div className="container mx-auto py-4">
            <div className="flex justify-between items-center px-2">
              <h2 className="text-sm tracking-wide sm:text-base sm:tracking-wide md:text-lg md:tracking-wider font-bold">
                TRENDS FOR HER
              </h2>
            </div>
            <LatestCollection />
          </div>
          <div className="container mx-auto py-4">
            <div className="flex justify-between items-center px-2">
              <h2 className="text-sm tracking-wide sm:text-base sm:tracking-wide md:text-lg md:tracking-wider font-bold">
                BEST OF KIDSWEAR
              </h2>
            </div>
            <LatestCollection />
          </div>
          <div className="container mx-auto py-4">
            <div className="flex justify-between items-center px-2">
              <h2 className="text-sm tracking-wide sm:text-base sm:tracking-wide md:text-lg md:tracking-wider font-bold">
                LATEST IN BEAUTY & GROOMING
              </h2>
            </div>
            <LatestCollection />
          </div>
        </div>
      </Layout>
    </main>
  );
}
