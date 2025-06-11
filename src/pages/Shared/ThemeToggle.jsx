import { useEffect, useState } from "react";
import { BiSun } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
    onClick={toggleTheme}
    className="p-1 text-primary"
    aria-label="Toggle Dark Mode"
  >
    {theme === "light" ? <MdDarkMode size={24} /> : <BiSun size={24} />}
  </button>
  );
};

export default ThemeToggle;
