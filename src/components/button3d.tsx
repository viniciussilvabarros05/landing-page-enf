"use client"

import { motion } from "framer-motion";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  className?: string;
};

const Button3D = ({ children, className }: Props) => {
  return (
    <motion.button
      className={className}
      whileHover={{
        boxShadow: "3.5px 3.5px 1px #3b82f6", // Sombra para o efeito 3D
        y:-3.5,
        x:-3.5
      }}
      whileTap={{
        boxShadow: "0px 0px 1px #3b82f6", // Sombra para o efeito 3D
        y:0,
        x:0
      }}
      style={{
        backgroundColor: "#f5bf36",
        color: "#fff",
        padding: "8px 24px",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
      }}
      transition={{type:'spring', duration:0.3}}
    >
      {children}
    </motion.button>
  );
};

export default Button3D;
