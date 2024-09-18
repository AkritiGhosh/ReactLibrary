import React from "react";
import Logo from "../logo/Logo";
import data from "../../data/data";
import { Link, useParams } from "react-router-dom";
import { tabs } from "../../lib/constant";
import SidebarActiveItem from "./SidebarActiveItem";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const currentPage = useParams().page;
  return (
    <div className="w-full flex flex-col py-4 gap-6">
      <div className="flex gap-4 px-4 items-center">
        <Logo />
        <h1 className="text-cyan-300 text-xl font-medium ">React Library</h1>
      </div>
      <div className="flex flex-col divide-y divide-gray-800 px-1">
        {data?.map((item) =>
          currentPage == item?.id ? (
            <SidebarActiveItem data={item} />
          ) : (
            <SidebarItem data={item} />
          )
        )}
      </div>
    </div>
  );
};

export default Sidebar;
