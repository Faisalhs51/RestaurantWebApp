import React from "react";
import FBfeedbackCart from "./FBfeedbackCart";

const FBfeedback = () => {
  return (
    <>
      <div>
        {/* Heading */}
        <div className="text-center mt-4 mb-6">
          <h1 className="mb-4 text-3xl font-extrabold text-emerald-700 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Feedback
            </span>{" "}
            Module 📑🖋️
          </h1>
        </div>
        {/* Closed Heading */}
        {/* Cart Holder */}
        <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-2">
          <FBfeedbackCart />
          {/* <FBfeedbackCart />
          <FBfeedbackCart />
          <FBfeedbackCart />
          <FBfeedbackCart /> */}
        </div>
        {/* Closed Cart Holder */}
      </div>
    </>
  );
};

export default FBfeedback;
