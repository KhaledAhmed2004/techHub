import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import Login from "../pages/login/Login";
import SignUp from "../signUp/SignUp";
import AddProduct from "../pages/appProduct/AddProduct";
import PrivetRouter from "./PrivetRouter";
// import Brand from "../pages/brand/BrandPage";
import OurBrand from "../pages/home/ourBrand/OurBrand";
import Brand from "../pages/brand/Brand";

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
      },
      // {
      //   path: "/id/:id",
      //   element: <Brand></Brand>,
      //   loader: ({ params } = console.log(params)),
      // },
      {
        path: "/:brand",
        element: <Brand />,
      },
    ],
  },
]);

export default Router;
