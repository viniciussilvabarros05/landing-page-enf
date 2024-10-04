"use client";

import { Profile } from "@/utils/profiles";
import { Container } from "./ui/container";
import WordPullUp from "./ui/word-pull-up";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Category } from "@/utils/categories-kids";
import Button3D from "./button3d";
import { CircleArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
type Props = {
  profile: Profile | null;
  exit: () => void;
};

export const ModalProfile = ({ profile, exit }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const navigation = useRouter();

  function handleNavigationTo(profileLabel: string, categoryId: number) {
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
    navigation.push(`${profileLabel}/${categoryId}`);
  }
  return (
    <Container className="p-4 items-center gap-8 relative">
      <>
        <Button3D className="absolute left-12 top-8 rounded-full px-2">
          <CircleArrowLeft className="size-12 text-white" onClick={exit} />
        </Button3D>
        <div className="flex gap-4 mx-auto items-center justify-between">
          <div className="bg-yellow-400 flex py-2 items-center mx-auto px-24 rounded-full gap-4">
            <h1 className="text-4xl mx-auto text-gray-700 uppercase flex">
              {profile?.label}
            </h1>
          </div>
        </div>
        <div className="w-[600px] h-[350px]  rounded-2xl">
          <Image
            alt="crianças"
            src={profile?.hero || ""}
            className="rounded-2xl"
            width={600}
            height={300}
            layout="responsive"
          />
        </div>
        <h2 className="font-bold">{profile?.title}</h2>
        <p className="w-1/2 text-justify mb-4">{profile?.description}</p>
        <div className="grid grid-cols-5 grid-rows-3 gap-8 p-4">
          {profile?.categories.map((category) => {
            return (
              <div className="flex flex-col gap-4">
                <Button3D
                  onClick={() => handleNavigationTo(profile.label, category.id)}
                >
                  <div>{category.label}</div>
                </Button3D>

                <img src={category.img} className="size-44 object-contain" />
              </div>
            );
          })}
        </div>
      </>
    </Container>
  );
};
