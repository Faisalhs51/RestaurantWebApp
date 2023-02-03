import React, { useEffect } from "react";
import {
  Header,
  HomeContainer,
  MenuSection,
  TodaysSpecialSection,
  CartContainer,
} from "./";
import { useStateValue } from "../context/StateProvider";

const MainContainer = () => {
  const [{ cartShow }, dispatch] = useStateValue();

  useEffect(() => {}, [cartShow]);

  return (
    <>
      <Header/>
    <div className="w-full h-auto flex flex-col items-center justify-center ">
        <br />
        <br /><br /><br />
      <HomeContainer />
      <br />
      <TodaysSpecialSection />
      <MenuSection />
      {cartShow && <CartContainer />}
      </div>
      </>
  );
};

export default MainContainer;
