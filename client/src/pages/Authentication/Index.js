import React, { Suspense, lazy } from "react";
import pattern from "../../assets/pattern.jpg";
import Registration from "./Registration";
import Login from "./Login";

const LazyImage = lazy(() => import("./LazyImage"));

const Index = () => {
  return (
    <div className="d-flex">
      <div
        className="col-8  d-none d-md-block  position-relative"
        style={{ overflow: "hidden", maxHeight: "100vh" }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <LazyImage src={pattern} alt="Pattern" />
        </Suspense>
        <div className="position-absolute top-50 start-50 translate-middle text-center">
          <h1 className="text">Auto CV</h1>
          <p className="text-muted">
            Transform Your Career Path with Stellar Resumes
          </p>
        </div>
      </div>
      <div className="col-12 col-md-4 d-flex align-items-center">
        {window.location.pathname === "/register" ? (
          <Registration />
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
};

export default Index;
