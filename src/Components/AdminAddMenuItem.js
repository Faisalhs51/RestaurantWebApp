import React from "react";
import {
  MdFastfood,
  MdCloudUpload,
  MdAvTimer,
  MdAttachMoney,
} from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const AdminAddMenuItem = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("breakfast");
  const [price, setPrice] = useState();
  const [est, setEst] = useState();
  const [image, setImage] = useState("");

  const handleImage = (e) => {
    // console.log(e.target.files);
    let size = e.target.files[0].size / 1024;
    if (size > 31) {
      swal({ text: "Please upload Image less than 30kb", icon: "error" });
    } else {
      setImage(e.target.files[0]);
    }
    // console.log(image.name);
  };

  const saveIt = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("est", est);

    // console.log(formData);
    axios
      .post("http://localhost:5000/api/items", formData)
      .then((res) => {
        swal({ text: "Item added successfully", icon: "success" }).then(() => {
          window.location.reload(true);
        });
        // console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div className="w-full flex items-center justify-between mt-16">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:w-32 before:h-1 before:-bottom-4 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mb-20">
          Add Food Item in Menu Card
        </p>
      </div>
      {/*  */}
      <form>
        <div className="w-full min-h-screen flex items-center justify-center -mt-11">
          <div className="w-[90%] md:w-[75%] border border-gray-400 rounded-lg p-4 flex flex-col items-center justify-center gap-4 mb-20">
            {/*Title Input Field */}
            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
              <MdFastfood className="text-xl text-gray-700" />
              <input
                type="text"
                required
                placeholder="Give Me a Title..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-400 text-textColor"
              />
            </div>
            {/* Closed Title Input Field */}
            {/* Select Category  */}
            <div className="w-full">
              <select
                className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option className="bg-white">Select Category</option>
                <option
                  className="text-base border-0 outline-none lowercase bg-white text-headingColor"
                  value="starter"
                >
                  Starter
                </option>
                <option
                  className="text-base border-0 outline-none lowercase bg-white text-headingColor"
                  value="gravy"
                >
                  Gravy
                </option>
                <option
                  className="text-base border-0 outline-none lowercase bg-white text-headingColor"
                  value="fish"
                >
                  Fish
                </option>
                <option
                  className="text-base border-0 outline-none lowercase bg-white text-headingColor"
                  value="mutton"
                >
                  Mutton
                </option>
                <option
                  className="text-base border-0 outline-none lowercase bg-white text-headingColor"
                  value="rice"
                >
                  Rice
                </option>
                <option
                  className="text-base border-0 outline-none lowercase bg-white text-headingColor"
                  value="icecream"
                >
                  Ice Cream
                </option>
              </select>
            </div>
            {/*Closed Select Category  */}
            {/* Upload Image */}
            <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg">
              <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                  {image.length === 0 && (
                    <>
                      <MdCloudUpload className="text-gray-500 text-8xl hover:text-gray-700" />
                      <p className="text-gray-500 text-3xl hover:text-gray-700 text-center">
                        Click Here to Upload
                      </p>
                    </>
                  )}
                  {image.length > 0 && (
                    <>
                      {/* <MdCloudUpload className="text-gray-500 text-8xl hover:text-gray-700" /> */}
                      <p className="text-gray-500 text-3xl hover:text-gray-700 text-center">
                        {/* Click Here to Upload */}
                        {image.name}
                      </p>
                    </>
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  name="uploadImage"
                  className="w-0 h-0"
                  required
                  onChange={handleImage}
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
                  type="number"
                  className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                  required
                  placeholder="Waiting Time"
                  value={est}
                  onChange={(e) => setEst(e.target.value)}
                />
              </div>
              {/*Closed Waiting Time */}
              {/*  */}
              {/* Price */}
              <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                <MdAttachMoney className="text-gray-700 text-2xl" />
                <input
                  type="number"
                  className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                  required
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              {/* Closed Price */}
            </div>
            {/* Closed time+price flex */}

            {/* Button */}
            <div className="flex items-center w-full">
              <button
                type="submit"
                className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
                onClick={saveIt}
              >
                Save
              </button>
            </div>
            {/* Closed Button */}
          </div>
        </div>
      </form>
    </>
  );
};

export default AdminAddMenuItem;
