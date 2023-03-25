import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import MItemCard from "./MItemCard";

const TodaysSpecialSection = ({ isAdmin }) => {
  const [tsdata, setTsdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/specialItems")
      .then((res) => {
        let obj = res.data;
        for (let i of obj) {
          i.qty = 1;
        }
        setTsdata(obj);
      })
      .catch((err) => console.log(err, "it has an error"));
  }, []);

  return (
    <>
      <section id="Menu" className="w-full">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:w-32 before:h-1 before:-bottom-4 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Todays Special in Mannat
          </p>
        </div>
      </section>
      {/*  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        <MItemCard menudata={tsdata} isAdmin={isAdmin} />
      </div>
    </>
  );
};

export default TodaysSpecialSection;
