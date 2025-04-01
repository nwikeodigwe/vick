import React from "react";
import Sort from "./sort";
import Post from "./post";

const Main = () => {
  return (
    <div className="flex flex-col gap-0 ">
      <Sort />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Main;
