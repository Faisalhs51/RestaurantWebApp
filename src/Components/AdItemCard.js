import React from "react";
import { MdDelete, MdEdit, MdStar } from "react-icons/md";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdItemCard = ({ menudata }) => {
  let navigate = useNavigate();

  const StarItem = async (currElm) => {
    await axios
      .post(`http://localhost:5000/api/specialItems/${currElm._id}`)
      .then((res) => {
        alert("Item added to Special items list Successfully!!");
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const EditItem = (currElm) => {
    localStorage.setItem("editItem", JSON.stringify(currElm));
    navigate("/updateitem");
  };
  return (
    <>
      {menudata.map((currElm) => {
        const base64String = btoa(
          String.fromCharCode(...new Uint8Array(currElm.image.data.data))
        );
        return (
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
                    // console.log(currElm._id);
                    axios
                      .delete(`http://localhost:5000/api/items/${currElm._id}`)
                      .then((res) => {
                        alert("Item deleted!!");
                        window.location.reload(true);
                        // console.log(res);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                >
                  <MdDelete className="text-white" />
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-lg"
                  onClick={() => {
                    EditItem(currElm);
                  }}
                >
                  <MdEdit className="text-white" />
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-lg"
                  onClick={() => {
                    StarItem(currElm);
                  }}
                >
                  <MdStar className="text-white" />
                </motion.div>
              </div>
              <div className="w-full flex flex-col items-end justify-end">
                <p className="text-textColor capitalize font-semibold text-base md:text-lg">
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
        );
      })}
    </>
  );
};

export default AdItemCard;
