import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const LoginAdminForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    if (email === "hotelmannat@gmail.com" && password === "mannat") {
      // console.log("yes");
      navigate("/admin");
    } else {
      swal({ text: "Invalid Credentials", icon: "warning" });
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200">
      <h1 className="text-5xl font-semibold">
        Hotel Admin , Welcome to your Den :)
      </h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        {" "}
        Please enter your details{" "}
      </p>
      {/*  */}
      <form>
        <div className="mt-8">
          {/*Email  */}
          <div className="">
            <label className="text-lg font-medium">Email</label>
            <input
              type="email"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter Your Email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          {/* closed Email  */}
          <br />
          {/* pswd  */}
          <div className="">
            <label className="text-lg font-medium">Password</label>
            <input
              type="password"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter Your Password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          {/* closed pswd  */}
          {/*  */}
          {/* Sign IN */}
          {/* <Link to="/admin"> */}
          <div className="mt-8 flex flex-col gap-y-4">
            {/* normal Sign in */}
            <button
              type="submit"
              className="active:scale-[.75] active:duration-150 transition-all hover:scale-[1.1] py-3 rounded-xl bg-violet-500 text-white text-lg font-bold"
              onClick={signIn}
            >
              Sign in
            </button>
            {/* Closed normal Sign in */}
            {/*  */}
          </div>
          {/* </Link> */}
          {/* Closed Sign IN */}
          <br />
          <div className="mt-8 flex justify-center items-center">
            <p className="font-medium text-base">Are you an StoreKeeper,</p>
            <Link to="/sklogin">
              <button className="text-violet-500 text-base font-bold ml-2">
                StoreKeeper Login
              </button>
            </Link>
          </div>
        </div>
      </form>
      {/*  */}
    </div>
  );
};

export default LoginAdminForm;
