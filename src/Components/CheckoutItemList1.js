import React from "react";

const CheckoutItemList = () => {
  return (
    <>
      <div className="">
        {/* Table Heading --> Name ,Quantity, Price */}
        <div className="grid grid-cols-4 md:grid-cols-5 pt-2 pl-2">
          <div className="col-span-2 md:col-span-3">Chicken Biryani</div>
          <div className="text-center md:text-right pr-3">2</div>
          <div className="text-center md:text-right pr-5">360</div>
          <hr className="w-48 md:w-225 h-1 mt-1 ml-5 bg-slate-300 border-0 rounded "></hr>
        </div>
      </div>
    </>
  );
};

export default CheckoutItemList;
