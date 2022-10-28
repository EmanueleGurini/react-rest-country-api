import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Country from "../../../pages/Country/Country";

const Home = React.lazy(() => import("../../../pages/Home/Home"));

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="home" />,
    },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "home/:id",
      element: <Country />,
    },
    {
      path: "*",
      element: <h1>404</h1>,
    },
  ]);
};

export default AppRoutes;
