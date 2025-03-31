import React from "react";
import { Link } from "react-router";
import { IoMailUnreadOutline } from "react-icons/io5";

const resetConfirm = (props) => {
  return (
    <div className="h-[calc(100vh-200px)] flex flex-col justify-center items-center">
      <div className="flex flex-col items-center max-w-[400px] mx-auto gap-5">
        <IoMailUnreadOutline className="text-6xl text-primary" />
        <h1 className="title text-3xl font-bold">Check Your Email</h1>
        <p className="text-sm font-thin text-center">
          Please check the email address {props.email} for instructions to reset
          your password.
        </p>
        <Link to="/auth" className="btn btn-outline w-full text-center">
          Back to login
        </Link>
      </div>
    </div>
  );
};

export default resetConfirm;
