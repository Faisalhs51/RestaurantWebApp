import React from "react";
import { Link } from "react-router-dom";

const LoginSkForm = () => {
  return (
    <div className="bg-white px-10 py-20 border-2 border-gray-200">
      <h1 className="text-5xl font-semibold">
        Hotel StoreKeeper, Welcome to your Kitchen :P
      </h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        {" "}
        Please enter your details{" "}
      </p>
      {/*  */}
      <div className="mt-8 ">
        {/*Email  */}
        <div className="">
          <label className="text-lg font-medium">Email</label>
          <input
            type="text"
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter Your Email"
          />
        </div>
        {/* closed Email  */}
        <br />
        {/* pswd  */}
        <div className="">
          <label className="text-lg font-medium">Password</label>
          <input
            type="password"
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter Your Password"
          />
        </div>
        {/* closed pswd  */}
        {/*  */}
        {/* Sign IN */}
        <Link to="/store">
          <div className="mt-8 flex flex-col gap-y-4">
            {/* normal Sign in */}
            <button className="  active:scale-[.75] active:duration-150 transition-all hover:scale-[1.1] py-3 rounded-xl bg-emerald-500 text-white text-lg font-bold ">
              Sign in
            </button>
            {/* Closed normal Sign in */}
            {/*  */}
          </div>
        </Link>
        {/* Closed Sign IN */}
        <br />
        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium text-base">Are you an User,</p>
          <Link to="/user">
            <button className="text-emerald-500 text-base font-bold ml-2">
              User Login
            </button>
          </Link>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default LoginSkForm;
