import React from 'react'
import {
    AiFillFacebook,
    AiFillLinkedin,
    AiOutlineInstagram,
    AiOutlineTwitter,
  } from "react-icons/ai";

const Footer = () => {
  return (
      <>
          <br />
          <div className="w-full bg-orange-500 flex flex-col justify-evenly items-center text-orange-100 font-extrabold -ml-3 md:flex-row rounded-2xl gap-2 p-3">
              <div className="">Copyright ©️2023 Hotel Mannat </div>
              <div className="">Developed by Team CodX</div>
              <div className="flex flex-row gap-3 ">
                  <AiFillFacebook className="active:scale-[.75] active:duration-150 transition-all hover:scale-[1.15] text-3xl " />
                  <AiFillLinkedin className="active:scale-[.75] active:duration-150 transition-all hover:scale-[1.15] text-3xl "  />
                  <AiOutlineInstagram className="active:scale-[.75] active:duration-150 transition-all hover:scale-[1.15] text-3xl "  />
                  <AiOutlineTwitter className="active:scale-[.75] active:duration-150 transition-all hover:scale-[1.15] text-3xl " />
              </div>
          </div>
    </>
  )
}

export default Footer