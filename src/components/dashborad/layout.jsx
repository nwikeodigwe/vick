import React from "react";
import { Outlet } from "react-router";
import Header from "./common/header";
import Sidebar from "./common/sidebar";

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Layout;
