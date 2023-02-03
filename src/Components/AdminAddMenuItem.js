import React from "react";
import {
  MdFastfood,
  MdCloudUpload,
  MdAvTimer,
  MdAttachMoney,
} from "react-icons/md";

const AdminAddMenuItem = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between mt-16">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:w-32 before:h-1 before:-bottom-4 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Add Food Item in Menu Card 
          </p>
        </div>
      {/*  */}
      <div className="w-full min-h-screen flex items-center justify-center -mt-11">
        <div className="w-[90%] md:w-[75%] border border-gray-400 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
          {/*Title Input Field */}
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdFastfood className="text-xl text-gray-700" />
            <input
              type="text"
              required
              placeholder="Give Me a Title..."
              className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>
          {/* Closed Title Input Field */}
          {/* Select Category  */}
          <div className="w-full">
            <select className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer">
              <option className="bg-white">Select Category</option>
              <option className="text-base border-0 outline-none lowercase bg-white text-headingColor">
                breakfast
              </option>
              <option className="text-base border-0 outline-none lowercase bg-white text-headingColor">
                starter
              </option>
              <option className="text-base border-0 outline-none lowercase bg-white text-headingColor">
                mughlai
              </option>
              <option className="text-base border-0 outline-none lowercase bg-white text-headingColor">
                chinese
              </option>
              <option className="text-base border-0 outline-none lowercase bg-white text-headingColor">
                dessert
              </option>
              <option className="text-base border-0 outline-none lowercase bg-white text-headingColor">
                drinks
              </option>
            </select>
          </div>
          {/*Closed Select Category  */}
          {/* Upload Image */}
          <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg">
            <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
              <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                <MdCloudUpload className="text-gray-500 text-8xl hover:text-gray-700" />
                <p className="text-gray-500 text-3xl hover:text-gray-700 text-center">
                  Click Here to Upload
                </p>
              </div>
              <input
                type="file"
                accept="image/*"
                name="uploadImage"
                className="w-0 h-0"
              />
            </label>
          </div>
          {/* Closed Upload Image */}
          {/* time+price flex */}
          <div className="w-full flex flex-col md:flex-row items-center gap-3">
          {/* Waiting Time */}
            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
              <MdAvTimer className="text-gray-700 text-2xl" />
              <input
                type="text"
                className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                required
                placeholder="Waiting Time"
              />
            </div>
            {/*Closed Waiting Time */}
            {/*  */}
            {/* Price */}
            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
              <MdAttachMoney className="text-gray-700 text-2xl" />
              <input
                type="text"
                className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                required
                placeholder="Price"
              />
            </div>
            {/* Closed Price */}
          </div>
          {/* Closed time+price flex */}

          {/* Button */}
          <div className="flex items-center w-full">
            <button
              type="button"
              className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
            >
              Save
            </button>
          </div>
          {/* Closed Button */}
        </div>
      </div>
    </>
  );
};

export default AdminAddMenuItem;
