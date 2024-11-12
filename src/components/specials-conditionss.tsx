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

export const SpecialsConditions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Container>
      <div ref={ref}>
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
              <div className="border-blue-500 border-2 w-52 h-72 rounded-md m-auto p-4 cursor-pointer">
                <h2 className="text-blue-500 text-center">Vacinas para Grupos Especiais</h2>
              </div>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/3">
              <div className="border-blue-500 border-2 w-52 h-72 rounded-md m-auto p-4  cursor-pointer">
                <h2 className="text-blue-500 text-center">
                  Vacinas para Situações de Emergência
                </h2>
              </div>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/3">
              <div className="border-blue-500 border-2 w-52 h-72 rounded-md m-auto p-4  cursor-pointer">
                <h2 className="text-blue-500 text-center">
                  Em que situações a vacinação não é indicada?
                </h2>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </BlurFade>
    </Container>
  );
};
