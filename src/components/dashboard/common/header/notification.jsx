import React from "react";
import { GoBell } from "react-icons/go";
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from "../../../common";

const Notification = () => {
  return (
    <Dropdown>
      <DropdownTrigger className="p-2 rounded-3xl hover:bg-dark-700 transition-all duration-300">
        <GoBell className="text-2xl" />
      </DropdownTrigger>
      <DropdownContent className="absolute top-10 right-0 bg-dark-900 rounded-sm">
        <DropdownItem>
          <span>Notifications</span>
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
};

export default Notification;
