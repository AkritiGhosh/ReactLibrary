import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
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
