import React from "react";
import { HashLink } from "react-router-hash-link";
import Delivery from "../img/delivery.png";
// import HeroBg from "../img/heroBg.png";
import homepgimg1 from "../img/homepgimg1.jpg";
// import I1 from "../img/i1.png";

const HomeContainer = () => {
  return (
    <section
      id="home"
      className="grid grid-cols-1 md:grid-cols-2 md:px-16 gap-2 w-full"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center justify-center gap-2 px-4 py-1 bg-orange-100 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Just Loving it !! 😋
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="Delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] md:text-[4.5rem] text-center md:text-left font-bold tracking-wide text-headingColor">
          Grab our delicious cuisines at{" "}
          <span className="text-orange-600 text-[3rem] md:text-[5rem] ">
            Hotel Mannat
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          "Indulge in delicious flavors and comfortable dining at our cozy
          restaurant. From classic favorites to innovative creations, our menu
          offers something for everyone. Come join us for a memorable meal."
        </p>
        <HashLink to="#Menu">
          <button
            type="button"
            className="bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto"
            href=""
          >
            Order Now
          </button>
        </HashLink>
      </div>
      {/*  */}
      {/* Column 2 */}
      <div className="py-2 flex-1 flex items-center">
        <img
          src={homepgimg1}
          alt="homepgimg1"
          className="ml-auto h-420 w-full md:h-[870px] md:w-auto rounded-t-[100px]"
        />
        {/* HeroBg */}
      </div>
    </section>
  );
};

export default HomeContainer;
