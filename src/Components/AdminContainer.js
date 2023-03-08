import React from "react";
import { AdminAddMenuItem, TodaysSpecialSection } from "./";
import AdMenuSection from "./AdMenuSection";

const AdminContainer = () => {
  return (
    <>
        <div>
          <p className="text-center text-orange-600 font-semibold text-5xl shadow-sm p-3">
            Admin Page
          </p>
          {/* <AdminAddTSitem /> */}
          <AdminAddMenuItem />
          <TodaysSpecialSection isAdmin={true} />
          <AdMenuSection />
        </div>
    </>
  );
};

export default AdminContainer;
