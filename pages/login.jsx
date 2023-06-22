import { Layout } from "app/layout";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "app/auth/validation";
import { FormInput } from "components/Form-input";
import { ErrorMessage } from "components/Error-components/ErrorMessage";

export default function login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <main>
      <Layout>
        <div className="bg-white dark:bg-dark-background">
          <div className="w-full md:w-2/4 mx-auto py-5">
            <div className="text-center my-10 ">
              <Link
                href="/login"
                className="font-semibold py-3 px-5 leading-none uppercase transition-all text-red-500  text-base md:text-md lg:text-lg"
              >
                Login
              </Link>
              <span className="inline-block mx-2">|</span>
              <Link
                href="/register"
                className="font-semibold py-3 px-5 leading-none uppercase transition-all  text-base md:text-md lg:text-lg"
              >
                Register
              </Link>
            </div>

            <div className="p-8 md:p-16 shadow-lg max-w-4xl mx-auto">
              <button className="border w-full p-3 rounded-full hover:bg-red-200 dark:hover:bg-red-950">
                <span className="flex items-center gap-3 font-base justify-center">
                  <FcGoogle /> Sign in with Google
                </span>
              </button>
              <div className="flex items-center my-8">
                <hr className="flex-grow border-[#e6e6e6] border-t-[1px] mr-4" />
                <span className="text-black dark:text-white font-semibold text-lg">
                  OR
                </span>
                <hr className="flex-grow border-[#e6e6e6] border-t-[1px] ml-4" />
              </div>
              <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">
                  <FormInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    {...register("email")}
                  />
                  {errors?.email?.message && (
                    <ErrorMessage message={errors?.email?.message} />
                  )}
                </div>
                <div className="mb-5">
                  <FormInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="false"
                    {...register("password")}
                  />
                  {errors?.password?.message && (
                    <ErrorMessage message={errors?.password?.message} />
                  )}
                </div>
                <input
                  type="submit"
                  value="Login"
                  className="inline-block leading-none uppercase text-white text-sm bg-black px-5 py-4 transition-all dark:bg-red-900 hover:bg-red-500"
                />
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
