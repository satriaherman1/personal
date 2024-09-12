import classNames from "classnames";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

type Props = {
  className?: string;
};

const DarkModeSwitcher = ({ className }: Props) => {
  const [darkMode, setDarkMode] = useState(false);

  // Function untuk toggle mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Cek dan atur tema saat komponen di-mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <label
      className={classNames(
        " inline-flex items-center cursor-pointer",
        className
      )}
    >
      <input
        type="checkbox"
        checked={darkMode}
        onChange={toggleDarkMode}
        className="sr-only peer"
      />
      <div className="w-14 h-8 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:bg-gray-700 transition-colors">
        <div
          className={`absolute top-1 left-1 h-6 w-6 flex items-center justify-center rounded-full bg-white border border-gray-300 transition-transform transform ${
            darkMode ? "translate-x-6" : ""
          }`}
        >
          {darkMode ? (
            <FiSun className="text-gray-800" size={16} />
          ) : (
            <FiMoon className="text-gray-500" size={16} />
          )}
        </div>
      </div>
    </label>
  );
};

export default DarkModeSwitcher;
