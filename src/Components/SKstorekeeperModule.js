import React, { useEffect } from "react";
import { SKcart } from "./";
import axios from "axios";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const SKstorekeeperModule = () => {
  const [, dispatch] = useStateValue();

  // setInterval

  useEffect(() => {
    const gather = async () => {
      await axios.get("http://localhost:5000/api/storekeeper").then((res) => {
        let obj = res.data;
        for (let i of obj) {
          // i.show = true;
          for (let j of i.cart) {
            if (j.show === false) {
              j.chk = true;
            } else j.chk = false;
          }
        }
        dispatch({
          type: actionType.SET_STORE,
          online: obj,
        });
      });
    };
    gather();
  }, [dispatch]);

  return (
    <>
      <div className="text-2xl text-center">
        <h1 className="text-5xl font-extrabold dark:text-white">
          Storekeeper 🍽️
          <small className="ml-2 font-semibold text-gray-500 dark:text-gray-400">
            Order confirmation
          </small>
        </h1>
      </div>
      {/* grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 */}
      <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2">
        {/* {data.map((element) => {
          // console.log(element);
          return <SKcart element={element} />;
        })} */}
        <SKcart />
      </div>
    </>
  );
};

export default SKstorekeeperModule;
