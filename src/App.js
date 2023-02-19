import "./App.css";
import {
  MainContainer,
  LoginRegisterPage,
  AdminContainer,
  LoginAdminSign1,
} from "./Components";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AdEditItem from "./Components/AdEditItem";

function App() {
  return (
    <AnimatePresence wait>
      <div className="w-screen h-auto flex flex-col bg-primary ">
        {/* <Header /> */}
        <main className="mt-0 px-4 py-4 md:mt-0 md:px-4 w-full">
          <Routes>
            {/* <Route path="/*" element={<LoginRegisterPage />} />
            <Route path="/user" element={<MainContainer />} /> */}
            <Route path="/user" element={<LoginRegisterPage />} />
            <Route path="/" element={<MainContainer />} />
            {/* <Route path="/createItem" element={<CreateContainer />} /> */}
            <Route path="/admin" element={<AdminContainer />} />
            <Route path="/adminlogin" element={<LoginAdminSign1 />} />
            <Route path="/updateitem" element={<AdEditItem />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
