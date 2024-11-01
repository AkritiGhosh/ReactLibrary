import React from "react";
import Logo from "../logo/Logo";
import data from "../../data/data";
import { useParams } from "react-router-dom";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const currentPage = useParams().page;
  return (
    <div className="w-full flex flex-col py-4 gap-6">
      <div className="flex gap-4 px-4 items-center">
        <Logo />
        <h1 className="text-[#00d8ff] text-xl font-medium ">React Library</h1>
      </div>
      <div className="flex flex-col">
        {data?.map((item) =>
          currentPage == item?.id ? (
            <div className="w-full flex flex-col gap-3 bg-sky-700 px-3 py-2 font-medium text-white">
              <h1 className="w-full">{item?.name}</h1>
            </div>
          ) : (
            <SidebarItem data={item} />
          )
        )}
      </div>
    </div>
  );
};

export default Sidebar;
