import React from "react";
import "./App.css";
import Signup from "./components/signup/Signup";
import Login from "./components/Login/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
