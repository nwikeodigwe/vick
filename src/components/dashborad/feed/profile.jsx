import React from "react";
import { CiLink } from "react-icons/ci";
import { Link } from "react-router";

const profile = () => {
  return (
    <div className="flex flex-col border-1 border-dark-200/20 rounded-sm relative">
      <div className="h-[70px] bg-dark-700"></div>
      <div className="bg-dark-200 rounded-full inline-block w-[70px] h-[70px] absolute top-[35px] left-[10px]"></div>
      <div className="flex flex-col mt-5 px-4 py-7 gap-2">
        <div className="flex flex-col">
          <h1 className="font-riteous font-[400] text-2xl">John Doe</h1>
          <p className="text-xs opacity-20">@johndoe</p>
        </div>
        <p className="text-secondary-800/40 text-xs font-light">
          I am a software developer with an eye for design and style and I love
          this app
        </p>
        <div>
          <Link to="#" className="text-primary/50 flex items-center gap-1">
            <span>
              <CiLink className="text-lg" />
            </span>
            <span className="text-xs">nwikeodigwe.com</span>
          </Link>
        </div>
        <div className="flex items-center gap-2 mt-5">
          <Link className="border-1 border-dark-200/50 items-center w-full rounded-sm p-2 text-center text-sm font-[500] text-secondary-800/40">
            Edit profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default profile;
