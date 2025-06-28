import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Skills from "./pages/Skills";
import Achievements from "./pages/Achievements";
import Sidebar from "./components/Sidebar";
import DailyChallenge from "./pages/DailyChallenge";
import LearningPath from "./pages/LearningPath";
import Profile from "./pages/Profile";
import Timeline from "./pages/Timeline";


function App() {
  return (
    
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/challenge" element={<DailyChallenge />} />
            <Route path="/learning" element={<LearningPath />} />   
            <Route path="/profile" element={<Profile />} />   
            <Route path="/timeline" element={<Timeline />} />

          </Routes>
        </div>
      </div>
    
  );
}

export default App;
