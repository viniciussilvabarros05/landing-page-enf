"use client";

import Autoplay from "embla-carousel-autoplay";
import { Container } from "./ui/container";
import WordPullUp from "./ui/word-pull-up";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import BlurFade from "./ui/blur-fade";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
export const SpecialsConditions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const navigation = useRouter();

  function handleNavigationTo(path: string) {
    navigation.push(path);
  }

  return (
    <Container>
      <div ref={ref} id="conditions-specials">
        {isInView && (
          <WordPullUp
            className="text-2xl lg:text-3xl w-full 2xl:text-5xl"
            words="Condições Especiais de Saúde: O que você precisa saber"
          />
        )}
      </div>
      <BlurFade duration={0.3} delay={0.3} inView className="px-10 lg:px-0">
        <Carousel
          className="mt-20"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem className="lg:basis-1/3">
              <motion.div
                whileHover={{
                  scale: 1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                transition={{ type: "spring", bounce: 0.7 }}
                onClick={() => handleNavigationTo("/specials-groups")}
                className="border-yellow-300 border-[8px] w-56 h-[18rem] rounded-2xl m-auto  flex items-center justify-center cursor-pointer relative"
              >
                <Image
                  src="/images/grupos-especiais.png"
                  alt="Grupos especiais"
                  width={300}
                  height={350}
                  className="w-fit"
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
              <h2 className="text-blue-500 text-center font-semibold uppercase mt-4 w-56 m-auto">
                Vacinas para Grupos Especiais
              </h2>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/3">
              <motion.div
                whileHover={{
                  scale: 1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                transition={{ type: "spring", bounce: 0.7 }}
                onClick={() => handleNavigationTo("/profiles/emergencia")}
                className="border-yellow-300 border-[8px] w-56 h-[18rem] rounded-2xl m-auto  flex items-center justify-center cursor-pointer relative"
              >
                <Image
                  src="/images/logo-emergency.png"
                  alt="Grupos emergencia"
                  width={300}
                  height={350}
                  className="w-fit"
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
              <h2 className="text-blue-500 text-center font-semibold uppercase mt-4 w-56 m-auto">
                Vacinas para Situações de Emergência
              </h2>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/3">
              <motion.div
                whileHover={{
                  scale: 1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                transition={{ type: "spring", bounce: 0.7 }}
                onClick={() => handleNavigationTo("/contraindications")}
                className="border-yellow-300 border-[8px] w-56 h-[18rem] rounded-2xl m-auto  flex items-center justify-center cursor-pointer relative"
              >
                <Image
                  src="/images/nao-indicadas.png"
                  alt="Não indicadas"
                  width={300}
                  height={350}
                  className="w-fit"
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
              <h2 className="text-blue-500 text-center font-semibold uppercase mt-4 w-56 m-auto">
                Em que situações a vacinação não é indicada?
              </h2>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </BlurFade>
    </Container>
  );
};
