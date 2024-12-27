import React, { useEffect, useState, useRef } from "react";

const SearchSelect = () => {
  const [buttonLabel, setButtonLabel] = useState("Dropdown open here");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropUp, setDropUp] = useState(false);
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
        setDropUp(
          window?.innerHeight - menuRef?.current?.getBoundingClientRect()?.y <=
            Math.min(400, dropdownItems?.length * 36 + 100)
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
      className="w-2/5 min-w-64 relative inline-flex flex-col *:transition-colors *:duration-500 *:ease-in-out"
      ref={menuRef}
    >
      <div
        className={`w-full h-12 px-2 rounded-lg text-base leading-12 font-semibold text-focus-900 dark:text-focus-100 group border-2 bg-white dark:bg-black group flex flex-row gap-2 items-center justify-between group ${
          menuOpen
            ? `border-focus-600 dark:border-focus-300 ${
                dropUp ? "rounded-t-none" : "rounded-b-none"
              } `
            : `border-focus-950 dark:border-focus-600 rounded-b-lg
        `
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
          />
        </svg>

        <input
          className="w-full h-full bg-transparent border-none ring-0 focus:ring-0 focus:outline-none"
          name="search"
        />
      </div>
      {menuOpen && dropdownItems?.length > 0 && (
        <ul
          className={`right-0 w-full z-[333] max-h-[250px] overflow-auto p-1 list-style-none bg-white dark:bg-black shadow-menuOptionShadow absolute origin-top-right border border-focus-600 dark:border-focus-300   border-opacity-40 dark:border-opacity-50 focus:outline-none ${
            dropUp ? "bottom-12 top-auto rounded-t-lg" : "top-12 rounded-b-lg"
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

export default SearchSelect;
