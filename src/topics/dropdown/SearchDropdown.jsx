import React from "react";

const SearchDropdown = ({ as: Tag = "div", className, dropUp, children }) => {
  return (
    <Tag
      className={
        `right-0 w-full z-[333] bg-white dark:bg-black shadow-menuOptionShadow absolute origin-top-right border border-focus-600 dark:border-focus-300 border-opacity-40 dark:border-opacity-50 focus:outline-none ${
          dropUp ? "bottom-12 top-auto rounded-t-lg" : "top-12 rounded-b-lg"
        }` +
        " " +
        className
      }
    >
      {children}
    </Tag>
  );
};

export default SearchDropdown;
