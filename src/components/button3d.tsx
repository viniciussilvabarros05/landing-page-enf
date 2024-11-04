"use client"

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  className?: string;
  onClick?: ()=>void;
  style?: any;
};

const Button3D = ({ children, className,onClick, style }: Props) => {
  return (
    <motion.button
      style={style}
      className={cn("bg-[#f5bf36] text-blue-500 font-bold px-6 py-2 border-none rounded-[10px] cursor-pointer",className)}
      whileHover={{
        boxShadow: "3.5px 3.5px 1px #3b82f6", // Sombra para o efeito 3D
        y:-3.5,
        x:-3.5
      }}
      onClick={onClick}
      whileTap={{
        boxShadow: "0px 0px 1px #3b82f6", // Sombra para o efeito 3D
        y:0,
        x:0
      }}
      transition={{type:'spring', duration:0.3}}
    >
      {children}
    </motion.button>
  );
};

export default Button3D;
