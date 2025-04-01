import React from "react";
import { Link } from "react-router";
import { GoSidebarExpand } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { PiChartLineUp } from "react-icons/pi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { TfiBarChart } from "react-icons/tfi";
import Brands from "./brands";
import Recent from "./recent";
import Resources from "./resources";

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const openclass = !isOpen ? "hidden" : "";
  return (
    <div
      className={`group flex px-5 h-screen  overflow-y-scroll border-1 border-dark-200/20 transform-flat transition-all duration-300 ${
        isOpen ? "w-[250px]" : "w-[60px]"
      }`}
    >
      <div className={` ${isOpen ? "hidden" : "flex flex-col gap-5 mt-30 "}`}>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="mb-5 cursor-pointer"
        >
          <GoSidebarExpand className="text-2xl" />
        </button>
        <ul className="flex flex-col gap-5">
          <li className="hover:bg-dark-200/20 transition-all duration-300">
            <Link to="/dashboard" className="rounded-sm">
              <IoHomeOutline className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link to="/dashboard/popular">
              <PiChartLineUp className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link to="/dashboard/explore">
              <MdOutlineTravelExplore className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link to="/dashboard/all">
              <TfiBarChart className="text-2xl" />
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`${
          isOpen ? "flex flex-col gap-2 mt-28 w-full relative" : "hidden"
        }`}
      >
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="absolute top-0 w-full flex items-center justify-between cursor-pointer hover:bg-dark-200/20 rounded-sm px-3 py-3 transition-all duration-300"
        >
          <h2 className="text-sm font-riteous font-[200] uppercase tracking-wider opacity-50">
            Menu
          </h2>
          <span>
            <GoSidebarExpand className="text-xl" />
          </span>
        </div>
        <ul className="flex flex-col gap-0 text-sm font-[400] opacity-70 mt-12">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center gap-3 px-3 py-3 hover:bg-dark-200/20 rounded-sm"
            >
              <IoHomeOutline className="text-2xl" />
              <span className={openclass}>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/popular"
              className="flex items-center gap-3 px-3 py-3  hover:bg-dark-200/20 rounded-sm"
            >
              <PiChartLineUp className="text-xl" />
              <span className={openclass}>Trending</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/explore"
              className="flex items-center gap-3 px-3 py-3  hover:bg-dark-200/20 rounded-sm"
            >
              <MdOutlineTravelExplore className="text-xl" />
              <span className={openclass}>Explore</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/all"
              className="flex items-center gap-3 px-3 py-3  hover:bg-dark-200/20 rounded-sm"
            >
              <TfiBarChart className="text-xl" />
              <span className={openclass}>All</span>
            </Link>
          </li>
        </ul>
        <div className="flex flex-col">
          <Recent />
          <Brands />
          <Resources />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
