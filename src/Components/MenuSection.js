import React, { useEffect } from "react";
import MItemCard from "./MItemCard";
import { useState } from "react";
import { MdFastfood } from "react-icons/md";
import axios from "axios";

const MenuSection = () => {
  const [menudata, setmenudata] = useState([]);
  const [menu, setmenu] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/items")
      .then((res) => {
        let obj = res.data;
        // obj.qty = 0;
        for (let i of obj) {
          i.qty = 1;
        }
        setmenu(obj);
      })
      .catch((err) => console.log(err, "it has an error"));
  }, []);

  const filterItem = (category) => {
    const updatedList = menu.filter((currElm) => {
      return currElm.category === category;
    });
    setmenudata(updatedList);
  };

  return (
    <>
      <section id="MenuCard" className="w-full">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:w-32 before:h-1 before:-bottom-4 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Mannats Menu Card
          </p>
        </div>
      </section>
      <div
        id="FilterHeadings"
        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-14"
      >
        {/*  */}
        <div
          className="w-full flex items-center justify-start lg:justify-center gap-8 py-6"
          onClick={() => setmenudata(menu)}
        >
          <div className="group bg-card w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-red-500 duration-150 transition-all ease-in-out ">
            <div className="w-10 h-10 rounded-full bg-red-500 group-hover:bg-card flex items-center justify-center">
              <MdFastfood className="text-card group-hover:text-textColor text-lg" />
            </div>
            <p className="text-sm text-textColor group-hover:text-white">All</p>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div
          className="w-full flex items-center justify-start lg:justify-center gap-8 py-6"
          onClick={() => filterItem("breakfast")}
        >
          <div className="group bg-card w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-red-500 duration-150 transition-all ease-in-out ">
            <div className="w-10 h-10 rounded-full bg-red-500 group-hover:bg-card flex items-center justify-center">
              <MdFastfood className="text-card group-hover:text-textColor text-lg" />
            </div>
            <p className="text-sm text-textColor group-hover:text-white">
              Breakfast
            </p>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div
          className="w-full flex items-center justify-start lg:justify-center gap-8 py-6"
          onClick={() => filterItem("starter")}
        >
          <div className="group bg-card w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-red-500 duration-150 transition-all ease-in-out ">
            <div className="w-10 h-10 rounded-full bg-red-500 group-hover:bg-card flex items-center justify-center">
              <MdFastfood className="text-card group-hover:text-textColor text-lg" />
            </div>
            <p className="text-sm text-textColor group-hover:text-white">
              Starter
            </p>
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div
          className="w-full flex items-center justify-start lg:justify-center gap-8 py-6"
          onClick={() => filterItem("mughlai")}
        >
          <div className="group bg-card w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-red-500 duration-150 transition-all ease-in-out ">
            <div className="w-10 h-10 rounded-full bg-red-500 group-hover:bg-card flex items-center justify-center">
              <MdFastfood className="text-card group-hover:text-textColor text-lg" />
            </div>
            <p className="text-sm text-textColor group-hover:text-white">
              Mughlai
            </p>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div
          className="w-full flex items-center justify-start lg:justify-center gap-4 md:gap-8 py-6"
          onClick={() => filterItem("chinese")}
        >
          <div className="group bg-card w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-red-500 duration-150 transition-all ease-in-out ">
            <div className="w-10 h-10 rounded-full bg-red-500 group-hover:bg-card flex items-center justify-center">
              <MdFastfood className="text-card group-hover:text-textColor text-lg" />
            </div>
            <p className="text-sm text-textColor group-hover:text-white">
              Chinese
            </p>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div
          className="w-full flex items-center justify-start lg:justify-center gap-8 py-6"
          onClick={() => filterItem("dessert")}
        >
          <div className="group bg-card w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-red-500 duration-150 transition-all ease-in-out ">
            <div className="w-10 h-10 rounded-full bg-red-500 group-hover:bg-card flex items-center justify-center">
              <MdFastfood className="text-card group-hover:text-textColor text-lg" />
            </div>
            <p className="text-sm text-textColor group-hover:text-white">
              Dessert
            </p>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div
          className="w-full flex items-center justify-start lg:justify-center gap-8 py-6"
          onClick={() => filterItem("drinks")}
        >
          <div className="group bg-card w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-red-500 duration-150 transition-all ease-in-out ">
            <div className="w-10 h-10 rounded-full bg-red-500 group-hover:bg-card flex items-center justify-center">
              <MdFastfood className="text-card group-hover:text-textColor text-lg" />
            </div>
            <p className="text-sm text-textColor group-hover:text-white">
              Drinks
            </p>
          </div>
        </div>
        {/*  */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        <MItemCard menudata={menudata} />
      </div>
    </>
  );
};

export default MenuSection;
