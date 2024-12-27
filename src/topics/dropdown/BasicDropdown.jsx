import React, { useEffect, useState, useRef } from "react";

const dropdownItems = [
  "Item1",
  "Item2",
  "Item3",
  "Item4",
  "Item5",
  "Items6",
  "Items7",
  "Items8",
];

const Dropdown = ({}) => {
  const [buttonLabel, setButtonLabel] = useState("Dropdown open here");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropType, setDropType] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    // Add a click event listener to the document
    const handleDocumentClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        // Clicked outside of the menu, close the menu
        setMenuOpen(false);
      }

      if (menuRef.current && menuRef.current.contains(e.target)) {
        // Clicked inside of the menu, check if the dropdown should be flipped
        setDropType(
          window?.innerHeight - menuRef?.current?.getBoundingClientRect()?.y <=
            Math.min(400, dropdownItems?.length * 40 + 100)
        );
      }
    };
    // Attach the event listener when the component mounts
    document.addEventListener("click", handleDocumentClick);

    // Cleanup the event listener when the component unmounts
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  return (
    <div
      className="relative w-auto inline-flex flex-col *:transition-colors *:duration-500 *:ease-in-out"
      ref={menuRef}
    >
      <button
        className={`w-[40vw] min-w-64  h-12 px-2 rounded-lg text-base leading-12 font-semibold text-focus-900 dark:text-focus-100 group border-2  bg-transparent group flex flex-row gap-2 items-center justify-between group ${
          menuOpen
            ? "border-focus-600 dark:border-focus-300 rounded-b-none"
            : "border-focus-950 dark:border-focus-600 rounded-b-lg"
        }`}
        onClick={toggleMenu}
      >
        <span>{buttonLabel}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-5 h-5 ${
            menuOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          } transition-opacity duration-500`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {menuOpen && dropdownItems?.length > 0 && (
        <ul
          className={`right-0 w-full z-[333] max-h-[280px] overflow-auto scrollbar-none p-1 list-style-none bg-transparent shadow-menuOptionShadow rounded-b-lg absolute origin-top-right border border-focus-600 dark:border-focus-300   border-opacity-40 dark:border-opacity-50 focus:outline-none ${
            dropType ? "bottom-12 top-auto" : "top-12"
          } `}
        >
          {dropdownItems?.map((item, key) => (
            <li
              key={key}
              className={`w-full p-2 flex gap-2 items-center hover:bg-focus-100/20 rounded-lg cursor-pointer text-sm text-focus-900 dark:text-focus-100 to-focus-800 hover:font-medium mb-0.5 group ${
                item == buttonLabel
                  ? "font-medium bg-focus-100 dark:bg-focus-950"
                  : "font-normal bg-transparent"
              }`}
              onClick={() => {
                buttonLabel == item
                  ? setButtonLabel("Dropdown open here")
                  : setButtonLabel(item);
                setMenuOpen(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
