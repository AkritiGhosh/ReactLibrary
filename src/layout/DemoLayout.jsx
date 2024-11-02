import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const DemoLayout = ({ children }) => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.getElementsByTagName("body")[0].classList.remove("dark");
    if (dark) document.getElementsByTagName("body")[0].classList.add("dark");
  }, [dark]);

  const currentPage = useParams().page;
  const url =
    "https://github.com/AkritiGhosh/ReactLibrary/tree/main/src/topics/" +
    currentPage +
    "/Demo.jsx";
  return (
    <div className="relative container h-[calc(100%-250px)] mx-auto p-4 ">
      <div className="relative w-full h-full mx-auto p-4 flex items-center justify-center border-2 border-gray-700 outline outline-2 outline-gray-300 rounded-lg overflow-auto bg-white dark:bg-black">
        <div className="w-full h-10 background absolute top-0 bg-gray-700 text-white drop-shadow-sm py-2 px-4">
          <button
            title={dark ? "Switch to light view" : "Switch to dark view"}
            className="text-white"
            onClick={() => setDark((prev) => !prev)}
          >
            {dark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6  drop-shadow-[0_0_3px_#FFFFFF]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6  drop-shadow-[0_0_3px_#FFFFFF]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
          </button>
        </div>
        {children}
      </div>
      <div className="absolute bottom-0.5  right-0.5  bg-transparent w-0 h-0 block m-4 border-transparent border-r-black border-b-black dark:border-r-white dark:border-b-white hover:border-r-sky-700 hover:border-b-sky-700 transition-colors duration-1000  border-[40px] cursor-pointer border-t-transparent  border-l-transparent rounded-br-md">
        <a href={url} target="_blank" className="block w-10 h-10 pb-1 pr-1 relative">
           <svg
            width="36"
            height="36"
            viewBox="0 0 1024 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
              transform="scale(64)"
              fill={dark ? "#000000" : "#FFFFFF"}
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default DemoLayout;
