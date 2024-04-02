import React, { Suspense, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom"; // Import Routes and Route
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Authentication = React.lazy(() => import("./pages/Authentication/Index"));
const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard")); // Add import statement for Dashboard component

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
      path: "/dashboard", // Add route for /dashboard
      element: <Dashboard />,
    },
  ]);

  useEffect(() => {
    // Check if access token exists in local storage , if no then always redirect to login from any other page
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
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
      <RouterProvider router={router}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {" "}
            {/* Use Routes component */}
            <Route path="/" element={<Authentication />} />{" "}
            {/* Use Route component for / and /register */}
            <Route path="/register" element={<Authentication />} />
            <Route path="/dashboard" element={<Dashboard />} />{" "}
            {/* Add Route for /dashboard */}
          </Routes>
        </Suspense>
      </RouterProvider>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
