import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data/data";
import DemoLayout from "./DemoLayout";

const MainContent = () => {
  const currentPage = useParams().page;
  const metadata = data.filter((iter) => iter.id == currentPage)[0];

  useEffect(() => {
    document.title = metadata?.name + " - React Library";
  }, [metadata]);

  return (
    <div className="lg:w-3/4 grow w-full lg:h-screen h-auto overflow-y-auto relative scroll-smooth">
      <div
        id="topBanner"
        className="w-full sticky top-0 right-0 p-4 bg-white flex flex-col gap-4 z-20"
      >
        <div className="w-full relative top-0 flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-black">{metadata?.heading}</h1>
          <h2 className="text-base italic font-semibold text-gray-600">
            {metadata?.subheading}
          </h2>
        </div>
      </div>
      <DemoLayout>{metadata?.demoTab}</DemoLayout>
    </div>
  );
};

export default MainContent;
