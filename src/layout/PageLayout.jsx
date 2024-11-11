import React, { useEffect, useState } from "react";
import Sidebar from "../component/sidebar/Sidebar";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import data from "../data/data";
import HeaderBlock from "../component/header/HeaderBlock";
import SidebarMobile from "../component/sidebar/SidebarMobile";

const MainLayout = () => {
  const nav = useNavigate();
  const page = useParams()?.page ?? false;
  const metadata = page ? data.filter((iter) => iter.id == page)[0] : data[0];
  const pageWidth = screen.width;
  const [mobileSidebar, setMobileSidebar] = useState(pageWidth < 1024);

  useEffect(() => {
    const handleResize = () => setMobileSidebar(screen.width < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!page) nav(data[0].id, { replace: true });
  }, [page]);

  return (
    <>
      <main className="w-screen h-screen flex flex-col lg:flex-row items-center justify-center bg-black">
        {/* Sidebar component */}
        {mobileSidebar ? (
          <div className="w-full min-h-12 py-2 px-4 ">
            <SidebarMobile />
          </div>
        ) : (
          <div className="lg:w-1/5 min-w-64 w-full lg:h-screen h-auto lg:overflow-y-auto">
            <Sidebar />
          </div>
        )}

        <div className="lg:w-4/5 grow w-full lg:h-screen h-auto overflow-y-auto relative scroll-smooth py-5 px-8 border-black border-4 rounded-lg bg-white">
          <HeaderBlock data={metadata} />
          {/* Content component */}
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
