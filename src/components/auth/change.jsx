import React from "react";
import { Link, useParams, useNavigate } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { useChangePasswordMutation } from "../../services/auth";
import { Input, Button, Error } from "../common";
import { useDispatch } from "react-redux";
import { setAuthToken, setRefreshToken } from "../../features/auth/authSlice";

const ChangePassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = React.useState({ error: false, message: "" });
  const [changePassword] = useChangePasswordMutation();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    defaultValues: { password: "", token },
  });

  const password = watch("password");

  const onSubmit = async (data) => {
    const response = await changePassword(data);
    if ("error" in response) {
      setError({ status: true, message: response.error.data.description });
    } else {
      dispatch(setAuthToken(response.data.token));
      dispatch(setRefreshToken(response.data.refreshToken));
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex flex-col max-w-[400px] mx-auto mt-24 min-h-[65vh]">
      <h1 className="title text-center text-4xl leading-6 tracking-wider mb-10">
        Change password
      </h1>
      <form action={handleSubmit(onSubmit)} className="flex flex-col">
        {error.status && <Error className="mb-5">{error.message}</Error>}
        <fieldset className="flex flex-col gap-2 border-1 border-dark-200 rounded-sm p-0 relative">
          <label
            htmlFor="password"
            className="absolute -top-[12px] bg-dark-900 p-1 left-4 z-10 text-sm text-dark-200"
          >
            New password
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
                placeholder="Enter your new password"
                aria-invalid={errors.password ? "true" : "false"}
                disabled={isSubmitting}
              />
            )}
          />
        </fieldset>
        {errors.password && (
          <span role="alert" className="text-xs font-thin text-red-400 mt-2">
            {errors.password.message}
          </span>
        )}
        <fieldset className="flex flex-col gap-2 border-1 border-dark-200 rounded-sm p-0 relative mt-5">
          <label
            htmlFor="confirmPassword"
            className="absolute -top-[12px] bg-dark-900 p-1 left-4 z-10 text-sm text-dark-200"
          >
            Confirm password
          </label>
          <Controller
            control={control}
            name="confirmPassword"
            rules={{
              required: "Password confirmation is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            }}
            render={({ field }) => (
              <Input
                {...field}
                id="confirmPassword"
                type="password"
                placeholder="Confirm your new password"
                aria-invalid={errors.confirmPassword ? "true" : "false"}
                disabled={isSubmitting}
              />
            )}
          />
        </fieldset>
        {errors.confirmPassword && (
          <span role="alert" className="text-xs font-thin text-red-400 mt-2">
            {errors.confirmPassword.message}
          </span>
        )}

        <fieldset className="mt-5">
          <Button type="submit" variant="primary" className="text-white">
            Change password
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
