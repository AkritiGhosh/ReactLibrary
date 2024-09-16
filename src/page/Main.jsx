import React, { useMemo, useState } from "react";
import {
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { tabs } from "../lib/constant";
import data from "../data/data";

const Main = () => {
  const loc = useLocation();
  const nav = useNavigate();
  const currentPage = useParams().page;
  const metadata = data.filter((iter) => iter.id == currentPage)[0];

  const [activeTab, setActiveTab] = useState(
    loc.pathname?.split("/")?.length > 2
      ? loc.pathname?.split("/").at(-1)
      : tabs.ARTICLE.toLowerCase()
  );

  const switchTabs = (e) => {
    let tabName = e.target.id;
    if (activeTab != tabName) {
      setActiveTab(tabName);
      nav(tabName.toLowerCase());
    }
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
    <div className="lg:w-3/4 grow w-full lg:h-screen h-auto overflow-y-auto relative">
      <div id="topBanner" className="fixed top-0 right-0 "></div>
      <div id="tabs" className="">
        <span onClick={switchTabs} className={``} id={tabs.ARTICLE}>
          Explanation
        </span>
        <span onClick={switchTabs} className={``} id={tabs.CODE}>
          Code
        </span>
        <span onClick={switchTabs} className={``} id={tabs.DEMO}>
          Demo
        </span>
      </div>
      <Outlet context={tabContent} />
    </div>
  );
};

export default Main;
