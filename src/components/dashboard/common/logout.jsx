import React from "react";
import { useDispatch } from "react-redux";
import { clsx } from "clsx";
import { useNavigate } from "react-router";
import { logout } from "@/features/auth/authSlice";

const Logout = ({ children, className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth");
  };
  return (
    <span onClick={handleLogout} className={clsx("cursor-pointer", className)}>
      {children}
    </span>
  );
};

export default Logout;
