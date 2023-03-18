import React, { useEffect, useState } from "react";
import axios from "axios";
import { useStateValue } from "../context/StateProvider";

const ListOrderedItems = () => {
  // const [user, setUser] = useState();
  const [data, setData] = useState();
  const [{ user }] = useStateValue();

  // useEffect(() => {
  //   setUser(JSON.parse(localStorage.getItem("userToken")));
  //   setTimeout(() => {
  //     getData();
  //   }, 1000);
  // }, []);
  useEffect(() => {
    const getData = () => {
      // console.log(user);
      axios
        .get(`http://localhost:5000/api/onlineCart/${user.email}`)
        .then((res) => {
          setData(res.data.cart);
          // console.log(res.data.cart);
        });
    };
    getData();
  }, [user]);

  return (
    <>
      {data &&
        data.map((i) => {
          return (
            <p key={i._id}>
              {i.name} + {i.price} + {i.qty}
            </p>
          );
        })}
    </>
  );
};

export default ListOrderedItems;
