"use client";
import Link from "next/link";
import Button3D from "./button3d";
import { LinkHeader } from "./LinkHeader";
import { motion } from "framer-motion";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full m-auto flex p-8 fixed top-0 left-0 bg-white/40 backdrop-blur-md shadow-md z-10">
      <div className="w-full gap-8 items-center justify-center hidden lg:flex">
        <LinkHeader href={""} label={"Início"} />
        <LinkHeader href={"/#profiles"} label={" Vacina para todos"} />
        <LinkHeader href={""} label={"Unidades de Saúde"} />
        <LinkHeader href={""} label={"Campanhas de Vacinação"} />
        <LinkHeader href={""} label={"Mais informações"} />
        <Button3D className="bg-[#f5bf36]">
          <Link href={""} className="font-bold">
            Contato
          </Link>
        </Button3D>
      </div>

      <DropdownMenu onOpenChange={setOpen} open={open}>
        <DropdownMenuTrigger asChild >
          <motion.div
            className="size-8 ml-auto items-center justify-center flex flex-col lg:hidden relative"
            
          >
            <motion.span
              className="w-6 rounded-lg h-[3px] bg-blue-500 absolute"
              initial="hidden"
              variants={{
                open: { rotate: "-45deg", top: "0.5rem" },
                hidden: { rotate: "0deg", top: "0rem" },
              }}
              animate={open ? "open" : "hidden"}
            />
            <motion.span
              className="w-6 rounded-lg h-[3px] bg-blue-500  absolute"
              initial="hidden"
              variants={{
                open: { rotate: "45deg" },
                hidden: { rotate: "0deg", top: "0.5rem" },
              }}
              animate={open ? "open" : "hidden"}
            />
            <motion.span
              initial="hidden"
              className="w-6 rounded-lg h-[3px] bg-blue-500 absolute"
              variants={{
                open: { top: "0.5rem", rotate: "45deg" },
                hidden: { top: "1rem", rotate: "0deg" },
              }}
              animate={open ? "open" : "hidden"}
            />
          </motion.div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col items-start justify-start gap-4 p-4">
          <LinkHeader href={""} label={"Início"} className="w-full"/>
          <LinkHeader href={"/#profiles"} label={" Vacina para todos"} className="w-full"/>
          <LinkHeader href={""} label={"Unidades de Saúde"} className="w-full"/>
          <LinkHeader href={""} label={"Campanhas de Vacinação"} className="w-full"/>
          <LinkHeader href={""} label={"Mais informações"} className="w-full"/>
          <Button3D className="bg-[#f5bf36] w-full">
            <Link href={""} className="font-bold w-full">
              Contato
            </Link>
          </Button3D>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};
