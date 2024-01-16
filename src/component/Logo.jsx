"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Logo = () => {
  console.log("Logo is renderd");
  const MotionLink = motion(Link);
  return (
    <div className="flex items-center justify-between mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-lemon border-2 border-solid border-blue-light"
        whileHover={{
          scale: 1.2,
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        MH
      </MotionLink>
    </div>
  );
};

export default Logo;
