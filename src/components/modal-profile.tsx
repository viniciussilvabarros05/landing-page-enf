"use client";

import { Profile } from "@/utils/profiles";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Button3D from "./button3d";
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
import { EmergencyVaccines } from "@/utils/emergency-vaccines";

type Props = {
  profile: Profile | undefined;
};

export const ModalProfile = ({ profile }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const navigation = useRouter();

  const vaccinesData = (idSearch: number) =>{

    let data= vaccines.filter((vaccine) => vaccine.categories.includes(idSearch));

    if(data.length ==0){
      return EmergencyVaccines.filter((vaccine) => vaccine.categories.includes(idSearch));
    }
    return data

  }

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
      className="w-full h-full border-blue-500 bg-white"
      initial="hidden"
      variants={{
        hidden: { scale: 0, borderRadius: "9999999px" },
        show: { scale: 1, borderRadius: "0px" },
      }}
      animate={"show"}
      transition={{ ease: "linear", delay: 0.2 }}
      exit={{ scale: 0 }}
    >
      <div className="items-center gap-4 relative flex flex-col justify-center mx-auto w-[100%] lg:px-20 px-5">
      <ButtonBack
        className={`bg-[${profile?.color}] mr-auto`}
        style={{ backgroundColor: profile?.color, position:"sticky" }}
      />
        <div className="flex gap-4 mx-auto items-center justify-between" id="label">
          <div
            style={{ backgroundColor: profile?.color }}
            className={`flex py-2 items-center mx-auto px-16 lg:px-24 rounded-full gap-4`}
          >
            <h1 className="text-4xl mx-auto text-gray-100 uppercase flex max-lg:text-2xl">
              {profile?.label}
            </h1>
          </div>
        </div>
        <div className="w-[250px] lg:w-[500px] lg:h-[250px]  rounded-2xl mb-4">
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
        
        <p className="lg:w-1/2 text-justify mb-4" dangerouslySetInnerHTML={{ __html: profile?.description || " " }}></p>
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
                      <NavigationMenuContent className="w-[250px] gap-4 flex flex-col p-4 items-center mr-10 justify-center z-[99] bg-blue-300">
                        {vaccinesData(category.id).map((vaccines) => {
                          return (
                            <NavigationMenuLink className="w-full">
                              <Button3D
                                className={`w-[220px]`}
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
