import React, { useState, useEffect } from "react";
import { Layout } from "app/layout";
import { MenFilter } from "app/common/men/MenFilter";

export default function Men() {
  const [products, setProducts] = useState([]);

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
            <div className="grid grid-cols-[324px,1210px]">
              <MenFilter />
              {/* <div className="mt-8">
              <h2 className="text-lg font-semibold mb-4">Products</h2>
              <div className="grid grid-cols-3 gap-4">
                {products.map((product) => {
                  console.log(product);
                  return (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg shadow-md"
                    >
                      <div className="rounded-md overflow-hidden">
                        <img
                          src={product?.image}
                          alt="Product"
                          className="w-auto h-auto rounded-md sm:h-48 sm:w-48 md:h-48 md:w-48 lg:h-60 lg:w-72 xl:w-72 xl:h-60 bg-white dark:bg-dark-background  transition-all hover:scale-110"
                        />
                      </div>
                      <h3 className="text-md font-semibold mb-2">
                        {product.title}
                      </h3>
                      <p className="text-gray-500">${product.price}</p>
                    </div>
                  );
                })}
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
