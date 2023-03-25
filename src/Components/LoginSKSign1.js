import React from "react";
import LoginSkForm from "./LoginSkForm";

const LoginSKSign1 = () => {
  return (
    <>
      <div className="flex w-screen h-screen">
        {/* Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center ">
          <LoginSkForm />
        </div>
        {/* Closed Form */}
        {/* Animation */}
        <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
          <div className="w-60 h-60 bg-gradient-to-tr from-emerald-500 to-emerald-800 rounded-full animate-bounce"></div>
          {/*  */}
          <div className="w-full absolute h-1/2 bottom-0 bg-white/10 backdrop-blur-2xl"></div>
        </div>
        {/* Closed Animation */}
      </div>
    </>
  );
};

export default LoginSKSign1;
