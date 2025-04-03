import React from "react";
import { Link, useNavigate } from "react-router";
import { useForm, Controller } from "react-hook-form";
import LoginOptions from "./options";
import { Input, Button, Error } from "../common";
import { useSigninUserMutation } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { setAuthToken, setRefreshToken } from "../../features/auth/authSlice";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = React.useState({ error: false, message: "" });
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { email: "", password: "" } });

  const [signinUser] = useSigninUserMutation();

  const onSubmit = async (data) => {
    const response = await signinUser(data);
    if ("error" in response) {
      setError({ status: true, message: response.error.data.description });
    } else {
      dispatch(setAuthToken(response.data.login.token));
      dispatch(setRefreshToken(response.data.login.refresh));
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex flex-col max-w-[400px] mx-auto mt-24 min-h-[65vh]">
      <h1 className="title text-center text-4xl leading-6 tracking-wider mb-10">
        Welcome back
      </h1>
      <form action={handleSubmit(onSubmit)} className="flex flex-col">
        {error.status && <Error className="mb-5">{error.message}</Error>}
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
            className="btn-full text-white"
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
