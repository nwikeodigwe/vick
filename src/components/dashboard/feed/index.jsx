import React from "react";
import Main from "./main";
import Side from "./side";

const index = () => {
  return (
    <div className="px-5 grid grid-cols-12 h-[calc(100vh-100px)] overflow-scroll gap-5 mt-[80px] w-full">
      <div className="col-span-8">
        <Main />
      </div>
      <div className="col-span-4">
        <Side />
      </div>
    </div>
  );
};

export default index;
