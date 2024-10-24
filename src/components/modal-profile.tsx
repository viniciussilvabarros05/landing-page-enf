"use client";

import { Profile, profiles } from "@/utils/profiles";
import { Container } from "./ui/container";
import WordPullUp from "./ui/word-pull-up";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Category } from "@/utils/categories-kids";
import Button3D from "./button3d";
import { CircleArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { vaccines } from "@/utils/vaccines";
import { ButtonBack } from "@/app/[profile]/[slug]/[nome]/buttonBack";

type Props = {
  profile: Profile | undefined;
};

export const ModalProfile = ({ profile }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const navigation = useRouter();

  const vaccinesData = (idSearch: number) =>
    vaccines.filter((vaccine) => vaccine.categories.includes(idSearch));

  function handleNavigationTo(
    profileLabel: string,
    categoryId: number,
    vaccine: string
  ) {
    navigation.push(`/${profileLabel}/${categoryId}/${vaccine}`);
  }
  function back() {
    navigation.back();
  }
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  },[])
  return (
    <motion.div
      className="w-full h-full border-blue-500 bg-white relative"
      initial="hidden"
      variants={{
        hidden: { scale: 0, borderRadius: "9999999px" },
        show: { scale: 1, borderRadius: "0px" },
      }}
      animate={"show"}
      transition={{ ease: "linear", delay: 0.2 }}
      exit={{ scale: 0 }}
    >
      <ButtonBack
        className={`bg-[${profile?.color}]`}
        style={{ backgroundColor: profile?.color }}
      />
      <div className="p-4 items-center gap-8 relative flex flex-col justify-center mx-auto w-[100%] lg:px-20 px-5 mt-10">
        <div className="flex gap-4 mx-auto items-center justify-between" id="label">
          <div
            style={{ backgroundColor: profile?.color }}
            className={`flex py-2 items-center mx-auto px-16 lg:px-24 rounded-full gap-4`}
          >
            <h1 className="text-4xl mx-auto text-gray-100 uppercase flex">
              {profile?.label}
            </h1>
          </div>
        </div>
        <div className="w-[250px] lg:w-[400px] lg:h-[350px]  rounded-2xl">
          <Image
            alt="crianças"
            src={profile?.hero || ""}
            className="rounded-2xl"
            width={500}
            height={250}
            layout="responsive"
          />
        </div>
        <h2 className="font-bold">{profile?.title}</h2>
        <p className="lg:w-1/2 text-justify mb-4">{profile?.description}</p>
        <div className="grid lg:grid-cols-5 lg:grid-rows-3 gap-8 p-4">
          {profile?.categories.map((category) => {
            return (
              <div className="flex flex-col gap-4">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        style={{ backgroundColor: profile?.color || "#F5BF36"  }}
                        className={`text-white font-semibold min-w-[150px] max-w-[180px] h-fit hover:bg-blue-500 mx-auto hover:text-white`}
                      >
                        {category.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="gap-4 flex flex-col p-4 items-center mr-10 justify-center z-[99] bg-blue-300">
                        {vaccinesData(category.id).map((vaccines) => {
                          return (
                            <NavigationMenuLink className="w-full">
                              <Button3D
                                className={`w-full max-w-[250px]`}
                                style={{ backgroundColor: profile?.color }}
                                onClick={() =>
                                  handleNavigationTo(
                                    profile.label,
                                    category.id,
                                    vaccines.nome
                                  )
                                }
                              >
                                <div className="w-full ">{vaccines.nome}</div>
                              </Button3D>
                            </NavigationMenuLink>
                          );
                        })}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <img src={category.img} className="size-44 object-contain" />
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
