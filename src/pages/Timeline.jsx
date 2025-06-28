import React, { useState } from "react";
import { motion } from "framer-motion";

const activities = [
  { date: "2025-06-26", title: "Completed React Basics", type: "Lesson", xp: 200 },
  { date: "2025-06-25", title: "Unlocked 'JS Pro' Badge", type: "Achievement", xp: 100 },
  { date: "2025-06-24", title: "Completed JavaScript Loops", type: "Lesson", xp: 150 },
  { date: "2025-06-23", title: "Daily Streak Continued", type: "Streak", xp: 50 },
];

const Timeline = () => {
  const [search, setSearch] = useState("");

  const filteredActivities = activities.filter((activity) =>
    activity.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">🕓 Your Learning Timeline</h2>

      <input
        type="text"
        placeholder="Search activities..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md mb-6 p-3 rounded border dark:bg-gray-800 dark:text-white dark:border-gray-600"
      />

      <ol className="relative border-l-2 border-primary dark:border-indigo-400 space-y-6">
        {filteredActivities.map((activity, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className="ml-6 relative"
          >
            <span className="absolute w-4 h-4 bg-primary rounded-full -left-2.5 top-1"></span>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{activity.title}</h3>
                <span className="text-sm text-primary font-bold">{activity.xp} XP</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {activity.type} — {activity.date}
              </p>
            </div>
          </motion.li>
        ))}
        {filteredActivities.length === 0 && (
          <p className="text-gray-400">No activities found.</p>
        )}
      </ol>
    </div>
  );
};

export default Timeline;
