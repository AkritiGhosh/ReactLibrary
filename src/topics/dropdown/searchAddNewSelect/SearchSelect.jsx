import React, { useEffect, useState, useRef } from "react";
import countries from "../../../lib/countries.json";
import SearchInput from "../SearchInput";
import SearchDropdown from "../SearchDropdown";

const SearchAddNewSelect = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [allCountries, setAllCountries] = useState(countries);
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
    setInputValue(e.target.value);
    handleSearch(e.target.value);
  };

  const handleSearch = async (text) => {
    try {
      const textWithoutSpace = text.replace(/\s/g, "");
      const checkNotEmpty = textWithoutSpace.length > 0;
      const checkAllAlphabet = /^[a-zA-Z]+$/.test(textWithoutSpace);
      if (text?.length == 0) return;
      if (!checkNotEmpty && text?.length > 0) {
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
        const filteredItems = allCountries.filter((country) =>
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

  const handleAddNew = () => {
    const text = inputValue;
    const textWithoutSpace = text.replace(/\s/g, "");
    const checkNotEmpty = textWithoutSpace.length > 0;
    const checkAllAlphabet = /^[a-zA-Z]+$/.test(textWithoutSpace);
    if (text?.length == 0) return;
    if (!checkNotEmpty && text?.length > 0) {
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
      setAllCountries((prev) => [
        ...prev,
        { name: text, code: textWithoutSpace.toUpperCase() },
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="w-2/5 min-w-64 flex flex-col gap-2 items-center">
      <label
        htmlFor="search"
        className="w-full text-base text-app-700 dark:text-app-400"
      >
        Add your address
      </label>
      <div
        className="w-full relative inline-flex flex-col *:transition-colors *:duration-500 *:ease-in-out"
        ref={menuRef}
      >
        <SearchInput
          menuOpen={menuOpen}
          dropUp={dropUp}
          inputValue={inputValue}
          handleChange={handleChange}
        />
        {error?.length > 0 && (
          <p className="text-sm text-red-800 mt-2">{error}</p>
        )}
        {menuOpen &&
          (loading ? (
            <div
              style={{ backgroundSize: "200%" }}
              className="w-full h-2 absolute -bottom-2 bg-gradient-to-r from-app-400 via-transparent to-app-700 bg-repeat-x  animate-loader rounded-b-lg"
            />
          ) : dropdownItems?.length > 0 ? (
            <SearchDropdown
              as:Tag="ul"
              className={`max-h-[250px] overflow-auto p-1 list-style-none`}
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
              <li
                className={`w-full p-2 flex gap-2 items-center hover:bg-focus-100/20 rounded-lg cursor-pointer text-sm text-focus-900 dark:text-focus-100 font-medium mb-0.5 group bg-transparent `}
                onClick={handleAddNew}
              >
                Add new address - {inputValue}
              </li>
            </SearchDropdown>
          ) : (
            <SearchDropdown
              as:Tag="div"
              className={`p-5 text-center text-focus-900 dark:text-focus-100`}
            >
              <button
                onClick={handleAddNew}
                className="w-full h-full font-medium"
              >
                Add new address - {inputValue}
              </button>
            </SearchDropdown>
          ))}
      </div>
    </div>
  );
};

export default SearchAddNewSelect;
