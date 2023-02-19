import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import img111 from "../img/c7.png";
import { BiMinus, BiPlus } from "react-icons/bi";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";

const CartItemHorizontal = ({ item, setFlag, flag }) => {
  let items = [];
  const [{ cartItems }, dispatch] = useStateValue();
  const [qty, setQty] = useState(item.qty);

  const cartDispatch = () => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
  };

  const updateQty = (action, id) => {
    if (action === "add") {
      setQty(qty + 1);
      cartItems.map((item) => {
        if (item._id === id) {
          item.qty += 1;
          setFlag(flag + 1);
        }
      });
      cartDispatch();
    } else {
      // initial state value is one so you need to check if 1 then remove it
      if (qty === 1) {
        items = cartItems.filter((item) => item._id !== id);
        setFlag(flag + 1);
        cartDispatch();
      } else {
        setQty(qty - 1);
        cartItems.map((item) => {
          if (item._id === id) {
            item.qty -= 1;
            setFlag(flag + 1);
          }
        });
        cartDispatch();
      }
    }
  };

  useEffect(() => {
    items = cartItems;
  }, [qty, items]);

  const base64String = btoa(
    String.fromCharCode(...new Uint8Array(item.image.data.data))
  );
  return (
    <>
      {/* Horizontal Cart Item */}
      <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-3 hover:shadow-2xl">
        <img
          className="w-20 h-20 max-w-[60px] rounded-full object-contain"
          src={`data:image/png;base64,${base64String}`}
          alt={item.name}
        />
        {/*  */}
        <div className="flex flex-col gap-2">
          <p className="text-base text-gray-50">{item?.name}</p>
          <p className="text-sm block text-gray-300 font-semibold">
            Rs. {parseFloat(item?.price) * qty}
          </p>
        </div>
        {/*  */}
        <div className="group flex items-center gap-2 ml-auto cursor-pointer">
          <motion.div
            whileTap={{ scale: 0.75 }}
            onClick={() => updateQty("remove", item?._id)}
          >
            <BiMinus className="text-gray-50" />
          </motion.div>
          <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
            {item.qty}
          </p>
          <motion.div
            whileTap={{ scale: 0.75 }}
            onClick={() => updateQty("add", item?._id)}
          >
            <BiPlus className="text-gray-50" />
          </motion.div>
        </div>
        {/*  */}
      </div>
      {/* End Horizontal Section */}
    </>
  );
};

export default CartItemHorizontal;
