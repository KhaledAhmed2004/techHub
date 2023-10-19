import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Toaster />
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
