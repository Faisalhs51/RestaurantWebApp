import {
  MainContainer,
  LoginRegisterPage,
  AdminContainer,
  LoginAdminSign1,
  SKstorekeeperModule,
} from "./Components";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AdEditItem from "./Components/AdEditItem";
import Payment from "./Components/Payment";
import LoginSKSign1 from "./Components/LoginSKSign1";
import AdCash from "./Components/AdCash";
import FBfeedback from "./Components/FBfeedback";

function App() {
  return (
    <AnimatePresence wait>
      <div className="w-screen h-auto flex flex-col bg-primary ">
        {/* <Header /> */}
        <main className="mt-0 px-4 py-4 md:mt-0 md:px-4 w-full">
          <Routes>
            {/* <Route path="/*" element={<LoginRegisterPage />} />
            <Route path="/user" element={<MainContainer />} /> */}
            <Route path="/user/:table" element={<LoginRegisterPage />} />
            <Route path="/" element={<MainContainer />} />
            {/* <Route path="/createItem" element={<CreateContainer />} /> */}
            <Route path="/admin" element={<AdminContainer />} />
            <Route path="/adminlogin" element={<LoginAdminSign1 />} />
            <Route path="/sklogin" element={<LoginSKSign1 />} />
            <Route path="/updateitem" element={<AdEditItem />} />
            <Route path="/store" element={<SKstorekeeperModule />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/feedback" element={<FBfeedback />} />
            <Route path="/pay-via-cash" element={<AdCash />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
