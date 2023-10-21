import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <Toaster />
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
