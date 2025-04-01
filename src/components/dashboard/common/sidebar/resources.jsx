import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownContent,
} from "../../../common";
import { Link } from "react-router";
import { IoChevronDownOutline } from "react-icons/io5";

const Resources = () => {
  return (
    <div className="flex flex-col gap-2 py-2 border-t border-dark-200/20">
      <Dropdown open={true}>
        <DropdownTrigger
          indicator={true}
          className="flex w-full items-center justify-between opacity-50 hover:bg-dark-200/20 rounded-sm px-4 py-3 cursor-pointer transition-all duration-300"
        >
          <h2 className="text-sm font-riteous font-[200] uppercase tracking-wider">
            Resources
          </h2>
        </DropdownTrigger>
        <DropdownContent className="flex flex-col gap-0 text-sm font-[400] opacity-70">
          <DropdownItem>
            <Link
              to="/dashboard/popular"
              className="flex items-center gap-3 px-3 py-2 rounded-sm hover:bg-dark-200/20 transition-all duration-300"
            >
              <span className="h-8 w-8 bg-dark-200/20 rounded-full"></span>
              <span>v/Gucci</span>
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link
              to="/dashboard/popular"
              className="flex items-center gap-3 px-3 py-2 rounded-sm hover:bg-dark-200/20 transition-all duration-300"
            >
              <span className="h-8 w-8 bg-dark-200/20 rounded-full"></span>
              <span>v/Chanel</span>
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link
              to="/dashboard/popular"
              className="flex items-center gap-3 px-3 py-2 rounded-sm hover:bg-dark-200/20 transition-all duration-300"
            >
              <span className="h-8 w-8 bg-dark-200/20 rounded-full"></span>
              <span>v/LouisVitton</span>
            </Link>
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
    </div>
  );
};

export default Resources;
