import React, { createContext, useEffect } from "react";
import Sidebar from "../component/sidebar/Sidebar";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import data from "../data/data";
import HeaderBlock from "../component/header/HeaderBlock";

const MainLayout = () => {
  const nav = useNavigate();
  const page = useParams()?.page ?? false;
  const metadata = page ? data.filter((iter) => iter.id == page)[0] : data[0];

  useEffect(() => {
    if (!page) nav(data[0].id, { replace: true });
  }, [page]);

  return (
    <main className="w-screen h-screen flex flex-col lg:flex-row items-center justify-center">
      {/* Sidebar component */}
      <div className="lg:w-1/4 w-full lg:h-screen h-auto lg:overflow-y-auto bg-black">
        <Sidebar />
      </div>
      <div className="lg:w-3/4 grow w-full lg:h-screen h-auto overflow-y-auto relative scroll-smooth">
        <HeaderBlock data={metadata} />
        {/* Content component */}
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
