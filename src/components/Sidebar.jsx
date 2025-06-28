import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle"; // Make sure this file exists

const Sidebar = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`w-64 bg-gray-100 dark:bg-gray-800 text-black dark:text-white min-h-screen p-6 space-y-6 shadow-lg ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} transition-colors`}>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-pink-600">SkillForge</h1>
        <ThemeToggle />
      </div>
      <nav className="flex flex-col space-y-3">
        <Link to="/"   className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded transition">Dashboard</Link>
        <Link to="/skills"  className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded transition" >Skills</Link>
        <Link to="/achievements" className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded transition"> Achievements</Link>
        <Link to="/challenge" className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded transition"> Daily Challenge</Link>
        <Link to="/learning"  className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded transition"> Learning Path</Link>
        
        <Link to="/timeline"className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded transition">Timeline</Link>
        <Link to="/profile" className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded transition"> Profile</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
