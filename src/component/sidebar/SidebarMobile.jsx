import React, { Fragment, useState } from "react";
import Logo from "../logo/Logo";
import data from "../../data/data";
import { Link, useParams } from "react-router-dom";
import SidebarItem from "./SidebarItem";

const SidebarMobile = () => {
  const currentPage = useParams().page;

  const [showMenu, setShowMenu] = useState(false);

  return (
    <Fragment>
      <div className="w-full flex gap-6 justify-between items-center">
        <div className="flex gap-4 items-center">
          <Logo mobile={true} />
          <h1 className="text-[#00d8ff] text-lg font-medium ">React Library</h1>
        </div>
        <svg
          onClick={() => setShowMenu((prev) => !prev)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#00d8ff"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      {showMenu && (
        <div className="fixed w-screen h-[calc(100vh-48px)] top-12 left-0 flex flex-col bg-black z-50">
          {data?.map((item) =>
            currentPage == item?.id ? (
              <div className="w-full flex flex-col gap-3 bg-sky-700 px-4 py-2 font-medium text-white">
                <h1 className="w-full">{item?.name}</h1>
              </div>
            ) : (
              <Link to={"/" + item?.id} onClick={() => setShowMenu(false)}>
                <div
                  id={item?.id}
                  className={`sidebarItem w-full text-white font-base px-4 py-2`}
                >
                  {item?.name}
                </div>
              </Link>
            )
          )}
        </div>
      )}
    </Fragment>
  );
};

export default SidebarMobile;
