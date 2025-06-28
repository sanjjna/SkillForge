import { motion } from "framer-motion";

const SkillCard = ({ title, xp }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md"
    whileHover={{ scale: 1.05 }}
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>XP: {xp}</p>
  </motion.div>
);

export default SkillCard;
