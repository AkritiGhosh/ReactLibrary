import React from "react";
import github from "../assets/github-mark-white.png";
import { useParams } from "react-router-dom";
const DemoLayout = ({ children }) => {
  const currentPage = useParams().page;
  const url =
    "https://github.com/AkritiGhosh/ReactLibrary/tree/main/src/topics/" +
    currentPage +
    "/Demo.jsx";
  return (
    <div className="relative container h-[calc(100%-250px)] mx-auto p-4">
      <div className="relative w-full h-full mx-auto p-4 flex items-center justify-center border-2 border-black rounded-sm overflow-auto">
        {children}
      </div>
      <div className="absolute bottom-0.5  right-0.5  bg-transparent w-0 h-0 block m-4 border-transparent border-r-black border-b-black hover:border-r-sky-700 hover:border-b-sky-700 transition-colors duration-1000  border-[40px] cursor-pointer border-t-white  border-l-white">
        <a href={url} target="_blank" className="block w-10 h-10 pb-1 pr-1">
          <img className="w-full h-full" src={github} />
        </a>
      </div>
    </div>
  );
};

export default DemoLayout;
