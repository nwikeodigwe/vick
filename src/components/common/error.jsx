import React from "react";

const Error = ({ children, className }) => {
  return (
    <div
      className={`${className} border-1 border-red-500/50 rounded-sm p-4 text-red-700/70 text-sm bg-red-300/5 font-light`}
    >
      {children}
    </div>
  );
};

export default Error;
