import React, { useEffect, useState, useRef } from "react";

const dropdownItems = [
  "Item1",
  "Item2",
  "Item3",
  "Item4",
  "Item5",
  "Item6",
  "Item7",
  "Item8",
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
    <div className="relative w-auto inline-flex flex-col" ref={menuRef}>
      <button
        className={
          "w-auto h-10 py-1 px-2 rounded-lg text-sm font-semibold text-gray-900 group border border-gray-500 bg-white group flex flex-row gap-2 items-center justify-between "
        }
        onClick={toggleMenu}
      >
        <span>{buttonLabel}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
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
          className={`right-0 w-48 z-[333] max-h-[400px] overflow-auto scrollbar-hide p-1 list-style-none bg-white shadow-menuOptionShadow rounded-lg absolute origin-top-right ring-1 ring-black ring-opacity-5 focus:outline-none ${
            dropType ? "bottom-12 top-auto" : "top-12"
          } `}
        >
          {dropdownItems?.map((item, key) => (
            <li
              key={key}
              className={`w-full p-2 flex gap-2 items-center hover:bg-blue-100 hover:bg-opacity-40 rounded-lg cursor-pointer text-sm to-gray-800 hover:font-medium mb-0.5 group ${
                item == buttonLabel
                  ? "font-medium bg-blue-100 selected "
                  : "font-normal bg-transparent"
              }`}
              onClick={(e) => {
                setMenuOpen(false);
                setButtonLabel(item);
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