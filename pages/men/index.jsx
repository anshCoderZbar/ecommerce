import React, { useState, useEffect } from "react";
import { Layout } from "app/layout";
import { MenFilter } from "app/common/men/MenFilter";
import { BiFilter } from "react-icons/bi";
import { ProductCard } from "components/Product-card";

export default function Men() {
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
              <MenFilter active={active} setActive={setActive} />
              <div className="mt-8">
                <div className="flex  items-center justify-between xl:justify-center pr-4">
                  <h1 className="font-semibold m-2 mb-4  text-base sm:text-2xl md:text-4xl text-center capitalize">
                    Explore Our Latest Collection
                  </h1>
                  <div
                    onClick={() => setActive(true)}
                    className="text-4xl block xl:hidden  cursor-pointer"
                  >
                    <BiFilter />
                  </div>
                </div>
                <div
                  className={` grid px-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5 py-6 md:px-0`}
                >
                  {products?.map((product) => {
                    return <ProductCard product={product} />;
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
