import React from "react";
import Link from "next/link";
import Head from "next/head";

import { Layout } from "app/layout";
import Image from "next/image";

import { RxArrowLeft } from "react-icons/rx";

import bgImg from "app/assets/banner/assessoreisbg.jpg";

export default function accessories() {
  return (
    <Layout>
      <Head>
        <title>Coming Soon | Accessories Page</title>
      </Head>

      <div className="relative z-30 h-auto w-auto bg-white dark:bg-dark-background">
        <Image
          src={bgImg}
          alt="bg-img"
          quality={100}
          fill={true}
          className="opacity-20 dark:opacity-30"
        />
        <div className="container mx-auto">
          <div className="flex  h-[50vh] w-full flex-col items-center justify-center md:h-[80vh] lg:h-screen">
            <h1 className="mb-4 text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
              Coming Soon!
            </h1>
            <p className="mb-4 text-base md:text-lg ">
              Stay tuned for exciting accessories.
            </p>
            <p className="te mb-4 text-center text-base md:text-lg ">
              Welcome to our accessories page, where we are preparing to bring
              you a fantastic range of accessories to enhance your style,
              convenience, and overall experience. We're working hard behind the
              scenes to curate a collection that will cater to your diverse
              needs and preferences.
            </p>
            <Link href="/">
              <span className="flex items-center text-blue-500 underline">
                <RxArrowLeft />
                Go Back
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
