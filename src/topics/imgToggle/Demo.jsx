import React, { useState } from "react";

const ImageToggleSwitch = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div
        onClick={() => setToggle((prev) => !prev)}
        className="w-[200px] h-[52px] border-2 border-gray-600 overflow-hidden rounded-[26px] cursor-pointer"
      >
        <div
          className={`w-[400px] h-[48px] transition-transform duration-500 ${
            toggle ? "-translate-x-[3px]" : "-translate-x-[152px]"
          }`}
        >
          <span className="inline-block bg-sky-400 w-[175px] h-[48px] bg-[url(/public/day.png)] bg-cover bg-[10px_-50px]"></span>
          <span className="absolute inline-block bg-gray-100 w-[50px] h-[50px] rounded-full -ml-[25px]  -translate-y-px shadow-inner shadow-gray-700" />
          <span className="inline-block bg-indigo-900 w-[175px] h-[48px] bg-[url(/public/night.jpg)] bg-cover bg-[10px_-18px]"></span>
        </div>
      </div>
      <h1 className={`block relative mt-5 text-3xl font-medium ${ toggle ? "text-sky-400":"text-blue-800"}`}>
        {toggle ? "Light mode" : "Night mode"}
      </h1>
    </div>
  );
};

export default ImageToggleSwitch;
