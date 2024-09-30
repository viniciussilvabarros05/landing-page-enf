"use client";

import Autoplay from "embla-carousel-autoplay"
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
            className="text-3xl w-full 2xl:text-5xl"
            words="Segurança comprovada: Veja como as vacinas reduzem problemas de saúde ao longo dos anos"
          />
        )}
      </div>
      <BlurFade duration={0.3} delay={0.3} inView>
        <Carousel
          className="mt-40"
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
            <CarouselItem className="basis-1/4">
              <div className="border-blue-500 border-2 w-52 h-72 rounded-md m-auto"></div>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <div className="border-blue-500 border-2 w-52 h-72 rounded-md m-auto"></div>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <div className="border-blue-500 border-2 w-52 h-72 rounded-md m-auto"></div>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <div className="border-blue-500 border-2 w-52 h-72 rounded-md m-auto"></div>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <div className="border-blue-500 border-2 w-52 h-72 rounded-md m-auto"></div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </BlurFade>
    </Container>
  );
};
