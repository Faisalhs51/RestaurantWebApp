import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { motion } from "framer-motion";
import CartItemHorizontal from "./CartItemHorizontal";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import EmptyCart from "../img/emptyCart.svg";

const CartContainer = () => {
  const [{ cartShow, cartItems }, dispatch] = useStateValue();
  const [flag, setFlag] = useState(1);
  const [tot, setTot] = useState(0);

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  const clearCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: [],
    });

    localStorage.setItem("cartItems", JSON.stringify([]));
  };

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.qty * item.price;
    }, 0);
    setTot(totalPrice);
    // console.log(tot);
  }, [tot, flag]);

  return (
    <div className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]">
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 0.5 }} onClick={showCart}>
          {/* onClick={ } */}
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Cart</p>
        <motion.p
          whileTap={{ scale: 1.5 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md duration-100 ease-in-out transition-all cursor-pointer text-textColor text-base"
          onClick={clearCart}
        >
          Clear <RiRefreshFill />
        </motion.p>
      </div>
      {/* Components Section */}
      {cartItems && cartItems.length > 0 ? (
        <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
          <div className="w-full h-[53%] gap-2 md:h-[60%] md:gap-4 px-6 py-10 flex flex-col  overflow-y-scroll scrollbar-none ">
            {/* overflow-y-scroll */}
            {/* <CartItemHorizontal />
          <CartItemHorizontal /> */}
            {cartItems &&
              cartItems.length > 0 &&
              cartItems.map((item) => (
                <CartItemHorizontal
                  key={item._id}
                  item={item}
                  setFlag={setFlag}
                  flag={flag}
                />
              ))}
          </div>
          {/* Bottom Calculation CheckOut */}
          <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center gap-2 md:gap-4 px-8 py-2 mt-5">
            {/*  */}
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Sub Total</p>
              <p className="text-gray-400 text-lg">Rs. {tot}</p>
            </div>
            {/*  */}
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Service Charge</p>
              <p className="text-gray-400 text-lg">Rs. 100</p>
            </div>
            {/*  */}
            <div className="w-full border-b border-gray-600 my-2"></div>
            {/*  */}
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Total</p>
              <p className="text-gray-400 text-lg">Rs. {tot + 100}</p>
            </div>
            {/*  */}
            <motion.button
              whileTap={{ scale: 0.8 }}
              type="button"
              className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg transition-all duration-150 ease-out"
            >
              Check Out
            </motion.button>
          </div>
          {/* End Bottom Content */}
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <img src={EmptyCart} className="w-300" alt="" />
          <p className="text-xl text-textColor font-semibold">
            Add some items to your cart
          </p>
        </div>
      )}
    </div>
  );
};

export default CartContainer;