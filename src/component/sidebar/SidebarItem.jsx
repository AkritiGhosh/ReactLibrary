import React from "react";
import { Link } from "react-router-dom";
import './sidebar.css'
const SidebarItem = ({ data }) => {
  return (
    <Link to={"/" + data?.id}>
      <div
        id={data?.id}
        className={`sidebarItem w-full text-white font-base px-3 py-2`}
      >
        {data?.name}
      </div>
    </Link>
  );
};

export default SidebarItem;
