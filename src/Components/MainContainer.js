import React, { useEffect } from "react";
import {
  Header,
  HomeContainer,
  MenuSection,
  TodaysSpecialSection,
  CartContainer,
} from "./";
import CheckoutReview from "./CheckoutReview";
import { useStateValue } from "../context/StateProvider";
import { useParams } from "react-router-dom";
import { actionType } from "../context/reducer";

const MainContainer = () => {
  const [{ cartShow, checkoutShow }, dispatch] = useStateValue();

  const { table } = useParams();

  useEffect(() => {
    dispatch({
      type: actionType.SET_TABLENO,
      tableNo: table,
    });
  }, [table, dispatch]);

  useEffect(() => {}, [cartShow]);

  return (
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
      </div>
    </>
  );
};

export default MainContainer;
