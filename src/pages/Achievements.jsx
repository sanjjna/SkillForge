import { motion } from "framer-motion";

const achievements = [
  { title: "First 1000 XP", icon: "🥇" },
  { title: "5-Day Streak", icon: "🔥" },
  { title: "Mastered JavaScript", icon: "💡" },
];

const Achievements = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex items-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <span className="text-3xl">{item.icon}</span>
            <h3 className="text-lg font-semibold">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
