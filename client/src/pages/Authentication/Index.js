import React, { Suspense, lazy } from "react";
import pattern from "../../assets/pattern.jpg";
import logo from "../../assets/logo.png";
import Registration from "./Registration";
import Login from "./Login";
import { APP_NAME } from "../../constants";

const LazyImage = lazy(() => import("./LazyImage"));

const Index = () => {
  return (
    <div className="d-block d-md-flex">
      <div
        className="col-md-8   d-md-block  position-relative"
        style={{ overflow: "hidden", maxHeight: "100vh" }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <LazyImage src={pattern} className={"opacity-50 "} alt="Pattern" />
        </Suspense>
        <div className="position-absolute top-50 start-50 translate-middle text-center">
          <Suspense fallback={<div>Loading...</div>}>
            <LazyImage src={logo} className="w-25 " alt="Pattern" />
          </Suspense>{" "}
          <h1 className="text">{APP_NAME}</h1>
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
