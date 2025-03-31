import React from "react";
import Input from "../common/input";
import Button from "../common/button";
import Error from "../common/error";
import { useForm, Controller } from "react-hook-form";

const Form = (props) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { email: "", password: "" } });
  return (
    <form action={handleSubmit(props.onSubmit)} className="flex flex-col">
      {props.error.status && (
        <Error className="mb-5">{props.error.message}</Error>
      )}
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
          className="text-white"
        >
          {isSubmitting ? "Signing in..." : "Sign in"}
        </Button>
      </fieldset>
    </form>
  );
};

export default Form;
