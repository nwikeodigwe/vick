import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginOptions = () => {
  return (
    <>
      <div className="mt-5 mb-10">
        <h1 className="text-center text-sm font-thin bg-dark-900 p-1 z-20 relative before:content[''] before:h-[0.5px] before:absolute before:w-[180px] before:bg-dark-200 before:left-0 before:top-1/2 before:mr-2 after:content[''] after:h-[0.5px] after:absolute after:w-[180px] after:bg-dark-200 after:right-0 after:top-1/2 after:ml-2 ">
          OR
        </h1>
        <div className="flex flex-col gap-4 mt-5">
          <button className="text-dark-200 w-full p-4 rounded-sm w-full hover:bg-dark-800 transition duration-200 ease-in-out border-1 border-dark-200 hover:border-dark-300 relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2">
              <FaFacebookF className="text-2xl text-blue-500" />
            </span>
            Continue with Facebook
          </button>
          <button className="text-dark-200 w-full p-4 rounded-sm w-full hover:bg-dark-800 transition duration-200 ease-in-out border-1 border-dark-200 hover:border-dark-300 relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2">
              <FcGoogle className="text-2xl" />
            </span>
            Continue with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginOptions;
