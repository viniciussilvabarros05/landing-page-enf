import { Profile } from "@/utils/profiles";
import { Container } from "./ui/container";
import WordPullUp from "./ui/word-pull-up";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
type Props = {
  profile: Profile | null;
};

export const ModalProfile = ({ profile }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <Container className="p-4 items-center gap-8">
      <div className="flex gap-4 mx-auto items-center justify-between">
        <div className="bg-yellow-400 flex py-2 items-center mx-auto px-24 rounded-full gap-4 ml-44">
          <h1 className="text-4xl mx-auto text-gray-700 uppercase flex">
            {profile?.label}
          </h1>
        </div>
        <Image
          alt="sol"
          width={200}
          height={200}
          src="/images/sol.png"
          className="size-44"
        />
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
    </Container>
  );
};
