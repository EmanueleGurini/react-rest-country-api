import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Country from "../../../pages/Country/Country.jsx";

const Home = React.lazy(() => import("../../../pages/Home/Home.jsx"));

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
      path: "home/country/:id",
      element: <Country />,
    },
    {
      path: "*",
      element: <h1>404</h1>,
    },
  ]);
};

export default AppRoutes;
