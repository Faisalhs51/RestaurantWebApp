import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiDeleteBin3Fill } from "react-icons/ri";
import swal from "sweetalert";

const FBfeedbackCart = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios.get("http://localhost:5000/api/feedback").then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteComplaint = async (key) => {
    console.log(key);
    if (window.confirm("Are you sure you want to delete this?")) {
      await axios
        .delete(`http://localhost:5000/api/feedback/deleteFeed/${key}`)
        .then((res) => {
          getData();
          swal({ text: "Feedback deleted...", icon: "success" });
        });
    } else return;
  };

  return (
    <>
      {data.map((d) => {
        return (
          <div key={d._id}>
            <div className="">
              <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80 border border-orange-500 mb-3 mx-3 lg:w-auto">
                {/*  */}
                <form action="" className="flex flex-col space-y-4">
                  {/* Name */}
                  <div className="">
                    <label className="">User's Name</label>
                    <div className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2 text-black overflow-auto scrollbar-none">
                      {/* Moin Patil */}
                      {d.name}
                    </div>
                  </div>
                  {/* Closing Name */}
                  {/*  */}
                  {/* Email */}
                  <div className="">
                    <label className="">User's Email</label>
                    <div className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2 text-black overflow-auto scrollbar-none">
                      {/* moin.6119019.it@mhssce.ac.in */}
                      {d.email}
                    </div>
                  </div>
                  {/* Closing Email */}
                  {/*  */}
                  {/* Feedback */}
                  <div className="">
                    <label className="">User's Feedback</label>
                    <div className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2 text-black h-52 overflow-auto scrollbar-none">
                      {/* bas kar faisal bhai kitna kaam karaega 😫😏😒 */}
                      {d.desc}
                    </div>
                    {/* <textarea
                placeholder="Feedback"
                rows="4"
                className=""
              /> */}
                  </div>
                  {/* Closing Feedback */}
                  {/*  */}
                  {/* Button */}
                  <button
                    className="inline-block self-end bg-orange-500 text-orange-100 font-extrabold rounded-lg px-5 py-2 uppercase text-2xl"
                    onClick={() => {
                      deleteComplaint(d._id);
                    }}
                  >
                    {" "}
                    <span>
                      <RiDeleteBin3Fill />
                    </span>
                  </button>
                  {/*Closing Button */}
                </form>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FBfeedbackCart;
