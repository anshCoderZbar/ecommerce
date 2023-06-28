import React, { useState } from "react";
import axios from "axios";
import { LoadingIcon } from "app/icons";

export const Pincode = () => {
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [pincodeData, setPincodeData] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setPinCode(event.target.value.slice(0, 6));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValidPinCode = validatePinCode(pinCode);
    setIsValid(isValidPinCode);
    if (isValidPinCode) {
      setLoading(true);
      axios
        .post("/api/pincode", {
          pincode: pinCode,
        })
        .then((res) => {
          setPincodeData(res?.data?.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err?.response?.data);
          setLoading(false);
        });
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setPincodeData("");
    setPinCode("");
    setError("");
  };
  const validatePinCode = (pinCode) => {
    return /^\d{6}$/.test(pinCode);
  };
  return (
    <form>
      <div className="relative mb-2 flex max-w-max">
        <input
          type="number"
          placeholder="Enter Pin Code"
          value={pinCode}
          onChange={handleInputChange}
          disabled={pincodeData ? true : false}
          maxLength={6}
          className={`w-full rounded border border-[#e6e6e6] bg-transparent px-4 py-2 outline-none dark:text-gray-100 sm:w-64 `}
        />
        {loading ? (
          <div className="absolute right-0 top-1">
            <LoadingIcon />
          </div>
        ) : (
          !pincodeData && (
            <button
              type="submit"
              onClick={handleSubmit}
              className="absolute inset-y-0.5 right-0 rounded-r-md px-4 font-medium text-red-500"
            >
              Check
            </button>
          )
        )}
        {pincodeData && (
          <button
            type="submit"
            onClick={handleChange}
            className="absolute inset-y-0.5 right-0 rounded-r-md px-4 font-medium text-red-500 "
          >
            Change
          </button>
        )}
      </div>
      {pincodeData ? (
        <h2 className="text-green-500">
          Delivered to : {pincodeData?.Districtname},{pincodeData?.statename}
        </h2>
      ) : (
        <h2 className="text-red-500">{error?.error}</h2>
      )}
      {!pincodeData && (
        <span className="text-xs dark:text-gray-100">
          Please enter PIN code to check delivery availability
        </span>
      )}
      {!isValid && isValid !== null && (
        <p className="text-red-500">Invalid Pin Code</p>
      )}
    </form>
  );
};
