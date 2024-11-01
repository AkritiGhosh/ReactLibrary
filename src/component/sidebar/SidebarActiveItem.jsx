import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarActiveItem = ({ data }) => {
  const loc = useLocation();

  return (
    <div className="w-full flex flex-col gap-3 bg-sky-400/60 px-3 py-2 font-medium text-white rounded-lg">
      <Link to={"/main/" + data?.id}>
        <h1 className="w-full">{data?.name}</h1>
      </Link>
      {/* <div className="w-full flex justify-evenly">
        {tabList?.map((tab) => (
          <Link
            to={"/main/" + data?.id + "/" + tab?.id}
            title={tab?.name}
            className={`inline-flex items-center justify-center w-10 h-10 py-1 rounded-xl hover:bg-white/25 hover:border-white border border-transparent ${
              activeTab == tab?.id ? "!bg-white/85 text-cyan-700" : ""
            }`}
          >
            {tab?.icon}
          </Link>
        ))}
      </div> */}
    </div>
  );
};

export default SidebarActiveItem;
