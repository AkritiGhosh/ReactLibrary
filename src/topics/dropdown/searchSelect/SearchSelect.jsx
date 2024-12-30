import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from "react";
import countries from "../../../lib/countries.json";

const SearchSelect = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownItems, setDropdownItems] = useState([]);
  const [dropUp, setDropUp] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setMenuOpen(false);
      if (menuRef.current && menuRef.current.contains(e.target))
        setDropUp(
          window?.innerHeight - menuRef?.current?.getBoundingClientRect()?.y <=
            Math.min(400, dropdownItems?.length * 36 + 100)
        );
    };
    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  const handleChange = (e) => {
    setError("");
    setMenuOpen(false);
    const text = e.target.value;
    setInputValue(e.target.value);
    handleSearch(text);
  };

  const handleSearch = async (text) => {
    try {
      const textWithoutSpace = text.replace(/\s/g, "");
      const checkNotEmpty = textWithoutSpace.length > 0;
      const checkAllAlphabet = /^[a-zA-Z]+$/.test(textWithoutSpace);
      if (!checkNotEmpty) {
        setError("Please enter a country name to search");
        return;
      }
      if (!checkAllAlphabet) {
        setError("Please enter proper alphabetic input to search");
        return;
      }
      setMenuOpen(true);
      setLoading(true);
      setTimeout(() => {
        const filteredItems = countries.filter((country) =>
          country?.name?.toLowerCase()?.includes(text?.trim().toLowerCase())
        );
        setDropdownItems(filteredItems);
        setLoading(false);
      }, 1000);
    } catch (error) {
      setLoading(false);
      setDropdownItems([]);
      setError("Unable to fetch data");
    }
  };

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
            : `border-focus-800 dark:border-focus-600 rounded-b-lg
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
          className="w-full h-full bg-transparent border-none ring-0 focus:ring-0 focus:outline-none placeholder:text-base placeholder:text-focus-600/50 dark:placeholder:text-focus-400/40"
          name="search"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search company"
        />
      </div>
      {error?.length > 0 && <p className="text-sm text-red-800 mt-2">{error}</p>}
      {menuOpen &&
        (loading ? (
          <div
            style={{ backgroundSize: "200%" }}
            className="w-full h-2 absolute -bottom-2 bg-gradient-to-r from-app-400 via-transparent to-app-700 bg-repeat-x  animate-loader rounded-b-lg"
          />
        ) : dropdownItems?.length > 0 ? (
          <ul
            className={`right-0 w-full z-[333] max-h-[250px] overflow-auto p-1 list-style-none bg-white dark:bg-black shadow-menuOptionShadow absolute origin-top-right border border-focus-600 dark:border-focus-300   border-opacity-40 dark:border-opacity-50 focus:outline-none ${
              dropUp ? "bottom-12 top-auto rounded-t-lg" : "top-12 rounded-b-lg"
            } `}
          >
            {dropdownItems?.map((item) => (
              <li
                key={item?.code}
                className={`w-full p-2 flex gap-2 items-center hover:bg-focus-100/20 rounded-lg cursor-pointer text-sm text-focus-900 dark:text-focus-100 hover:font-medium mb-0.5 group font-normal bg-transparent `}
                onClick={() => {
                  setInputValue(item?.name);
                  setMenuOpen(false);
                }}
              >
                {item?.name}
              </li>
            ))}
          </ul>
        ) : (
          inputValue?.trim() && (
            <div
              className={`right-0 w-full z-[333] p-5  bg-white dark:bg-black shadow-menuOptionShadow absolute origin-top-right border border-focus-600 dark:border-focus-300 text-center  border-opacity-40 dark:border-opacity-50 focus:outline-none text-focus-900 dark:text-focus-100 ${
                dropUp
                  ? "bottom-12 top-auto rounded-t-lg"
                  : "top-12 rounded-b-lg"
              } `}
            >
              No results found
            </div>
          )
        ))}
    </div>
  );
};

export default SearchSelect;
