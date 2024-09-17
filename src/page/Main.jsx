import React, { useEffect, useMemo, useState } from "react";
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
    loc.pathname?.split("/")?.length >= 4
      ? loc.pathname?.split("/").at(-1)
      : tabs.ARTICLE.toLowerCase()
  );
  console.log(loc.pathname?.split("/")?.at(-1), activeTab == tabs.ARTICLE);
  useEffect(() => {
    document.title = metadata?.name + " - React Library";
  }, [metadata]);

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
      <div
        id="topBanner"
        className="w-full sticky top-0 right-0 flex flex-col gap-4 p-4"
      >
        <h1 className="text-4xl font-bold text-black">{metadata?.heading}</h1>
        <h2 className="text-base italic font-semibold text-gray-600">
          {metadata?.subheading}
        </h2>
      </div>
      <div
        id="tabs"
        className="px-4 py-1 font-semibold text-gray-700 text-xl border-b-2 border-solid relative"
      >
        <span
          onClick={switchTabs}
          className={`px-3 py-1 border-b-2 border-solid hover:border-blue-500  ${
            tabs.ARTICLE?.toLowerCase() == activeTab
              ? "text-blue-800 border-blue-800"
              : "border-transparent"
          }`}
          id={tabs.ARTICLE}
        >
          Explanation
        </span>
        <span
          onClick={switchTabs}
          className={`px-3 py-1 border-b-2 border-solid hover:border-blue-500  ${
            tabs.CODE?.toLowerCase() == activeTab
              ? "text-blue-800 border-blue-800"
              : "border-transparent"
          }`}
          id={tabs.CODE}
        >
          Code
        </span>
        <span
          onClick={switchTabs}
          className={`px-3 py-1 border-b-2 border-solid hover:border-blue-500  ${
            tabs.DEMO?.toLowerCase() == activeTab
              ? "text-blue-800 border-blue-800"
              : "border-transparent"
          }`}
          id={tabs.DEMO}
        >
          Demo
        </span>
      </div>
      <Outlet context={tabContent} />
    </div>
  );
};

export default Main;
