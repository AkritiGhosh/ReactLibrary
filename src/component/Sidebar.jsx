import React from "react";
import Logo from "./logo/Logo";
import data from "../data/data";
import { Link } from "react-router-dom";
import { tabs } from "../lib/constant";

const Sidebar = () => {
  return (
    <div className="w-full flex flex-col py-4 gap-4">
      <div className="flex gap-4 px-4 items-center">
        <Logo />
        <h1 className="text-cyan-400 text-xl font-medium">React Library</h1>
      </div>
      <div className="flex flex-col divide-y divide-gray-800">
        {data?.map((item) => (
          <Link to={"/main/" + item?.id + "/" + tabs.ARTICLE}>
            <div className={`w-full text-white font-base px-4 py-2 hover:bg-cyan-300/40`}>{item?.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
