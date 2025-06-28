import { motion } from "framer-motion";

const modules = [
  { title: "HTML & CSS", percent: 100 },
  { title: "JavaScript Basics", percent: 80 },
  { title: "React Fundamentals", percent: 60 },
];

const LearningPath = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold">Learning Path</h2>
    {modules.map((mod, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: idx * 0.2 }}
        className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
      >
        <h3 className="font-semibold">{mod.title}</h3>
        <div className="w-full bg-gray-200 h-2 rounded mt-2">
          <div
            className="bg-primary h-2 rounded"
            style={{ width: `${mod.percent}%` }}
          ></div>
        </div>
        <span className="text-sm text-gray-500">{mod.percent}% complete</span>
      </motion.div>
    ))}
  </div>
);

export default LearningPath;
