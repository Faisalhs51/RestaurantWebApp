import React from "react";
import qr from "../img/qr.jpg";

const TqrStart = () => {
  return (
    <>
      <div className="h-[101vh] -mt-5 -ml-5 -mb-5 w-[100vw] border border-orange-500 bg-gray-400 overflow-hidden">
        <div className="grid grid-cols-1">
          {/*  */}
          <div className="px-5 pt-16 pb-5 md:pt-16 md:pb-10 ">
            {/* <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center bg-gradient-to-r to-emerald-600 from-sky-400"> */}
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-transparent bg-clip-text md:text-5xl lg:text-6xl text-center bg-gradient-to-r to-orange-600 from-purple-500">
            {/* <h1 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> */}
                          Please scan the{" "}
                          <br />
              <span className="text-textColor italic ">
                QR Code
                          </span>{" "}
                          <br />
              present on your table.
            </h1>
          </div>
          {/*  */}
                  <div className="flex justify-center">
                      <img src={qr} alt="QR Scanner" className="h-auto md:h-340 w-auto px-2 rounded-3xl border border-white" />
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default TqrStart;
