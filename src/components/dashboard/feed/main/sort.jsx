import React from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from "../../../common";

const sort = () => {
  return (
    <div className="">
      <Dropdown className="text-sm font-[400] text-dark-200 tracking-wide">
        <DropdownTrigger className="flex items-center px-3 py-2 rounded-sm hover:bg-dark-200/20 cursor-pointer gap-1">
          <h4 className="font-300">Best</h4>
          <span>
            <IoChevronDownSharp className="text-md" />
          </span>
        </DropdownTrigger>
        <DropdownContent className="flex  min-w-[100px] absolute top-10 left-0 flex-col gap-2 bg-dark-700 rounded-sm font-medium z-1000">
          <DropdownItem className="px-3 py-2 ">Sort by</DropdownItem>
          <DropdownItem className="px-3 py-2 hover:bg-dark-200/20 cursor-pointer">
            New
          </DropdownItem>
          <DropdownItem className="px-3 py-2 hover:bg-dark-200/20 cursor-pointer">
            Old
          </DropdownItem>
          <DropdownItem className="px-3 py-2 hover:bg-dark-200/20 cursor-pointer">
            Top
          </DropdownItem>
          <DropdownItem className="px-3 py-2 hover:bg-dark-200/20 cursor-pointer">
            Low
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
    </div>
  );
};

export default sort;
