import React from "react";
import Logo from "../logo/Logo";
import data from "../../data/data";
import { Link, useParams } from "react-router-dom";
import { tabs } from "../../lib/constant";

const Sidebar = () => {
  const currentPage = useParams().page;
  return (
    <div className="w-full flex flex-col py-4 gap-6">
      <div className="flex gap-4 px-4 items-center">
        <Logo />
        <h1 className="text-cyan-200 text-xl font-medium ">React Library</h1>
      </div>
      <div className="flex flex-col divide-y divide-gray-800">
        {data?.map((item) =>
          currentPage == item?.id ? (
            <div className="w-full flex flex-col bg-cyan-100 px-4 py-2 font-medium text-cyan-950 ">
              <h1 className="w-full">{item?.name}</h1>
              <div className="w-full flex justify-between"></div>
            </div>
          ) : (
            <Link to={"/main/" + item?.id + "/" + tabs.ARTICLE}>
              <div
                className={`w-full text-white font-base px-4 py-2 hover:bg-cyan-300/40`}
              >
                {item?.name}
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Sidebar;
