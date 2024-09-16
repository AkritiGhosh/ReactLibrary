import React, { useMemo, useState } from "react";
import Sidebar from "../component/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import data from "../data/data";
import { tabs } from "../lib/constant";

const MainLayout = ({ children }) => {
  const loc = useLocation();
  const currentPage = loc.pathname.split("/").at(-2);
  const [activeTab, setActiveTab] = useState("explanation");

  const metadata = data.filter((iter) => iter.id == currentPage)[0];
  console.log(metadata);
  const switchTabs = (e) => {
    let tabName = e.target.id;
    if (activeTab != tabName) setActiveTab(tabName);
  };

  const tabContent = useMemo(() => {
    switch (activeTab) {
      case tabs.ARTICLE:
        return metadata?.articleTab;
      case tabs.CODE:
        return metadata?.codeTab;
      case tabs.DEMO:
        return metadata?.demoTab;
      default:
        return metadata?.articleTab;
    }
  }, [activeTab]);

  return (
    <main className="w-screen h-screen flex flex-col lg:flex-row items-center justify-center">
      {/* Sidebar component */}
      <div className="lg:w-1/4 w-full lg:h-screen h-auto lg:overflow-y-auto bg-black">
        <Sidebar activePage={currentPage} />
      </div>
      {/* Content component */}
      <Outlet />
    </main>
  );
};

export default MainLayout;
