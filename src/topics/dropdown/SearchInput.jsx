import React from "react";

const SearchInput = ({
  menuOpen,
  dropUp,
  inputValue,
  handleChange,
  placeholder,
}) => {
  return (
    <div
      className={`w-full h-12 px-2 rounded-lg text-base leading-12 font-semibold text-app-900 dark:text-app-100 group border-2 bg-white dark:bg-black group flex flex-row gap-4 items-center justify-between group ${
        menuOpen
          ? `border-app-600 dark:border-app-300 has-[:focus]:border-focus-600 has-[:focus]:dark:border-focus-300 ${
              dropUp ? "rounded-t-none" : "rounded-b-none"
            } `
          : `border-app-800 dark:border-app-600 rounded-b-lg  has-[:focus]:border-focus-600 has-[:focus]:dark:border-focus-300
        `
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <input
        className="w-full h-full bg-transparent border-none ring-0 focus:ring-0 focus:outline-none placeholder:text-base placeholder:text-app-600/50 dark:placeholder:text-app-400/40"
        name="search"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder ?? "Search country"}
      />
    </div>
  );
};

export default SearchInput;
