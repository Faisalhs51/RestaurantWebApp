import React, { useEffect, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const MItemCard = ({ menudata }) => {
  const [items, setItems] = useState([]);
  const [{ cartItems }, dispatch] = useStateValue();

  const addtocart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  const add = () =>{
    
  }

  useEffect(() => {
    addtocart();
  }, [items]);

  return (
    <>
      {menudata.map((currElm) => {
        const base64String = btoa(
          String.fromCharCode(...new Uint8Array(currElm.image.data.data))
        );
        return (
          <>
            <div
              key={currElm?._id}
              className="w-300 min-w-210 md:w-340 h-auto my-12 backdrop-blur-lg rounded-lg p-2 hover:drop-shadow-xl bg-orange-50"
            >
              <div className="w-full flex items-center justify-between">
                <motion.img
                  src={`data:image/png;base64,${base64String}`}
                  whileHover={{ scale: 1.2 }}
                  alt="image1"
                  className="w-40 -mt-8"
                />
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-lg"
                  onClick={() => {
                    let f = false;
                    for (let i of cartItems) {
                      if (i._id === currElm._id) {
                        f = true;
                      }
                    }
                    if (!f) {
                      setItems([...cartItems, currElm]);
                    }
                  }}
                >
                  <MdShoppingBasket className="text-white" />
                </motion.div>
              </div>
              <div className="w-full flex flex-col items-end justify-end">
                <p className="text-textColor font-semibold text-base md:text-lg">
                  {currElm.name}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  <span>{currElm.est}</span> min
                </p>
                <div className="flex items-center gap-8">
                  <p className="text-lg text-headingColor font-semibold">
                    <span className="text-sm text-red-500">Rs. </span>
                    {currElm.price}
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

export default MItemCard;
