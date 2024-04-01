import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Authentication = React.lazy(() => import("./pages/Authentication/Index"));

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
  ]);

  return (
    <div className="">
      <RouterProvider router={router}>
        <Suspense fallback={<div>Loading...</div>}>
          <Authentication />
        </Suspense>
      </RouterProvider>
    </div>
  );
}

export default App;
