import React from "react";

const Stats = () => {
  return (
    <div className="flex flex-col border-1 border-dark-200/20 rounded-sm px-3 py-4 text-xs gap-2">
      <div className="group flex items-center justify-between transition-all duration-300 cursor-pointer">
        <h3 className="text-secondary-200/40 leading-3 group-hover:underline tracking-wide font-[400]">
          Profile viewers
        </h3>
        <span className="text-secondary-200/50 group-hover:underline">10</span>
      </div>
      <div className="group flex items-center justify-between transition-all duration-300 cursor-pointer">
        <h3 className="text-secondary-200/40 leading-3 group-hover:underline tracking-wide font-[400]">
          Style impressions
        </h3>
        <span className="text-secondary-200/50 group-hover:underline">7</span>
      </div>
    </div>
  );
};

export default Stats;
