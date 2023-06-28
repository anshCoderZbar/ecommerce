import { Layout } from "app/layout";
import React, { useEffect, useState } from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import {
  BiShareAlt,
  BiChevronDown,
  BiSolidStar,
  BiSolidStarHalf,
} from "react-icons/bi";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { useRouter } from "next/router";
import { Pincode } from "components/Pin-code";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Modal } from "components/Modal";
import { SizeChart } from "app/common/product-page/SizeChart";

const ProductPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (!slug) {
      router.push("/men");
    } else return;
  }, []);

  const images = [
    {
      original: "https://www.whitmorerarebooks.com/pictures/medium/2465.jpg",
      thumbnail: "https://www.whitmorerarebooks.com/pictures/medium/2465.jpg",
      description: "Product 1",
    },
    {
      original: "https://www.whitmorerarebooks.com/pictures/medium/2465.jpg",
      thumbnail: "https://www.whitmorerarebooks.com/pictures/medium/2465.jpg",
      description: "Product 2",
    },
    {
      original: "https://www.whitmorerarebooks.com/pictures/medium/2465.jpg",
      thumbnail: "https://www.whitmorerarebooks.com/pictures/medium/2465.jpg",
      description: "Product 2",
    },
    {
      original: "https://www.whitmorerarebooks.com/pictures/medium/2465.jpg",
      thumbnail: "https://www.whitmorerarebooks.com/pictures/medium/2465.jpg",
      description: "Product 2",
    },
  ];

  return (
    <Layout>
      <div className="body-font overflow-hidden bg-white text-gray-700 dark:bg-dark-background">
        <div className="container mx-auto py-2 pb-10 md:px-5 lg:px-0 lg:py-10">
          <div className="mx-auto flex flex-col justify-center lg:flex-row">
            <ReactImageGallery
              showPlayButton={false}
              showNav={false}
              autoPlay={false}
              items={images}
            />
            <div className="mt-6 w-full px-5 lg:mt-0 lg:py-6 lg:pl-10">
              <h2 className="title-font text-sm tracking-widest text-gray-500 dark:text-gray-100">
                BRAND NAME
              </h2>
              <h1 className="title-font mb-1 text-2xl font-medium text-gray-900 dark:text-gray-50 sm:text-3xl">
                {slug?.replaceAll("_", " ")}
              </h1>
              <div className="mb-4  flex">
                <span className="flex items-center text-red-500 ">
                  <BiSolidStar />
                  <BiSolidStar />
                  <BiSolidStar />
                  <BiSolidStar />
                  <BiSolidStarHalf />
                  <span className="ml-3 text-gray-600 dark:text-gray-100">
                    4 Reviews
                  </span>
                </span>
                <span className="ml-3 flex border-l-2 border-gray-200 py-2 pl-3 dark:text-gray-100">
                  <BiShareAlt />
                </span>
              </div>
              <div className="mb-5 mt-6 flex items-center">
                <div className="flex">
                  <span className="mr-3 dark:text-gray-100">Color</span>
                  <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                  <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                  <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-red-500 focus:outline-none"></button>
                </div>
                <div className="ml-6 flex items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="appearance-none rounded border border-gray-900 py-2 pl-3 pr-10 text-base focus:outline-none dark:bg-dark-background dark:text-gray-100">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600 dark:text-gray-100">
                      <BiChevronDown />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center ">
                <h2 className="title-font text-2xl font-medium text-gray-900 dark:text-gray-100">
                  $58.00
                </h2>
                <p className="ml-3 text-xl text-gray-500 dark:text-gray-200">
                  MRP <del>$199</del>
                </p>
                <h2 className="ml-3  text-green-500">70% off</h2>
              </div>
              <span className="block text-sm font-medium text-green-700 dark:text-green-500">
                inclusive of all taxes
              </span>
              <div className="mt-6 flex items-center border-b-[1px] border-[#e6e6e6] pb-6">
                <button class="mr-2 flex items-center gap-1 rounded bg-red-500 px-6 py-2  text-sm text-white hover:bg-red-700   dark:bg-red-900 dark:hover:bg-red-950 sm:gap-2 sm:px-14 sm:py-3 sm:text-base ">
                  <span className="text-sm sm:text-xl">
                    <CiShoppingCart />
                  </span>
                  Add to Cart
                </button>
                <button class="dark: flex items-center gap-1 rounded border border-[#e6e6e6] px-2 py-2 text-sm hover:bg-gray-50 dark:border-gray-900 dark:text-gray-100 dark:hover:bg-gray-900 sm:gap-1 sm:px-5 sm:py-3 sm:text-base">
                  <span className="text-sm sm:text-xl">
                    <CiHeart />
                  </span>
                  Add to Wishlist
                </button>
              </div>
              <div className="my-5">
                <Pincode />
              </div>
              <div className="my-5">
                <SizeChart />
              </div>
              <div className="flex">
                <div className="w-full lg:w-2/3">
                  <h2 className="mb-2 text-xl font-medium dark:text-gray-50 sm:mb-4 sm:text-2xl">
                    Product Description
                  </h2>
                  <p className="text-gray-700 dark:text-gray-100">
                    Light shade, no fade blue jeans with a clean look. These
                    slim fit, mid-rise jeans are made from a non-stretchable
                    cotton blend fabric. They feature a classic 5-pocket design
                    and have a regular length.
                  </p>

                  <h2 className="my-2 text-xl font-medium dark:text-gray-50 sm:text-2xl">
                    Size & Fit
                  </h2>
                  <ul className="list-inside list-disc dark:text-gray-100">
                    <li className="mb-2">
                      <span className="font-semibold">Fit:</span> Slim Fit
                    </li>
                    <li className="mb-2">
                      <span className="font-semibold">Stretch:</span> Non
                      Stretchable
                    </li>
                    <li className="mb-2">
                      <span className="font-semibold">Model:</span> The model
                      (height 6') is wearing a size 32
                    </li>
                  </ul>

                  <h2 className="my-2 text-xl font-medium dark:text-gray-50 sm:text-2xl">
                    Material & Care
                  </h2>
                  <p className="text-gray-700 dark:text-gray-100">
                    <span className="font-semibold">Material:</span> Cotton
                    Blend
                    <br />
                    <span className="font-semibold">Care:</span> Machine Wash
                  </p>
                </div>
              </div>
              <div className="my-1">
                <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-50">
                  Return and Replacement Policy
                </h3>
                <p className="flex items-center leading-relaxed dark:text-gray-100">
                  We offer a 10-day return and replacement policy for all our
                  products.
                  <span
                    onClick={() => setIsOpen(true)}
                    className="mx-1 cursor-pointer"
                  >
                    <AiOutlineInfoCircle />
                  </span>
                  <Modal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    hasCloseButton={true}
                    classes="max-w-2xl"
                  >
                    <h4 className="mb-2 border-b px-5 py-4 text-lg font-medium">
                      Replacement Policy
                    </h4>
                    <div className="px-5 py-4 ">
                      If you are not satisfied with your purchase, you can
                      return the item within 10 days of delivery for a full
                      refund or a replacement. Please ensure that the item is
                      unused and in its original packaging.
                    </div>
                  </Modal>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
