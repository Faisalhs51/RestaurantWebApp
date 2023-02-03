import React from "react";
import { AdminAddMenuItem, AdminAddTSitem,TodaysSpecialSection,MenuSection } from "./";

const AdminContainer = () => {
  return (
    <>
      <div>
        <p className="text-center text-orange-600 font-semibold text-5xl shadow-sm p-3">
          Admin Page
        </p>
        <AdminAddTSitem />
        <AdminAddMenuItem />
        <TodaysSpecialSection />
        <MenuSection/>
      </div>
    </>
  );
};

export default AdminContainer;
