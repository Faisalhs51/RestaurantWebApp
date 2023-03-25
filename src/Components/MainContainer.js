import React, { useEffect } from "react";
import {
  Header,
  HomeContainer,
  MenuSection,
  TodaysSpecialSection,
  CartContainer,
  Footer,
  ContactUs,
  AUaboutus,
} from "./";
import CheckoutReview from "./CheckoutReview";
import { useStateValue } from "../context/StateProvider";
// import { useParams } from "react-router-dom";
import { actionType } from "../context/reducer";

const MainContainer = () => {
  const [{ cartShow, checkoutShow, user }, dispatch] = useStateValue();

  // const { table } = useParams();

  // useEffect(() => {
  //   dispatch({
  //     type: actionType.SET_TABLENO,
  //     tableNo: parseInt(table),
  //   });
  // }, [table, dispatch]);

  // useEffect(() => {}, []);

  return (
    <>
      {user ? (
        <>
          <Header />
          <div className="w-full h-auto flex flex-col items-center justify-center ">
            <br />
            <br />
            <br />
            <br />
            <HomeContainer />
            <br />
            <TodaysSpecialSection />
            <MenuSection />
            {cartShow && <CartContainer />}
            {checkoutShow && <CheckoutReview />}
            <AUaboutus />
            <ContactUs />
            <Footer />
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default MainContainer;
