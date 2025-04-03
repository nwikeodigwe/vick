import React from "react";

const AvatarSkeleton = () => {
  return (
    <div className="flex items-center gap-4 bg-dark-800 rounded-2xl p-[2px]">
      <div className="flex items-center ml-2">
        <div className="w-8 h-8 rounded-full bg-dark-700 animate-pulse"></div>
        <div className="w-4 h-4 ml-2 bg-dark-700 animate-pulse"></div>
      </div>
      <div className="w-12 h-12 rounded-2xl bg-dark-700 animate-pulse"></div>
    </div>
  );
};

export default AvatarSkeleton;
