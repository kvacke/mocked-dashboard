import React from "react";

import "./App.css";

import Menu from "./Menu";
import App from "./Home";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="Root">
      <Menu />
      <Outlet />
    </div>
  );
};

export default Root;
