import React from "react";
import { Link } from "react-router";
import Input from "../common/input";
import Button from "../common/button";

const ChangePassword = () => {
  return (
    <div className="flex flex-col max-w-[400px] mx-auto mt-24 min-h-[65vh]">
      <h1 className="title text-center text-4xl leading-6 tracking-wider mb-10">
        Reset password
      </h1>
      <form action="" className="flex flex-col gap-5">
        <fieldset className="flex flex-col gap-2 border-1 border-dark-200 rounded-sm p-0 relative">
          <label
            htmlFor="password"
            className="absolute -top-[12px] bg-dark-900 p-1 left-4 z-10 text-sm text-dark-200"
          >
            New password
          </label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            className="border-none p-4 focus:outline-none text-sm"
          />
        </fieldset>
        <fieldset className="flex flex-col gap-2 border-1 border-dark-200 rounded-sm p-0 relative">
          <label
            htmlFor="confirm-password"
            className="absolute -top-[12px] bg-dark-900 p-1 left-4 z-10 text-sm text-dark-200"
          >
            Confirm password
          </label>
          <Input
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="Confirm password"
            className="border-none p-4 focus:outline-none text-sm"
          />
        </fieldset>
        <fieldset>
          <Button type="submit" variant="primary" className="text-white">
            Reset password
          </Button>
        </fieldset>
      </form>
      <div className="flex justify-center gap-2 text-sm text-dark-200  mt-5">
        <Link to="/auth" className="link font-bold">
          Back to sign in
        </Link>
      </div>
    </div>
  );
};

export default ChangePassword;
