import React, { useEffect, useState } from "react";

const useTheme = () => {
  const initialTheme = "dark";
  const [theme, setTheme] = useState(() => {
    return (
      localStorage.getItem("theme") ||
      (document.body.classList.contains("dark") ? "dark" : "light") ||
      initialTheme
    );
  });

  useEffect(() => {
    const body = document.body;
    body.classList.remove("light", "dark");
    body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme == "light") {
      setTheme("dark");
      return;
    }
    if (theme == "dark") {
      setTheme("light");
      return;
    }
  };

  return [theme, toggleTheme];
};

export default useTheme;
