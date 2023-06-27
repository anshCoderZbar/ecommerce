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
      <div className="flex mb-2 relative max-w-max">
        <input
          type="number"
          placeholder="Enter Pin Code"
          value={pinCode}
          onChange={handleInputChange}
          disabled={pincodeData ? true : false}
          maxLength={6}
          className={`px-4 py-2 border w-full sm:w-64 border-[#e6e6e6] rounded outline-none`}
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
              className="px-4 absolute right-0 inset-y-0.5 text-red-500 font-medium rounded-r-md "
            >
              Check
            </button>
          )
        )}
        {pincodeData && (
          <button
            type="submit"
            onClick={handleChange}
            className="px-4 absolute right-0 inset-y-0.5 text-red-500 font-medium rounded-r-md "
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
        <span className="text-xs">
          Please enter PIN code to check delivery availability
        </span>
      )}
      {!isValid && isValid !== null && (
        <p className="text-red-500">Invalid Pin Code</p>
      )}
    </form>
  );
};
