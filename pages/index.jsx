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
              <h2 className="text-base sm:text-xl tracking-[5px] font-bold">
                TRENDS FOR HIM
              </h2>
            </div>
            <LatestCollection />
          </div>
          <div className="container mx-auto py-4">
            <div className="flex justify-between items-center px-2">
              <h2 className="text-base sm:text-xl tracking-[5px] font-bold">
                TRENDS FOR Her
              </h2>
            </div>
            <LatestCollection />
          </div>
          <div className="container mx-auto py-4">
            <div className="flex justify-between items-center px-2">
              <h2 className="text-base sm:text-xl tracking-[5px] font-bold">
                BEST OF KIDSWEAR
              </h2>
            </div>
            <LatestCollection />
          </div>
          <div className="container mx-auto py-4">
            <div className="flex justify-between items-center px-2">
              <h2 className="text-base sm:text-xl tracking-[5px] font-bold">
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
