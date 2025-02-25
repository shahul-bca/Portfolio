import React from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import useDarkmode from "./useDarkmode";
const ThemeToggle = () => {
  const [theme, toggleTheme] = useDarkmode();
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded text-gray-800 dark:text-gray-200 transition-colors duration-300"
    >
      {theme === "dark" ? <MdOutlineLightMode /> : <IoMoonOutline />}
    </button>
  );
};

export default ThemeToggle;
