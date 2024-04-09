import React, { Suspense, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./common/Loader/Loader";
import "./css/App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Authentication = React.lazy(() => import("./pages/Authentication/Index"));
const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
const Editor = React.lazy(() => import("./pages/Editor/Editor"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Authentication />,
    },
    {
      path: "/register",
      element: <Authentication />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/create",
      element: <Editor service="create" />,
    },
    {
      path: "/update/:id",
      element: <Editor service="update" />,
    },
  ]);

  useEffect(() => {
    // Check if access token exists in local storage , if no then always redirect to login from any other page
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      if (
        window.location.pathname !== "/" &&
        window.location.pathname !== "/register"
      ) {
        window.location.href = "/";
      }
    } else {
      if (
        window.location.pathname === "/" ||
        window.location.pathname === "/register"
      ) {
        window.location.href = "/dashboard";
      }
    }
  }, []);

  return (
    <div className="">
      <Suspense fallback={<Loader />}>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
          <RouterProvider router={router}>
            <Routes>
              <Route path="/" element={<Authentication />} />{" "}
              <Route path="/register" element={<Authentication />} />
              <Route path="/dashboard" element={<Dashboard />} />{" "}
              <Route path="/create" element={<Editor />} />{" "}
            </Routes>
          </RouterProvider>
        </GoogleOAuthProvider>
        <ToastContainer position="top-center" autoClose={1500} />
      </Suspense>
    </div>
  );
}

export default App;
