import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import LoginPage from "./pages/login.jsx";
// import RegisterPage from "./pages/register.jsx";
// import ErrorPage from "./pages/404.jsx";
// import ProductPage from "./pages/products.jsx";
import DeatilPage from "./pages/detail.jsx";
import HomePage from "./pages/home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    // errorElement: <ErrorPage />,
  },
  // {
  //   path: "/login",
  //   element: <LoginPage />,
  // },
  // {
  //   path: "/register",
  //   element: <RegisterPage />,
  // },
  {
    path: "/detail/:id",
    element: <DeatilPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
