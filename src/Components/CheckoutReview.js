import React, { useEffect, useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
// import ListOrderedItems from "./ListOrderedItems";
import { CheckoutItemList } from "./";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CheckoutReview() {
  const [{ checkoutShow, user }, dispatch] = useStateValue();
  // const [coins, setCoins] = useState(0);
  const [total, setTotal] = useState(0);
  const [isCheck, setIsCheck] = useState(false);
  //   const [showModal, setShowModal] = React.useState(showModal1);
  let navigate = useNavigate();

  const handleToggle = () => {
    dispatch({
      type: actionType.SET_DISCOUNT,
      discount: !isCheck,
    });
    setIsCheck(!isCheck);
  };

  const setShowModal = (e) => {
    dispatch({
      type: actionType.SET_CHECKOUTSHOW,
      checkoutShow: !checkoutShow,
    });
  };

  const goCheckout = () => {
    if (isCheck) localStorage.setItem("coin", user.coins);
    else localStorage.setItem("coin", 0);
    navigate("/payment");
  };

  useEffect(() => {
    // const fetchData = async () => {
    //   await axios
    //     .get(`http://localhost:5000/api/customer/getUser/${user.email}`)
    //     .then((res) => {
    //       dispatch({
    //         type: actionType.SET_USER,
    //         user: { ...user, ...{ coins: res.data.coins } },
    //       });
    //       setCoins(res.data.coins);
    //     });
    // };

    const getTotal = async () => {
      await axios
        .get(`http://localhost:5000/api/bill/${user.email}`)
        .then((res) => {
          // console.log(res.data);
          setTotal(res.data);
        });
    };

    getTotal();

    // fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 scrollbar-none outline-none focus:outline-none h-685">
        <div className="relative w-340 my-6 mx-auto md:w-508 lg:w-656 h-510">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Review Order</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className="my-1 -mt-5 text-slate-500 text-lg leading-relaxed overflow-auto">
                {/* Model Table title row */}
                <div className="">
                  {/* Table Heading --> Name ,Quantity, Price */}
                  <div className="grid grid-cols-4 md:grid-cols-5 pt-2 pl-2 text-headingColor font-extrabold">
                    <div className="col-span-2 md:col-span-3">Item Name</div>
                    <div className="text-center md:text-right pr-3">Q</div>
                    <div className="text-center md:text-right pr-5">Price</div>
                    <hr className="w-275 md:w-508 md:ml-8 h-1 mt-1 bg-gray-500 border-0 rounded "></hr>
                  </div>
                </div>
                {/* Closing Model Table title row */}
                {/* Passing List of Items that is ordered */}
                {/* {data &&
                  data.map((elm) => {
                    return <CheckoutItemList item={elm} />;
                  })} */}
                <CheckoutItemList />
                {/* <CheckoutItemList />
                <CheckoutItemList />
                <CheckoutItemList />
                <CheckoutItemList />
                <CheckoutItemList />
                <CheckoutItemList />
                <CheckoutItemList />
                <CheckoutItemList />
                <CheckoutItemList />
                <CheckoutItemList />
                <CheckoutItemList /> */}
                {/* Closing Passing List of Items that is ordered */}
                <div className="grid grid-cols-4 md:grid-cols-5 pt-2 pl-2">
                  <div className="col-span-2 md:col-span-3 capitalize text-center">
                    Service Charge
                  </div>
                  <div className="text-center md:text-right pr-3"></div>
                  <div className="text-center md:text-right pr-5">100</div>
                  <hr className="w-48 md:w-225 h-1 mt-1 ml-5 bg-slate-300 border-0 rounded "></hr>
                </div>
              </div>
              <div className="grid grid-cols-4 md:grid-cols-5 pt-2 pl-2 pb-2 text-headingColor font-extrabold bg-gray-400 rounded-md">
                <div className="col-span-2 md:col-span-3 text-center">
                  TOTAL
                </div>
                <div className="text-center md:text-right pr-3"></div>
                <div className="text-center md:text-right pr-5">
                  {isCheck ? (
                    <>
                      {" "}
                      {total + 100 - user.coins / 10 <= 100 ? (
                        <>100</>
                      ) : (
                        <>&#8377; {total + 100 - user.coins / 10}</>
                      )}
                    </>
                  ) : (
                    <>&#8377; {total + 100}</>
                  )}
                </div>
              </div>
              {user.coins > 500 && (
                <div className="mt-4 text-xl">
                  <input
                    type="checkbox"
                    checked={isCheck}
                    onChange={handleToggle}
                    className="w-4 h-4"
                  ></input>
                  <label className="pl-2 font-bold text-textColor">
                    Use Dream Coins
                  </label>
                </div>
              )}
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={goCheckout}
              >
                Continue to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
