import { Layout } from "app/layout";
import { FormInput } from "components/Form-input";
import React from "react";
import { useForm } from "react-hook-form";
import { RiDeleteBinLine } from "react-icons/ri";

export default function address() {
  const savedAddresses = [
    {
      id: 1,
      name: "John Doe",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      zipcode: "10001",
    },
    {
      id: 2,
      name: "Jane Smith",
      address: "456 Elm St",
      city: "San Francisco",
      state: "CA",
      zipcode: "94101",
    },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main>
      <Layout>
        <div className="bg-white dark:bg-dark-background">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h2 className="mb-2 text-lg font-bold">Saved Address</h2>
                {savedAddresses.map((address) => (
                  <div
                    key={address.id}
                    className="mb-3 flex items-center justify-between border border-[#e6e6e6] p-4 shadow-lg"
                  >
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="selectedAddress"
                        value={address.id}
                        className="mr-2"
                      />
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">
                          {address.name}
                        </h3>
                        <p className="mb-2">{address.address}</p>
                        <p className="mb-2">
                          {address.city}, {address.state} {address.zipcode}
                        </p>
                      </div>
                    </label>
                    <div className="text-2xl text-red-500 ">
                      <RiDeleteBinLine />
                    </div>
                  </div>
                ))}
                <button className="w-full  bg-black py-4 text-lg capitalize text-white transition-all hover:bg-red-500 dark:bg-red-900">
                  Use this address
                </button>
              </div>
              <div>
                <h2 className="mb-2 text-lg font-bold">Add New Address</h2>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="border border-[#e6e6e6] p-6 shadow-lg"
                >
                  <div className="mb-4">
                    <FormInput
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      {...register("name")}
                    />
                  </div>
                  <div className="mb-4">
                    <FormInput
                      type="number"
                      name="phone_number"
                      placeholder="Phone Number"
                      {...register("name")}
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      id="address"
                      className="w-full border border-gray-300 bg-transparent px-4 py-2 text-black outline-none placeholder:font-semibold placeholder:text-black dark:border-white dark:text-white dark:placeholder:text-white"
                      placeholder="Delivery Address"
                      rows="4"
                      {...register("address")}
                    />
                  </div>
                  <div className="mb-4">
                    <FormInput
                      type="text"
                      name="Zip code"
                      placeholder="Zip code"
                      {...register("Zip code")}
                    />
                  </div>
                  <div className="mb-4">
                    <FormInput
                      type="text"
                      name="City"
                      placeholder="City"
                      {...register("City")}
                    />
                  </div>
                  <div className="mb-4">
                    <FormInput
                      type="text"
                      name="state"
                      placeholder="State"
                      {...register("state")}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Save Address"
                    className="inline-block bg-black px-5 py-4 text-sm uppercase leading-none text-white transition-all hover:bg-red-500 dark:bg-red-900"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
