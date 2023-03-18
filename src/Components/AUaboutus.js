import React from "react";
import { AUhotelInfo } from "./";

const AUaboutus = () => {
  return (
    <>
      <br id="aboutus" />
      <br />
      <section className="w-full">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:w-32 before:h-1 before:-bottom-4 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            About Us
          </p>
        </div>
      </section>
      <br />
      <br />
      <div className="">
        <AUhotelInfo />
      </div>
    </>
  );
};

export default AUaboutus;
