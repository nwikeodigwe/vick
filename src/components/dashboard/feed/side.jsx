import React from "react";
import Footer from "./footer";
const Side = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="bg-dark-200 rounded-sm h-[300px]"></div>
      <div className="bg-dark-200 rounded-sm h-[300px]"></div>
      <Footer />
    </div>
  );
};

export default Side;
