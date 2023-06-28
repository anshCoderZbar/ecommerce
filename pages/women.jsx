import React, { useState, useEffect } from "react";
import { Layout } from "app/layout";

import { BiFilter } from "react-icons/bi";
import { ProductCard } from "components/Product-card";
import { SideFilter } from "components/Side-filter";
import { WomenFilterData } from "mock/men/WomenFilter";

export default function Women() {
  const [products, setProducts] = useState([]);

  const [active, setActive] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <main>
      <Layout>
        <div className="bg-white dark:bg-dark-background">
          <div className="container mx-auto">
            <div className="grid xl:grid-cols-[25%,75%]">
              <SideFilter
                active={active}
                setActive={setActive}
                filterData={WomenFilterData}
              />
              <div className="mt-8">
                <div className="flex  items-center justify-between pr-4 xl:justify-center">
                  <h1 className="m-2 mb-4 text-center  text-base font-semibold capitalize sm:text-2xl md:text-4xl">
                    Explore Our Latest Women Collection
                  </h1>
                  <div
                    onClick={() => setActive(true)}
                    className="block cursor-pointer text-4xl  xl:hidden"
                  >
                    <BiFilter />
                  </div>
                </div>
                <div
                  className={` grid grid-cols-1 gap-5 px-5 py-6  sm:grid-cols-2 md:px-0 lg:grid-cols-3`}
                >
                  {products?.map((product, index) => {
                    return <ProductCard product={product} key={index} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
