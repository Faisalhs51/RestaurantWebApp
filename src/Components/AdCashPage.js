import axios from "axios";
import React from "react";
import { useStateValue } from "../context/StateProvider";
import { motion } from "framer-motion";
import swal from "sweetalert";

const AdCashPage = () => {
  const [{ online }] = useStateValue();

  return (
    <>
      {online.map((element, i) => {
        return (
          // element.show && (
          <div key={i}>
            <div className="h-510 w-300 lg:w-auto md:w-340 border-2 border-red-400 rounded-xl bg-red-100 overflow-auto scrollbar-none text-slate-600 mt-5">
              <div className="font-bold text-xl text-center pt-2 font-serif">
                Table Number :{" "}
                <span className="font-mono text-slate-900">
                  {element.tableno}
                </span>{" "}
              </div>
              {/* 1 hoizontal list --> name,Q,tick */}
              {element.cart.map((ele, j) => {
                return (
                  // ele.show && (
                  <div className="grid grid-cols-5 pt-2 pl-2" key={ele._id}>
                    <div className="col-span-3 capitalize pl-4">{ele.name}</div>
                    <div className="text-right pr-3">
                      Q: <span>{ele.qty}</span>{" "}
                    </div>
                    <br />
                    <hr className="w-48 h-1 mt-1 ml-5 bg-pink-300 border-0 rounded"></hr>
                  </div>
                  // )
                );
              })}

              <div className="">
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-auto m-3 rounded-md h-14 bg-yellow-500 flex items-center justify-center cursor-pointer hover:shadow-lg"
                  onClick={async () => {
                    let pay = window.confirm(
                      "Are your sure, you want to make that table paid?"
                    );
                    if (pay) {
                      let body = {
                        email: online[i].email,
                        coin: 0,
                      };
                      await axios
                        .post(
                          `http://localhost:5000/api/bill//billing/sendmail`,
                          body
                        )
                        .then(async () => {
                          // console.log(res.data)
                          await axios
                            .delete(
                              `http://localhost:5000/api/onlineCart/${online[i].email}`
                            )
                            .then(() => {
                              swal({
                                text: `Successful!!!`,
                                icon: "success",
                              }).then(() => {
                                window.location.reload(true);
                              });
                            });
                        });
                    }
                  }}
                >
                  <p className="text-white font-black tracking-[10px]">PAID</p>
                </motion.div>
              </div>
            </div>
          </div>
          // )
        );
      })}
    </>
  );
};

export default AdCashPage;
