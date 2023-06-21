import React from "react";

export const ErrorMessage = ({ message }) => {
  return (
    <>
      {message && (
        <p className="lowercase text-red-500 text-sm mt-1 dark:text-red-200">
          {message}
        </p>
      )}
    </>
  );
};
