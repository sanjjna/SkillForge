import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const DailyChallenge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold text-primary">🔥 Daily Challenge</h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-gray-600 dark:text-gray-300"
      >
        Solve 5 JavaScript problems within 10 minutes to sharpen your skills!
      </motion.p>

      <motion.div
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow flex justify-between items-center"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="space-y-2">
          <span className="text-md font-semibold text-gray-700 dark:text-gray-200">
            Progress:
          </span>
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <CheckCircle
                key={i}
                className={`w-6 h-6 ${
                  i < 3 ? "text-green-500" : "text-gray-400 dark:text-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Continue
        </motion.button>
      </motion.div>

      <motion.div
        className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100 p-4 rounded-xl shadow-md"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <p className="italic text-center font-medium">
          “Every challenge is a step closer to mastery.”
        </p>
      </motion.div>
    </motion.div>
  );
};

export default DailyChallenge;
