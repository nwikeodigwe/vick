import React from "react";
import { Outlet } from "react-router";
import { Header, Sidebar } from "./common";

const index = () => {
  return (
    <>
      <Header />
      <section className="flex max-h-screen overflow-y-auto">
        <Sidebar />
        <Outlet />
      </section>
    </>
  );
};

export default index;
