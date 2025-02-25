import { useEffect, useState } from "react";

const useDarkmode = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((preTheme) => (preTheme === "dark" ? "light" : "dark"));
  };
  return [theme, toggleTheme];
};

export default useDarkmode
