import React, { useEffect } from "react";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { MdShoppingBasket, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { HashLink } from "react-router-hash-link";
import axios from "axios";
import swal from "sweetalert";

const Header = () => {
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);
  const [coins, setCoins] = useState(0);

  // const [user, setUser] = useState();

  // useEffect(() => {
  //   setUser(JSON.parse(localStorage.getItem("userToken")));
  //   // console.log(cartItems);
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:5000/api/customer/getUser/${user.email}`)
        .then((res) => {
          dispatch({
            type: actionType.SET_USER,
            user: { ...user, ...{ coins: res.data.coins } },
          });
          setCoins(res.data.coins);
        });
    };

    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const login = async () => {
    setIsMenu(!isMenu);
  };

  const logOut = async () => {
    setIsMenu(false);
    await axios
      .get(`http://localhost:5000/api/onlineCart/${user.email}`)
      .then((res) => {
        // console.log(res);
        if (res.status === 204) {
          // dispatch({
          //   type: actionType.SET_USER,
          //   user: null,
          // });
          localStorage.clear();
          window.location.reload(true);
        } else {
          swal({ text: "You cannot Logout before Checkout.", icon: "warning" });
        }
      });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 -ml-4 -mt-4 bg-primary">
      {/*desktop and Tablet*/}
      <div className="hidden md:flex w-full h-full">
        <HashLink to={"#home"} className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-10 object-cover" />
          <p className="text-headingColor text-xl font-bold">Hotel Mannat</p>
        </HashLink>

        <div className="flex items-center gap-8 ml-auto">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8"
          >
            <li className="text-base text-headingColor hover:text-textColor duration-100 transition-all ease-in-out cursor-pointer ">
              {/* <Link to='#home'>Home</Link> */}
              <HashLink to="#home">Home</HashLink>
            </li>
            <li className="text-base text-headingColor hover:text-textColor duration-100 transition-all ease-in-out cursor-pointer">
              <HashLink to="#Menu">Menu</HashLink>
            </li>
            <li className="text-base text-headingColor hover:text-textColor duration-100 transition-all ease-in-out cursor-pointer">
              {/* <a href="#aboutus">About Us</a> */}
              <HashLink to="#aboutus">About</HashLink>
            </li>
            <li className="text-base text-headingColor hover:text-textColor duration-100 transition-all ease-in-out cursor-pointer">
              {/* <a href="#contactus">Contact Us</a> */}
              <HashLink to="#contactus">Contact Us</HashLink>
            </li>
          </motion.ul>
          <div
            className="relative flex items-center justify-center"
            onClick={showCart}
          >
            <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
            {cartItems && cartItems.length > 0 && (
              <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )}
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.picture : Avatar}
              alt="userProfile"
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-48 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
              >
                {/* <Link to={"/"}> */}
                <p className=" m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 hover:bg-gray-300 text-red-600 text-base">
                  Dream Coins: <span className="font-extrabold">{coins}</span>
                </p>
                <p
                  className=" px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base "
                  onClick={logOut}
                >
                  LogOut <MdLogout />
                </p>
                {/* </Link> */}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/*mobile*/}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <div
          className="relative flex items-center justify-center"
          onClick={showCart}
        >
          <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
          {cartItems && cartItems.length > 0 && (
            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">
                {cartItems.length}
              </p>
            </div>
          )}
        </div>
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-10 object-cover" />
          <p className="text-headingColor text-xl font-bold">Hotel Mannat</p>
        </Link>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.picture : Avatar}
            alt="userProfile"
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
            >
              <ul className="flex flex-col">
                <li
                  className="text-base text-headingColor hover:text-textColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2 "
                  onClick={() => setIsMenu(false)}
                >
                  <HashLink to="#home">Home</HashLink>
                </li>
                <li
                  className="text-base text-headingColor hover:text-textColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  <HashLink to="#Menu">Menu</HashLink>
                </li>
                <li
                  className="text-base text-headingColor hover:text-textColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  <HashLink to="#aboutus">About</HashLink>
                </li>
                <li
                  className="text-base text-headingColor hover:text-textColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  <HashLink to="#contactus">Contact Us</HashLink>
                </li>
              </ul>
              {/* <Link to={"/LoginRegisterPage"}> */}
              <p className=" m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-100 gap-3 hover:bg-gray-200 text-red-600 text-base text-center">
                Dream Coins: <span className="font-extrabold">{coins}</span>
              </p>
              <p
                className=" m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base "
                onClick={logOut}
              >
                LogOut <MdLogout />
              </p>
              {/* </Link> */}
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
