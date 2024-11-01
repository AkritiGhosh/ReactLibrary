import React from "react";

const HeaderBlock = ({data}) => {
  return (
    <div
      id="topBanner"
      className="w-full sticky top-0 right-0 p-4 bg-white flex flex-col gap-4 z-20"
    >
      <div className="w-full relative top-0 flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-black">{data?.heading}</h1>
        <h2 className="text-base italic font-semibold text-gray-600">
          {data?.subheading}
        </h2>
      </div>
    </div>
  );
};

export default HeaderBlock;
