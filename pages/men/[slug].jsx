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
      <div className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container md:px-5 lg:px-0 py-2 pb-10 mx-auto">
          <div className="mx-auto flex flex-col lg:flex-row justify-center">
            <ReactImageGallery
              showPlayButton={false}
              showNav={false}
              autoPlay={false}
              items={images}
            />
            <div className="px-5 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-2xl sm:text-3xl title-font font-medium mb-1">
                {slug?.replaceAll("_", " ")}
              </h1>
              <div className="flex  mb-4">
                <span className="flex items-center text-red-500">
                  <BiSolidStar />
                  <BiSolidStar />
                  <BiSolidStar />
                  <BiSolidStar />
                  <BiSolidStarHalf />
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <BiShareAlt />
                </span>
              </div>
              <div className="flex mt-6 items-center mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <BiChevronDown />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center ">
                <h2 className="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </h2>
                <p className="text-xl text-gray-500 dark:text-gray-200 ml-3">
                  MRP <del>$199</del>
                </p>
                <h2 className="text-green-500  ml-3">70% off</h2>
              </div>
              <span className="font-medium text-sm block text-green-700">
                inclusive of all taxes
              </span>
              <div className="flex items-center mt-6 border-b-[1px] pb-6 border-[#e6e6e6]">
                <button class="text-sm sm:text-base bg-red-500 hover:bg-red-700 text-white flex items-center gap-1  sm:gap-2 py-2 px-6  sm:py-3 sm:px-14 rounded mr-2 ">
                  <span className="text-sm sm:text-xl">
                    <CiShoppingCart />
                  </span>
                  Add to Cart
                </button>
                <button class="text-sm sm:text-base border border-[#e6e6e6] flex items-center gap-1 sm:gap-1 py-2 px-2 sm:py-3 sm:px-5 hover:bg-gray-50 rounded">
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
                  <h2 className="text-xl sm:text-2xl font-medium mb-2 sm:mb-4">
                    Product Description
                  </h2>
                  <p className="text-gray-700 ">
                    Light shade, no fade blue jeans with a clean look. These
                    slim fit, mid-rise jeans are made from a non-stretchable
                    cotton blend fabric. They feature a classic 5-pocket design
                    and have a regular length.
                  </p>

                  <h2 className="text-xl sm:text-2xl font-medium my-2">
                    Size & Fit
                  </h2>
                  <ul className="list-disc list-inside">
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

                  <h2 className="text-xl sm:text-2xl font-medium my-2">
                    Material & Care
                  </h2>
                  <p className="text-gray-700">
                    <span className="font-semibold">Material:</span> Cotton
                    Blend
                    <br />
                    <span className="font-semibold">Care:</span> Machine Wash
                  </p>
                </div>
              </div>
              <div className="my-1">
                <h3 className="text-gray-900 text-lg font-medium mb-3">
                  Return and Replacement Policy
                </h3>
                <p className="leading-relaxed flex items-center">
                  We offer a 10-day return and replacement policy for all our
                  products.
                  <span
                    onClick={() => setIsOpen(true)}
                    className="cursor-pointer mx-1"
                  >
                    <AiOutlineInfoCircle />
                  </span>
                  <Modal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    hasCloseButton={true}
                    classes="max-w-2xl"
                  >
                    <h4 className="mb-2 border-b py-4 px-5 text-lg font-medium">
                      Replacement Policy
                    </h4>
                    <div className="px-5 py-4">
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
