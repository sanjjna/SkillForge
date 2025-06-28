import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-2xl p-1 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
      title="Toggle Theme"
    >
      {darkMode ? "🌞" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
