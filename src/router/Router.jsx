import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import Login from "../pages/login/Login";
import SignUp from "../signUp/SignUp";
import AddProduct from "../pages/appProduct/AddProduct";
import PrivetRouter from "./PrivetRouter";
import Brand from "../pages/brand/Brand";
import DetilesCard from "../pages/appProduct/product/productDetiles/DetilesCard";
import Update from "../pages/update/Update";
import MyCart from "../pages/mycart/MyCart";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivetRouter>
            <AddProduct></AddProduct>
          </PrivetRouter>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivetRouter>
            <MyCart></MyCart>
          </PrivetRouter>
        ),
        loader: () =>
          fetch(
            " https://technology-and-electronics-server-pzmnao612.vercel.app/cart"
          ),
      },
      {
        path: "/:brand",
        element: <Brand />,
      },
      {
        path: "/product/:_id",
        element: (
          <PrivetRouter>
            <DetilesCard></DetilesCard>
          </PrivetRouter>
        ),
      },
      {
        path: "/update/:_id",
        element: (
          <PrivetRouter>
            <Update></Update>
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(
            ` https://technology-and-electronics-server-pzmnao612.vercel.app/update/${params._id}`
          ),
      },
    ],
  },
]);

export default Router;
