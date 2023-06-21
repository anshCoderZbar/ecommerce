import React, { forwardRef } from "react";

export const FormInput = forwardRef((props, ref) => {
  const { type, name, extraClass, placeholder, ...rest } = props;
  return (
    <input
      ref={ref}
      type={type}
      name={name}
      className={`border border-solid border-gray-300 dark:border-white dark:bg-gray-800 w-full py-1 px-5 placeholder-current text-dark h-12 focus:outline-none text-base placeholder:font-semibold ${extraClass}`}
      placeholder={placeholder}
      {...rest}
    />
  );
});
