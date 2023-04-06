import React from "react";
import { useNavigate } from "react-router-dom";

const AdLink = () => {
  let navigate = useNavigate();

  const changePage = (str) => {
    navigate(`/${str}`);
  };
  return (
    <div>
      <div className="w-full flex flex-wrap items-center justify-around -mb-5">
        <button
          className="p-6 bg-gradient-to-r to-emerald-600 from-sky-400 rounded-md text-white border-black border-2 m-5 text-lg w-72"
          onClick={() => {
            changePage("feedback");
          }}
        >
          Go to Feedback page
        </button>
        <button
          className="p-6 bg-gradient-to-r to-orange-700 from-red-500 rounded-md text-white border-black border-2 m-5 text-lg w-72"
          onClick={() => {
            changePage("pay-via-cash");
          }}
        >
          Go to Billing page
        </button>
      </div>
    </div>
  );
};

export default AdLink;
