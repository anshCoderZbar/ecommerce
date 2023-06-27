import { Layout } from "app/layout";
import React, { useEffect, useState } from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
// import Pincode from "react-pincode";

import {
  BiShareAlt,
  BiChevronDown,
  BiSolidStar,
  BiSolidStarHalf,
} from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { useRouter } from "next/router";
import axios from "axios";

const ProductPage = () => {
  const [pincodeData, setPincodeData] = useState("");
  const router = useRouter();
  const { slug } = router.query;

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

  const [pinCode, setPinCode] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState("");
  const handleInputChange = (event) => {
    setPinCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPincodeData("");
    setError("");
    const isValidPinCode = validatePinCode(pinCode);
    setIsValid(isValidPinCode);
    if (isValidPinCode) {
      axios
        .post("/api/pincode", {
          pincode: pinCode,
        })
        .then((res) => setPincodeData(res?.data?.data))
        .catch((err) => setError(err?.response?.data));
    }
  };
  const validatePinCode = (pinCode) => {
    return /^\d{6}$/.test(pinCode);
  };

  return (
    <Layout>
      <div class="text-gray-700 body-font overflow-hidden bg-white">
        <div class="container md:px-5 lg:px-0  py-10 mx-auto">
          <div class=" mx-auto flex justify-center  flex-wrap">
            <ReactImageGallery
              showPlayButton={false}
              showNav={false}
              autoPlay={false}
              items={images}
            />
            <div class="lg:w-1/2 px-5 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 class="text-gray-900 text-2xl sm:text-3xl title-font font-medium mb-1">
                {slug?.replaceAll("_", " ")}
              </h1>
              <div class="flex  mb-4">
                <span class="flex items-center text-red-500">
                  <BiSolidStar />
                  <BiSolidStar />
                  <BiSolidStar />
                  <BiSolidStar />
                  <BiSolidStarHalf />
                  <span class="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <BiShareAlt />
                </span>
              </div>
              <p class="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div class="flex">
                  <span class="mr-3">Color</span>
                  <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button class="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div class="flex ml-6 items-center">
                  <span class="mr-3">Size</span>
                  <div class="relative">
                    <select class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <BiChevronDown />
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap justify-between items-center">
                <span class="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span>
                <div className="flex gap-1 sm:gap-3 items-center">
                  <button class="flex ml-auto text-sm sm:text-base px-3 text-white bg-red-500 border-0 py-2 sm:px-6 focus:outline-none hover:bg-red-600 uppercase rounded">
                    Buy Now
                  </button>
                  <button class="flex ml-auto text-sm sm:text-basetext-white px-3 text-white bg-red-500 border-0 py-2 sm:px-6 focus:outline-none hover:bg-red-600 uppercase rounded">
                    Add to cart
                  </button>
                  <button class="rounded-full w-10 h-10 bg-gray-100 p-0 border-0 inline-flex items-center justify-center text-lg text-gray-500 ml-4">
                    <CiHeart />
                  </button>
                </div>
              </div>
              <div className="my-5">
                <form onSubmit={handleSubmit}>
                  <div className="flex mb-4">
                    <input
                      type="text"
                      placeholder="Enter Pin Code"
                      value={pinCode}
                      onChange={handleInputChange}
                      className={`px-4 py-2 border border-gray-300 rounded-l-md outline-none ${
                        !isValid && "border-red-500"
                      } `}
                    />
                    <button
                      type="submit"
                      className="px-4 bg-red-500 text-white rounded-r-md hover:bg-red-600"
                    >
                      Check
                    </button>
                  </div>
                  {pincodeData ? (
                    <h2>
                      Delivered to : {pincodeData?.Districtname},
                      {pincodeData?.statename}
                    </h2>
                  ) : (
                    <h2>{error?.error}</h2>
                  )}
                  {!isValid && isValid !== null && (
                    <p className="text-red-500">Invalid Pin Code</p>
                  )}
                </form>
              </div>
              <div class="my-1">
                <h3 class="text-gray-900 text-lg font-medium mb-3">
                  Return and Replacement Policy
                </h3>
                <p class="leading-relaxed">
                  We offer a 10-day return and replacement policy for all our
                  products.
                  {/* If you are not satisfied with your purchase, you
                    can return the item within 10 days of delivery for a full
                    refund or a replacement. Please ensure that the item is
                    unused and in its original packaging. */}
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
