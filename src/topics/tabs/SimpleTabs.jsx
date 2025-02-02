import React, { useMemo, useState } from "react";

const data = [
  {
    name: "Home",
    bgColor: "bg-red-100",
    content: (
      <>
        <h1 className="text-3xl font-light font-serif leading-loose">Home</h1>
        <p>This is the default tab opened</p>
      </>
    ),
  },
  {
    name: "About",
    bgColor: "bg-yellow-100",
    content: (
      <>
        <h1 className="text-3xl font-light font-serif leading-loose">About</h1>
        <p>This is the about section</p>
      </>
    ),
  },
  {
    name: "Contact",
    bgColor: "bg-green-100",
    content: (
      <>
        <h1 className="text-3xl font-light font-serif leading-loose">
          Contact
        </h1>
        <p>Contact section over here</p>
      </>
    ),
  },
  {
    name: "Settings",
    bgColor: "bg-slate-100",
    content: (
      <>
        <h1 className="text-3xl font-light font-serif leading-loose">
          Settings
        </h1>
        <p>You can change settings in this tab</p>
      </>
    ),
  },
];

const SimpleTabs = () => {
  const tabs = ["Home", "About", "Contact", "Settings"];
  const [activeTab, setActiveTab] = useState("Home");
  const tabContent = useMemo(() => {
    return data?.filter((dt) => dt?.name == activeTab)[0];
  }, [activeTab]);
  return (
    <div className="w-40vw min-w-80 flex flex-col items-center gap-4 transition-all duration-500 ease-in-out">
      <div className="w-40vw min-w-80 flex items-center gap-4 h-20">
        {tabs?.map((tab) => (
          <button
            onClick={() =>
              activeTab == tab ? setActiveTab("") : setActiveTab(tab)
            }
            className={`w-20 border  shadow-[0_0_5px_2px] hover:shadow-[0_0_16px_4px] rounded-full hover:h-20 transition-all text-black font-bold dark:text-white ${
              activeTab == tab
                ? "border-sky-400 shadow-sky-400 hover:shadow-sky-500 h-20"
                : "border-focus-400  shadow-focus-300 hover:shadow-focus-300 h-10"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {
        <div
          className={
            activeTab
              ? "w-full h-[75vh] flex flex-col justify-center gap-20 items-center border-app-700 border shadow-md shadow-app-700 rounded-2xl p-5 scale-100 transition-transform duration-500 " +
                tabContent?.bgColor
              : "scale-0 transition-transform duration-500 "
          }
        >
          {tabContent?.content}
        </div>
      }
    </div>
  );
};

export default SimpleTabs;
