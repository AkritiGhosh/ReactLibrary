import React, { useEffect } from "react";
import Sidebar from "../component/sidebar/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import data from "../data/data";

const MainLayout = ({ selected = false }) => {
  const nav = useNavigate();
  useEffect(() => {
    if (!selected) nav(data[0].id, { replace: true });
  }, [selected]);

  return (
    <main className="w-screen h-screen flex flex-col lg:flex-row items-center justify-center">
      {/* Sidebar component */}
      <div className="lg:w-1/4 w-full lg:h-screen h-auto lg:overflow-y-auto bg-black">
        <Sidebar />
      </div>
      {/* Content component */}
      <Outlet />
    </main>
  );
};

export default MainLayout;
