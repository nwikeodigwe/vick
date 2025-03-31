import React from "react";
import { Link } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { useResetPasswordMutation } from "../../services/auth";
import { Input, Button, Error } from "../common";
import ResetConfirm from "./resetConfirm";

const Reset = () => {
  const [error, setError] = React.useState({ error: false, message: "" });
  const [email, setEmail] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { email: "", password: "" } });

  const [resetPassword] = useResetPasswordMutation();

  const onSubmit = async (data) => {
    const response = await resetPassword(data);
    if ("error" in response) {
      setError({ status: true, message: response.error.data.description });
    } else {
      setEmail(data.email);
      setSuccess(true);
    }
  };

  if (success) {
    return <ResetConfirm email={email} />;
  }
  return (
    <div className="flex flex-col max-w-[400px] mx-auto mt-24 min-h-[65vh]">
      <h1 className="title text-center text-4xl leading-6 tracking-wider mb-10">
        Reset password
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
        <fieldset className="mt-5">
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

export default Reset;
