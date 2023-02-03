import React from "react";
import img1 from "../img/i6.png";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

const TSItemCard = ({ tsdata }) => {
  return (
    <>
      {tsdata.map((currElm) => {
        return (
          <>
            <div className="w-300 min-w-210 md:w-340 h-auto my-12 backdrop-blur-lg rounded-lg p-2 hover:drop-shadow-xl bg-orange-50">
              <div className="w-full flex items-center justify-between">
                <motion.img
                  src={img1}
                  whileHover={{ scale: 1.2 }}
                  alt="image1"
                  className="w-40 -mt-8"
                />
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-lg"
                >
                  <MdShoppingBasket className="text-white" />
                </motion.div>
              </div>
              <div className="w-full flex flex-col items-end justify-end">
                <p className="text-textColor font-semibold text-base md:text-lg">
                {currElm.itemName}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  <span>{currElm.waitingTime}</span> min
                </p>
                <div className="flex items-center gap-8">
                  <p className="text-lg text-headingColor font-semibold">
                    <span className="text-sm text-red-500">Rs. </span>{currElm.price}
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default TSItemCard;
