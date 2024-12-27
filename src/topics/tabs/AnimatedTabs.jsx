import React, { useState } from "react";

const AnimatedTabs = () => {
  const tabs = ["Home", "About", "Contact", "Settings"];
  const [activeTab, setActiveTab] = useState("");
  return (
    <div className="w-40vw min-w-80 flex items-center gap-4">
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
  );
};

export default AnimatedTabs;
