import React, { forwardRef } from "react";

export const FormInput = forwardRef((props, ref) => {
  const { type, name, extraClass, placeholder, ...rest } = props;
  return (
    <input
      ref={ref}
      type={type}
      name={name}
      className={`text-dark h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current placeholder:font-semibold focus:outline-none dark:border-white dark:bg-dark-background ${extraClass}`}
      placeholder={placeholder}
      {...rest}
    />
  );
});
