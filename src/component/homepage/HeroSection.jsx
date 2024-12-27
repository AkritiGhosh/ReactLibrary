import React, { useMemo, useRef, useState } from "react";
import Logo from "../logo/Logo";

const HeroSection = ({ scrollRef }) => {
  const [mousePosition, setMousePosition] = useState(0);
  const ref = useRef();
  const screenWidth = window?.innerWidth;
  const heading = "React Components";
  const textWidth = useMemo(() => {
    return ref?.current?.clientWidth;
  }, [ref?.current]);

  return (
    <div
      className="w-full h-full overflow-hidden flex flex-col justify-evenly items-center"
      onMouseMove={(e) =>
        setMousePosition(
          e.clientX - e.currentTarget.getBoundingClientRect().left
        )
      }
    >
      <div className="w-auto text-center">
        <div
          style={{
            left:
              mousePosition && textWidth
                ? mousePosition > (screenWidth - textWidth) / 2
                  ? mousePosition < screenWidth / 2 + textWidth / 2
                    ? mousePosition - 10
                    : screenWidth / 2 + textWidth / 2
                  : (screenWidth - textWidth) / 2 - 20
                : "-10px",
          }}
          className="h-28 w-2 mt-5 absolute z-10 bg-clip-content bg-transparent border-r-2 border-app-900 "
        />
        <span className="relative inline-block w-auto">
          <span
            ref={ref}
            style={{
              textShadow: "0 0 2.5px #d8b4fe ",
            }}
            className="absolute left-0 inline-block w-auto font-serif text-8xl leading-snug font-bold cursor-none"
          >
            {heading}
          </span>

          <span
            ref={ref}
            style={{
              backgroundSize: textWidth ? textWidth * 2 + " 100%" : "200% 100%",
              backgroundPositionX:
                mousePosition > (screenWidth - textWidth) / 2
                  ? mousePosition < screenWidth / 2 + textWidth / 2
                    ? -textWidth +
                      (mousePosition - (screenWidth - textWidth) / 2) -
                      3
                    : "0%"
                  : "-100%",
            }}
            className="relative inline-block w-auto font-serif text-8xl leading-snug font-bold text-transparent bg-clip-text cursor-none bg-gradient-to-r from-app-700 via-app-400 to-transparent from-0% via-50% to-50%"
          >
            {heading}
          </span>
        </span>
      </div>
      <div className="h-20 relative">
        <Logo />
      </div>
      <p className="text-xl text-app-200 text-center">
        A compilation of dynamic and interactive UI elements, with effects and
        animations using Tailwind CSS.
      </p>
      <button
        onClick={() => scrollRef?.current?.scrollIntoView()}
        type="button"
        className="relative w-[190px] py-3 px-7 rounded-3xl font-mono uppercase text-focus-600 text-xl font-bold tracking-wider leading-normal shadow-[0_0_25px_2px] border border-focus-500 shadow-focus-600 hover:text-focus-300 hover:shadow-focus-300 group transition-all duration-300 overflow-hidden flex items-center hover:w-[220px]"
      >
        Scroll down
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 ml-3 inline-block absolute -right-6 group-hover:right-5 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"
          />
        </svg>
      </button>
    </div>
  );
};

export default HeroSection;
