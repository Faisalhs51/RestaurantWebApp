import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { motion } from "framer-motion";
import CartItemHorizontal from "./CartItemHorizontal";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import EmptyCart from "../img/emptyCart.svg";
import swal from "sweetalert";
import axios from "axios";

const CartContainer = () => {
  const [{ cartShow, cartItems, checkoutShow, tableNo, user }, dispatch] =
    useStateValue();
  // const [showModal, setShowModal] = useState(false);
  const [flag, setFlag] = useState(1);
  const [tot, setTot] = useState(0);
  const [displayCheckout, setDisplayCheckout] = useState(true);

  const showModal = () => {
    dispatch({
      type: actionType.SET_CHECKOUTSHOW,
      checkoutShow: !checkoutShow,
    });
    showCart();
  };

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

  const addToCart = async (e) => {
    e.preventDefault();
    try {
      const cart = [];
      for (let i in cartItems) {
        // console.log(cartItems[i].name);
        cart.push({
          name: cartItems[i].name,
          price: cartItems[i].price,
          qty: cartItems[i].qty,
        });
      }
      // const em = JSON.parse(localStorage.getItem("userToken"));
      const em = user;
      // console.log(tableNo);
      const response = await fetch("http://localhost:5000/api/onlineCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: em.email,
          cart,
          tableno: tableNo,
          show: true,
        }),
      });

      await response.json();
      // console.log("faisal");
      // console.log(json);

      let max = {};
      for (let i of cartItems) {
        // console.log(i.est);
        if (i.category in max) {
          // console.log(max[i.category]);
          if (max[i.category] > i.est) {
            max[i.category] = i.est;
            // console.log(i.est);
          }
        } else {
          max[i.category] = i.est;
          // console.log(i.category in max);
          // console.log(max[i.category]);
        }
      }
      let maxEST = 0;
      for (let index in max) {
        if (max[index] > maxEST) maxEST = max[index];
      }
      // console.log(maxEST);

      // swal(`Order placed!!! Your Order will be ready within ${maxEST}min`);
      swal(
        "Order Placed!",
        `Your Order will be ready within ${maxEST}mins`,
        "success"
      );

      clearCart();
      showCart();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.qty * item.price;
    }, 0);
    setTot(totalPrice);
  }, [tot, flag, cartItems]);

  useEffect(() => {
    const isOnlineCart = async () => {
      await axios
        .get(`http://localhost:5000/api/onlineCart/${user.email}`)
        .then((res) => {
          // console.log(res.status);
          if (res.status === 204) {
            setDisplayCheckout(false);
          }
        });
    };

    isOnlineCart();
  });

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
          <div className="w-full h-[70%] gap-2 md:h-[70%] md:gap-4 px-6 py-10 flex flex-col  overflow-y-scroll scrollbar-none ">
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
          <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center gap-2 md:gap-4 px-8 py-2 ">
            {/*  */}
            {/* mt-24 */}
            {/* <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Sub Total</p>
              <p className="text-gray-400 text-lg">Rs. {tot}</p>
            </div> */}
            {/*  */}
            {/* <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Service Charge</p>
              <p className="text-gray-400 text-lg">Rs. 100</p>
            </div> */}
            {/*  */}
            {/* <div className="w-full border-b border-gray-600 my-2"></div> */}
            {/*  */}
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Total</p>
              <p className="text-gray-400 text-lg">&#8377; {tot}</p>
            </div>
            {/*  */}
            <motion.button
              whileTap={{ scale: 0.8 }}
              type="button"
              className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg transition-all duration-150 ease-out"
              onClick={addToCart}
            >
              Order Now
            </motion.button>
          </div>
          {/* End Bottom Content */}
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <img src={EmptyCart} className="w-300" alt="Cart" />
          <p className="text-xl text-textColor font-semibold">
            Add some items to your cart
            <br />
          </p>
          {displayCheckout && (
            <>
              <span className="text-center text-xl text-orange-600 font-semibold">
                OR
              </span>
              <button
                className="bg-orange-600 text-white active:bg-orange-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={
                  showModal
                  // setShowModal(false);
                  // <CheckoutReview showModal1={showModal}/>
                }
              >
                Check Out
              </button>
            </>
          )}
          {/* {checkoutShow && <CheckoutReview showModal1={showModal} />} */}
          {/* {checkoutShow && <CheckoutReview />} */}
        </div>
      )}
    </div>
  );
};

export default CartContainer;
