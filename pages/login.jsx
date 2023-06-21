import { Layout } from "app/layout";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function login() {
  return (
    <main>
      <Layout>
        <div className="w-full md:w-2/4 mx-auto my-5">
          <div className="text-center my-10">
            <Link
              href="/login"
              className="font-semibold py-3 px-5 leading-none uppercase transition-all text-red-500  text-base md:text-md lg:text-lg"
            >
              Login
            </Link>
            <span className="inline-block mx-2">|</span>
            <Link
              href="/register"
              className="font-semibold py-3 px-5 leading-none uppercase transition-all hover:text-red-500 text-base md:text-md lg:text-lg"
            >
              Register
            </Link>
          </div>

          <div className="p-8 md:p-16 shadow max-w-4xl mx-auto">
            <button className="border w-full p-3 rounded-full hover:bg-red-200">
              <span className="flex items-center gap-3 font-base justify-center">
                <FcGoogle /> Sign in with Google
              </span>
            </button>
            <div className="flex items-center my-8">
              <hr className="flex-grow border-[#e6e6e6] border-t-[1px] mr-4" />
              <span className="text-black font-semibold text-lg">OR</span>
              <hr className="flex-grow border-[#e6e6e6] border-t-[1px] ml-4" />
            </div>
            <form>
              <div className="mb-2">
                <input
                  type="email"
                  id="email"
                  className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base placeholder:font-semibold"
                  placeholder="Email"
                />
              </div>
              <div className="mb-2">
                <input
                  type="password"
                  id="password"
                  className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base placeholder:font-semibold"
                  placeholder="Password"
                />
              </div>
              <button className="inline-block leading-none uppercase text-white text-sm bg-black px-5 py-4 transition-all hover:bg-red-500">
                Login
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </main>
  );
}
