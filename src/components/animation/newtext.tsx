"use client";
import { motion } from "framer-motion";

const NewTextAnimation = () => {
  const letters = ["N", "e", "w"];

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          position: "absolute",
          top: 10,
          right: 0,
          transform: "translate(-100%, 0%)",
          fontSize: "14px",
          fontWeight: "bold",
          color: "red", // Change the color to your preference
          display: "flex",
        }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ y: 0 }}
            animate={{
              y: [-2.5, 0, -2.5, 0], // Array of values for the vertical jump
              transition: {
                duration: 0.85, // Duration of each jump
                repeatType: "mirror",
                repeat: Infinity, // Infinite loop
                delay: index * 0.2, // Stagger the animation for each letter
                ease: "easeInOut", // Use an easeInOut easing function for a natural jump
              },
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default NewTextAnimation;
