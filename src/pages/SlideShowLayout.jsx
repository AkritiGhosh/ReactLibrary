import React, { useEffect, useState } from "react";
import ArrowIcon from "../component/carousel/ArrowIcon";
import Header from "../component/carousel/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import data from "../lib/data";

const SlideShowLayout = () => {
  const { layoutId } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    if (!layoutId) nav("/component/"+data[0]?.id);
    if (data.filter((item) => item?.id == layoutId)?.length < 1)
      nav("/component/"+data[0]?.id);
  }, [data]);

  const pageData = data.filter((item) => item?.id == layoutId)[0];

  return (
    <div className="w-full h-screen relative flex flex-col bg-white dark:bg-black transition-colors duration-500 ease-in-out *:transition-colors *:duration-500 *:ease-in-out">
      <Header />
      {pageData?.backId && (
        <Link
          to={"/component/" + pageData?.backId}
          className="absolute z-30 cursor-pointer w-16 h-full top-0 left-0 flex items-center justify-start px-2 hover:bg-gradient-to-r from-app-200 dark:from-app-950 to-transparent group  transition-all duration-300 ease-in-out"
        >
          <ArrowIcon />
        </Link>
      )}
      {pageData?.nextId && (
        <Link
          to={"/component/" + pageData?.nextId}
          className="absolute z-30 cursor-pointer w-16 h-full top-0 right-0 flex items-center justify-end px-2 hover:bg-gradient-to-r from-transparent to-app-200 dark:to-app-950 group  transition-all duration-300 ease-in-out"
        >
          <ArrowIcon left={false} />
        </Link>
      )}
      <div className="w-[calc(100%-128px)] mx-auto h-full flex items-center justify-center bg-white dark:bg-black">
        {pageData?.file}
      </div>
    </div>
  );
};

export default SlideShowLayout;
