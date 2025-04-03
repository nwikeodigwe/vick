import React from "react";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import { Header, Sidebar } from "./common";
import { useGetUserQuery } from "@/services/userApi";
import UserContext from "@/context/userContext";

const Index = () => {
  const { data, isLoading, error } = useGetUserQuery();
  const user = useSelector((state) => state.user.currentUser || {});
  const value = { data, user, isLoading, error };

  return (
    <>
      <UserContext.Provider value={value}>
        <Header />
        <section className="flex max-h-screen overflow-y-auto">
          <Sidebar />
          <Outlet />
        </section>
      </UserContext.Provider>
    </>
  );
};

export default Index;
