import React from "react";
import { Link } from "react-router";
import { useForm, Controller } from "react-hook-form";
import LoginOptions from "./options";
import Input from "../common/input";
import Button from "../common/button";
import { useSigninUserMutation } from "../../services/auth";
import Error from "../common/error";

const Signin = () => {
  const [error, setError] = React.useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { email: "", password: "" } });

  const [signinUser, { isLoading }] = useSigninUserMutation();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col max-w-[400px] mx-auto mt-24 min-h-[65vh]">
      <h1 className="title text-center text-4xl leading-6 tracking-wider mb-10">
        Welcome back
      </h1>
      <form action={handleSubmit(onSubmit)} className="flex flex-col">
        {error && <Error className="mb-5">Invalid login credentials</Error>}
        <fieldset className="flex flex-col gap-2 border-1 border-dark-200 rounded-sm p-0 relative">
          <label
            htmlFor="email"
            className="absolute -top-[12px] bg-dark-900 p-1 left-4 z-10 text-sm text-dark-200"
          >
            Email address
          </label>
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                id="email"
                type="email"
                placeholder="Enter your email"
                aria-invalid={errors.email ? "true" : "false"}
                disabled={isSubmitting}
              />
            )}
          />
        </fieldset>
        {errors.email && (
          <span role="alert" className="text-xs font-thin text-red-700/50 mt-2">
            {errors.email.message}
          </span>
        )}
        <fieldset className="flex flex-col gap-2 border-1 border-dark-200 rounded-sm p-0 relative mt-5">
          <label
            htmlFor="password"
            className="absolute -top-[12px] bg-dark-900 p-1 left-4 z-10 text-sm text-dark-200"
          >
            Password
          </label>
          <Controller
            control={control}
            name="password"
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:
                  "Password must contain at least one letter and one number",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                id="password"
                type="password"
                placeholder="Enter your password"
                aria-invalid={errors.firstName ? "true" : "false"}
                disabled={isSubmitting}
              />
            )}
          />
        </fieldset>
        {errors.password && (
          <span role="alert" className="text-xs font-thin text-red-700/70 mt-2">
            {errors.password.message}
          </span>
        )}
        <Link to="/auth/reset" className="link text-sm mt-3">
          Forgot password?
        </Link>
        <fieldset className="mt-3">
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="primary"
            className="text-white"
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </Button>
        </fieldset>
      </form>
      <div className="flex justify-center gap-2 text-sm text-dark-200  mt-5">
        <span>Don't have an account?</span>
        <Link to="signup" className="link">
          Sign up
        </Link>
      </div>
      <LoginOptions />
    </div>
  );
};

export default Signin;
