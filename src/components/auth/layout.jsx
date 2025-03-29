import React from "react";
import { Outlet } from "react-router";
import Header from "./header";
import Footer from "./footer";
import LoginOptions from "./options";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
