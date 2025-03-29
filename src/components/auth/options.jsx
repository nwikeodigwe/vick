import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Button from "../common/button";

const LoginOptions = () => {
  return (
    <>
      <div className="login-options mt-5 mb-10">
        <h1>OR</h1>
        <div className="flex flex-col gap-4 mt-5">
          <Button variant="outline">
            <span className="absolute left-4 top-1/2 -translate-y-1/2">
              <FaFacebookF className="text-2xl text-blue-500" />
            </span>
            Continue with Facebook
          </Button>
          <Button variant="outline">
            <span className="absolute left-4 top-1/2 -translate-y-1/2">
              <FcGoogle className="text-2xl" />
            </span>
            Continue with Google
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginOptions;
