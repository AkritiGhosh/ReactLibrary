import React from "react";

const HeaderBlock = ({ data }) => {
  return (
    <div
      id="topBanner"
      className="w-full relative top-0 right-0 p-4 bg-white flex flex-col gap-4 mb-6"
    >
      <h1 className="text-5xl font-bold text-sky-700 font-['Elsie_Swash_Caps'] ">
        {data?.heading}
      </h1>
      <h2 className="text-base font-normal italic text-gray-600  ">{data?.subheading}</h2>
    </div>
  );
};

export default HeaderBlock;
