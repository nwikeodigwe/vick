import React from "react";
import { Link } from "react-router";
import LoginOptions from "./options";

const Signin = () => {
  return (
    <div className="flex flex-col max-w-[400px] mx-auto mt-24">
      <h1 className="title text-center text-4xl leading-6 tracking-wider mb-10">
        Welcome back
      </h1>
      <form action="">
        <fieldset className="flex flex-col gap-2 border-1 border-dark-200 rounded-sm p-0 relative">
          <label
            htmlFor="email"
            className="absolute -top-[12px] bg-dark-900 p-1 left-4 z-10 text-sm text-dark-200"
          >
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="border-none p-4 focus:outline-none"
          />
        </fieldset>
        <fieldset>
          <button className="text-white w-full p-5 rounded-sm mt-10 w-full bg-primary-900 text-white hover:bg-primary-900/90 transition duration-200 ease-in-out">
            Continue
          </button>
        </fieldset>
      </form>
      <div className="flex justify-center gap-2 text-sm text-dark-200  mt-5">
        <span>Don't have an account?</span>
        <Link to="signup" className="text-primary-900">
          Sign up
        </Link>
      </div>
      <LoginOptions />
    </div>
  );
};

export default Signin;
