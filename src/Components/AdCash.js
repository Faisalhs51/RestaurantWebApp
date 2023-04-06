import React, { useEffect } from "react";
import axios from "axios";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import AdCashPage from "./AdCashPage";

const AdCash = () => {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    const gather = async () => {
      await axios.get("http://localhost:5000/api/storekeeper").then((res) => {
        dispatch({
          type: actionType.SET_STORE,
          online: res.data,
        });
      });
    };
    gather();
  }, [dispatch]);

  return (
    <>
      <div className="text-2xl text-center">
        <h1 className="text-5xl font-extrabold dark:text-white">
          Active 🍽️
          {/* <small className="ml-2 font-semibold text-gray-500 dark:text-gray-400"> */}
          <small className="text-transparent bg-clip-text bg-gradient-to-r to-orange-700 from-red-500">
            Table details
          </small>
        </h1>
      </div>
      {/* grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 */}
      <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2">
        <AdCashPage />
      </div>
    </>
  );
};

export default AdCash;
