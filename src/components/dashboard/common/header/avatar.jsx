import React from "react";
import { MdOutlineOfflineBolt } from "react-icons/md";
import { Link } from "react-router";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@/components/common";
import UserContext from "@/context/userContext";
import AvatarSkeleton from "./avatarSkeleton";
import Logout from "../logout";

const Avatar = () => {
  const { data, isLoading } = React.useContext(UserContext);

  if (isLoading) return <AvatarSkeleton />;

  return (
    <Dropdown auto={true}>
      <DropdownTrigger className="flex items-center gap-4 bg-dark-800 rounded-2xl p-[2px] hover:bg-dark-700 transition-all duration-300">
        <div className="flex items-center ml-2">
          <span>
            <MdOutlineOfflineBolt className="text-3xl" />
          </span>
          <span className="font-bold">10</span>
        </div>
        <div className="bg-primary p-5 rounded-2xl"></div>
      </DropdownTrigger>
      <DropdownContent className="absolute top-15 right-0 pt-5 bg-dark-700 rounded-sm w-70 text-sm font-medium">
        <DropdownItem className="flex items-center gap-3 py-2 px-5">
          <span className="p-5 rounded-2xl bg-primary"></span>
          <div className="flex flex-col">
            <Link to="/dashboard/profile">View Profile</Link>
            <p className="text-xs opacity-50">v/{data.user.name}</p>
          </div>
        </DropdownItem>
        <DropdownItem className="flex items-center gap-3 py-2 px-5">
          <Link to="/dashboard/avatar">Edit avatar</Link>
        </DropdownItem>
        <DropdownItem className="flex items-center gap-3 py-2 px-5">
          <Logout className="font-[100]">Logout</Logout>
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
};

export default Avatar;
