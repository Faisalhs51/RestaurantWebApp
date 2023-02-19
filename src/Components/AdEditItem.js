import React, { useEffect } from "react";
import {
  MdFastfood,
  MdAvTimer,
  MdAttachMoney,
} from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AdEditItem = () => {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("breakfast");
  const [price, setPrice] = useState(0);
  const [est, setEst] = useState(0);
  const [id, setId] = useState("");

  useEffect(() => {
    // console.log(document.URL);
    let obj = JSON.parse(localStorage.getItem("editItem"));
    setId(obj._id);
    setName(obj.name);
    setCategory(obj.category);
    setEst(obj.est);
    setPrice(obj.price);
  }, []);

  const saveIt = async (e) => {
    e.preventDefault();
    let data = {
      name: name,
      category: category,
      price: price,
      est: est,
    };
    await axios({
      method: "put",
      url: `http://localhost:5000/api/items/${id}`,
      data: data,
    })
      .then((res) => {
        alert("Item Updated successfully");
        // console.log(res);
        localStorage.removeItem("editItem");
        navigate("/admin");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
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
                className="w-full capitalize h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-400 text-textColor"
              />
            </div>
            {/* Closed Title Input Field */}
            {/* Select Category  */}
            <div className="w-full">
              <select
                className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option className="bg-white">Select Category</option>
                <option
                  className="text-base border-0 outline-none lowercase bg-white text-headingColor"
                  value="breakfast"
                >
                  breakfast
                </option>
                <option
                  className="text-base border-0 outline-none lowercase bg-white text-headingColor"
                  value="starter"
                >
                  starter
                </option>
                <option
                  className="text-base border-0 outline-none lowercase bg-white text-headingColor"
                  value="mughlai"
                >
                  mughlai
                </option>
                <option
                  className="text-base border-0 outline-none lowercase bg-white text-headingColor"
                  value="chinese"
                >
                  chinese
                </option>
                <option
                  className="text-base border-0 outline-none lowercase bg-white text-headingColor"
                  value="dessert"
                >
                  dessert
                </option>
                <option
                  className="text-base border-0 outline-none lowercase bg-white text-headingColor"
                  value="drinks"
                >
                  drinks
                </option>
              </select>
            </div>
            {/*Closed Select Category  */}
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
                  type="text"
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
    </div>
  );
};

export default AdEditItem;
