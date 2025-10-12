"use client";
import { motion } from "framer-motion";

const MainWrapper = ({ children }) => {
  return (
    <motion.main
      className="flex-1 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, ease: "easeInOut" }}
    >
      {children}
    </motion.main>
  );
};

export default MainWrapper;

