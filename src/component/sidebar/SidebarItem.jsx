import React from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ data }) => {
  return (
    <Link to={"/main/" + data?.id}>
      <div
        className={`w-full text-white font-base px-3 py-2 hover:bg-cyan-300/40  rounded-lg`}
      >
        {data?.name}
      </div>
    </Link>
  );
};

export default SidebarItem;
