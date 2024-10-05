"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "./ui/carousel";
import { Container } from "./ui/container";
import WordPullUp from "./ui/word-pull-up";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, useInView } from "framer-motion";
import BlurFade from "./ui/blur-fade";
import { Profile, profiles } from "@/utils/profiles";
import { motion } from "framer-motion";
import { ModalProfile } from "./modal-profile";
import { useRouter } from "next/navigation";

export const Profiles = () => {
  const ref = useRef(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const isInView = useInView(ref, { once: true });
  const navigation = useRouter()
  const [currentProfile, setCurrentProfile] = useState<Profile | null>(null);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const openModal = (profile: Profile) => {
    setCurrentProfile(profile);
  };

  function handleNavigationTo(profileLabel: string,) {
    navigation.push(`/profiles/${profileLabel}`);
    
  }

  const closeModal = () => {
    setCurrentProfile(null);
    setTimeout(() => {

    }, 150);
  };


  return (
    <Container>
      <div ref={ref} id="profiles">
        {isInView && (
          <WordPullUp
            className="text-3xl w-full 2xl:text-5xl"
            words="ACESSE O SEU GRUPO"
          />
        )}
      </div>
      <BlurFade duration={0.3} delay={0.3} inView>
        <Carousel className="mt-20" opts={{ loop: true }} setApi={setApi}>
          <CarouselContent>
            {profiles.map((profile) => {
              return (
                <CarouselItem className="basis-1/3 flex items-center justify-center flex-col gap-3 py-6">
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    transition={{ type: "spring", bounce: 0.7 }}
                    onClick={() => handleNavigationTo(profile.label)}
                    className="border-blue-500 border-2 size-56 rounded-full m-auto overflow-hidden p-4 cursor-pointer"
                  >
                    <img
                      src={profile.img}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>

                  <p className="text-md text-blue-500 font-semibold capitalize">
                    {profile.label}
                  </p>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="my-8 flex gap-2 mx-auto w-fit">
          {Array.from({ length: count }, (_, index) => index).map(
            (point, index) => {
              return (
                <div
                  className={`size-2 rounded-full transition-all duration-300 ${
                    index + 1 == current ? "bg-yellow-400" : "bg-gray-400"
                  }`}
                ></div>
              );
            }
          )}
        </div>
      </BlurFade>

    </Container>
  );
};
