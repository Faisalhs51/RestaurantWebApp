import React, { useEffect, useState } from "react";
import { MdPhone, MdMailOutline, MdLocationPin } from "react-icons/md";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import axios from "axios";
import { useStateValue } from "../context/StateProvider";
import swal from "sweetalert";

const ContactUs = () => {
  const [{ user }] = useStateValue();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.given_name);
      setEmail(user.email);
    }
  }, [user]);

  const submit = (e) => {
    e.preventDefault();
    let data = {
      name: name,
      email: email,
      desc: desc,
    };
    axios
      .post("http://localhost:5000/api/feedback/createFeed", data)
      .then((res) => {
        swal({ text: "Thanks for giving feedback!", icon: "success" });
        setDesc("");
        // console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <br id="contactus" />
      <br />
      <section>
        <div className="antialiased bg-gray-100">
          <div className="flex w-full min-h-screen justify-center items-center">
            {/* Main Div Blue */}
            <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-orange-400 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white">
              {/* Contact Info Details Starting */}
              <div className="flex flex-col space-y-8 justify-between">
                {/* Info Title Heading Start */}
                <div className="">
                  <h1 className="font-bold text-4xl tracking-wide">
                    Contact Us
                  </h1>
                  <p className="pt-2 text-orange-100 text-sm ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil, tempore.
                  </p>
                </div>
                {/* Closing Info Title Heading  */}
                {/*  */}
                {/* Info Contact ways */}
                <div className="flex flex-col space-y-6">
                  {/*  */}
                  <div className="inline-flex space-x-2 items-center ">
                    <div className="">
                      <MdPhone className="text-orange-100 text-xl" />
                    </div>
                    <div className="">+91 7066237587</div>
                  </div>
                  {/*  */}
                  {/*  */}
                  {/*  */}
                  <div className="inline-flex space-x-2 items-center ">
                    <div className="">
                      <MdMailOutline className="text-orange-100 text-xl" />
                    </div>
                    <div className="">hotelMannat@gmail.com</div>
                  </div>
                  {/*  */}
                  {/*  */}
                  {/*  */}
                  <div className="inline-flex space-x-2 items-center ">
                    <div className="">
                      <MdLocationPin className="text-orange-100 text-xl" />
                    </div>
                    <div className="">57 Street,Mumbai 420001</div>
                  </div>
                  {/*  */}
                </div>
                {/* Closing Info Contact ways  */}
                {/*  */}
                {/* Info Social Media Start */}
                <div className="flex space-x-4 text-lg">
                  <AiFillFacebook className="" />
                  <AiOutlineTwitter className="" />
                  <AiFillLinkedin className="" />
                  <AiOutlineInstagram className="" />
                </div>
                {/* Closing Info Social Media Start  */}
              </div>
              {/* Closing Contact Info Details  */}
              {/*  */}
              {/* Contact Form Starting */}
              <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
                {/*  */}
                <form className="flex flex-col space-y-4">
                  {/* Name */}
                  <div className="">
                    <label className="">Your Name</label>

                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2 text-black"
                    />
                  </div>
                  {/* Closing Name */}
                  {/*  */}
                  {/* Email */}
                  <div className="">
                    <label className="">Your Email</label>

                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2 text-black"
                    />
                  </div>
                  {/* Closing Email */}
                  {/*  */}
                  {/* Feedback */}
                  <div className="">
                    <label className="">Enter Feedback</label>
                    <textarea
                      placeholder="Feedback"
                      rows="4"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2 text-black"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                      required
                    />
                  </div>
                  {/* Closing Feedback */}
                  {/*  */}
                  {/* Button */}
                  <button
                    className="inline-block self-end bg-orange-500 text-orange-100 font-extrabold rounded-lg px-6 py-2 uppercase"
                    type="submit"
                    onClick={submit}
                  >
                    Submit Feedback
                  </button>
                  {/*Closing Button */}
                </form>
              </div>
              {/*Closing Contact Form  */}
            </div>
            {/*Closing Main Div Blue */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
