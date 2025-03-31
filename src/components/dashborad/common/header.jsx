import React from "react";
import { GoBell } from "react-icons/go";
import { MdOutlineOfflineBolt } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="border-1 border-dark-200/20 fixed top-0 left-0 right-0 z-50 bg-dark-900 ">
      <div className="flex items-center gap-4">
        <div className="logo">
          <h1 className="title">Vick</h1>
        </div>
        <div className="flex items-center gap-2 bg-dark-800 rounded-sm">
          <span>
            <IoIosSearch className="text-2xl ml-2 opacity-50" />
          </span>
          <input
            type="text"
            className="p-2 w-[300px] rounded-sm border-none bg-transparent focus:outline-none focus:w-[400px] transition-all duration-300"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <ul className="flex items-center gap-4">
          <li className="flex items-center gap-2 bg-dark-800 rounded-3xl -sm py-2 px-4">
            <span>
              <IoMdAdd className="text-3xl" />
            </span>
            <span className="text-sm font-[500]">Create</span>
          </li>
          <li>
            <GoBell className="text-2xl" />
          </li>
        </ul>
        <div className="flex items-center gap-4 bg-dark-800 rounded-2xl p-[2px]">
          <div className="flex items-center">
            <span>
              <MdOutlineOfflineBolt className="text-3xl" />
            </span>
            <span className="font-bold">10</span>
          </div>
          <div className="bg-primary p-5 rounded-2xl"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
