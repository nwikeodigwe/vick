import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { PiArrowFatLineUpLight } from "react-icons/pi";
import { PiArrowFatLineDownLight } from "react-icons/pi";
import { BiPencil } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";

const Post = () => {
  return (
    <div className="border-t border-dark-200/20 py-3">
      <div className="flex flex-col px-4 hover:bg-dark-800 rounded-sm transition-all duration-300 cursor-pointer">
        <div className="flex items-center justify-between py-1">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-3xl"></div>
            <div className="flex gap-3">
              <h4 className="text-sm font-medium">v/johndoe</h4>
              <p className="text-xs text-dark-200">2h ago</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-3 py-1 rounded-sm border border-dark-200 text-sm font-medium">
              Subscribe
            </button>
            <BsThreeDots className="text-md text-dark-200" />
          </div>
        </div>
        <div className="my-1">
          <h2 className="text-xl font-[500] tracking-tight">
            This is an incredible style for a perfect room temperature
          </h2>
          <p className="text-sm opacity-70">
            I have always wanted to be able to wear a polomano style jacket that
            costs noting more than a pencil steel
          </p>
        </div>
        <div className="h-[400px] bg-dark-500"></div>
        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center gap-2 bg-dark-500 rounded-sm">
            <span className="group p-2 rounded-sm hover:bg-dark-200/20 cursor-pointer">
              <PiArrowFatLineUpLight className="group-hover:text-red-500" />
            </span>
            <span className="text-xs font-thin">100</span>
            <span className="group p-2 rounded-sm hover:bg-dark-200/20 cursor-pointer">
              <PiArrowFatLineDownLight className="group-hover:text-green-500" />
            </span>
          </div>

          <div className="flex items-center gap-2 p-2 bg-dark-500 rounded-sm">
            <span className="rounded-sm hover:bg-dark-200/20 cursor-pointer">
              <BiPencil className="group-hover:text-blue-500" />
            </span>
            <span className="text-xs font-[500]">Notes</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-dark-500 rounded-sm">
            <span className="rounded-sm hover:bg-dark-200/20 cursor-pointer">
              <FaRegBookmark className="group-hover:text-blue-500" />
            </span>
            <span className="text-xs font-[500]">Save</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-dark-500 rounded-sm">
            <span className="rounded-sm hover:bg-dark-200/20 cursor-pointer">
              <FaShareFromSquare className="group-hover:text-blue-500" />
            </span>
            <span className="text-xs font-[500]">Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
