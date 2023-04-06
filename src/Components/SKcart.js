import axios from "axios";
import React from "react";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";

const SKcart = () => {
  const [{ online }, dispatch] = useStateValue();
  return (
    <>
      {/* h-420 w-auto md:h-[870px] md:w-[45%] */}
      {online.map((element, i) => {
        let reset = false;
        let change = online;
        const selectCheck = async (e, j) => {
          // e.preventDefault();
          change[i].cart[j].chk = !change[i].cart[j].chk;
          // console.log(change[i].cart[j].chk);
          // console.log(change);
          dispatch({
            type: actionType.SET_STORE,
            online: change,
          });

          for (let index of change[i].cart) {
            // console.log(index);
            reset = true;
            if (index.chk === true) {
              continue;
            } else {
              reset = false;
              break;
            }
          }
          if (reset) {
            reset = window.confirm(`Clear Table No: ${change[i].tableno}`);
            // console.log(change[i])
            // console.log(change[i]._id)
            if (reset) {
              await axios
                .post(
                  `http://localhost:5000/api/onlineCart/showItem/${change[i].email}`
                )
                .then(async () => {
                  await axios.post(
                    `http://localhost:5000/api/storekeeper/${change[i]._id}`
                  );
                });
              delete change[i];
            }
            dispatch({
              type: actionType.SET_STORE,
              online: change,
            });
          }
          // console.log(reset);
        };

        return (
          element.show && (
            <div key={i}>
              <div className="h-510 w-300 lg:w-auto md:w-340 border-2 border-slate-400 rounded-xl bg-slate-200 overflow-auto scrollbar-none text-slate-600 mt-5">
                <div className="font-bold text-xl text-center pt-2 font-serif">
                  Table Number :{" "}
                  <span className="font-mono text-slate-900">
                    {element.tableno}
                  </span>{" "}
                </div>
                {/* 1 hoizontal list --> name,Q,tick */}
                {element.cart.map((ele, j) => {
                  return (
                    ele.show && (
                      <div className="grid grid-cols-5 pt-2 pl-2" key={ele._id}>
                        <div className="col-span-3 capitalize pl-4">
                          {ele.name}
                        </div>
                        <div className="text-right pr-3">
                          Q: <span>{ele.qty}</span>{" "}
                        </div>
                        <div className="text-right pr-5">
                          <input
                            id={ele._id}
                            type="checkbox"
                            value=""
                            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 text-right"
                            onChange={(e) => {
                              selectCheck(e, j);
                            }}
                          />
                        </div>
                        <hr className="w-48 h-1 mt-1 ml-5 bg-gray-100 border-0 rounded  "></hr>
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          )
        );
      })}
    </>
  );
};

export default SKcart;
