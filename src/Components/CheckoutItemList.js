import React, { useEffect, useState } from "react";
import { useStateValue } from "../context/StateProvider";
import axios from "axios";
const CheckoutItemList = () => {
  const [{ user }] = useStateValue();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`http://localhost:5000/api/onlineCart/${user.email}`)
        .then((res) => {
          setData(res.data.cart);
          // console.log(res.data.cart);
        });
    };
    getData();
  }, [user.email]);

  return (
    <>
      {data.map((item) => {
        return (
          <div key={item._id}>
            {/* Table Heading --> Name ,Quantity, Price */}
            <div className="grid grid-cols-4 md:grid-cols-5 pt-2 pl-2">
              <div className="col-span-2 md:col-span-3">{item.name}</div>
              <div className="text-center md:text-right pr-3">{item.qty}</div>
              <div className="text-center md:text-right pr-5">{item.price}</div>
              <hr className="w-48 md:w-225 h-1 mt-1 ml-5 bg-slate-300 border-0 rounded "></hr>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CheckoutItemList;
