import React from "react";
import { Routes as Router, Route } from "react-router";
import AuthLayout from "./components/auth/layout";
import Signin from "./components/auth/signin";
import Signup from "./components/auth/signup";
import Reset from "./components/auth/reset";
import ResetToken from "./components/auth/resetToken";

const Routes = () => {
  return (
    <>
      <Router>
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="reset">
            <Route index element={<Reset />} />
            <Route path=":token" element={<ResetToken />} />
          </Route>
        </Route>
      </Router>
    </>
  );
};

export default Routes;
