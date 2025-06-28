import React from "react";
import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard";
import skills from "../data/skills";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <motion.h2
        className="text-3xl font-bold text-primary"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        🚀 My Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            <SkillCard title={skill.name} xp={skill.xp} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
