import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const quotes = [
  "Small progress is still progress. 🚀",
  "Keep showing up. You’re doing great!",
  "One skill at a time — you’ve got this! 💡",
  "Practice today, master tomorrow. 🔁",
  "Success is the sum of small efforts repeated daily.",
  "Consistency beats intensity. Stay steady. 🌱"
];

const QuoteCard = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-4 mb-4 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-100 text-center shadow"
    >
      <p className="text-md font-medium italic">“{quote}”</p>
    </motion.div>
  );
};

export default QuoteCard;
