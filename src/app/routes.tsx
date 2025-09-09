import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const DashboardLayout = lazy(() => import("../layout/DashboardLayout"));
const Auth = lazy(() => import("../features/auth/pages/Auth"));
const Register = lazy(() => import("../features/auth/pages/Register"));
const Login = lazy(() => import("../features/auth/pages/Login"));
const Statistic = lazy(() => import("../features/statistic/pages/Statistic"));
const Product = lazy(() => import("../features/product/pages/Product"));
const User = lazy(() => import("../features/user/pages/User"));

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Auth />,
      children: [
        {
          path: "/",
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: <Statistic />,
            },
            {
              path: "product",
              element: <Product />,
            },
            {
              path: "user",
              element: <User />,
            },
          ],
        },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);
};

export default AppRoutes;
