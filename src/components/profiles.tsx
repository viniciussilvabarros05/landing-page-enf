"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { Container } from "./ui/container";
import WordPullUp from "./ui/word-pull-up";
import { useRef } from "react";
import { useInView } from "framer-motion";
import BlurFade from "./ui/blur-fade";
export const Profiles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Container>
      <div ref={ref}>
        {isInView && (
          <WordPullUp
            className="text-3xl w-full 2xl:text-5xl"
            words="ACESSE O SEU GRUPO"
          />
        )}
      </div>
      <BlurFade duration={0.3} delay={0.3} inView>
        <Carousel className="mt-40">
          <CarouselContent>
            <CarouselItem className="">
              <div className="border-blue-500 border-2 size-72 rounded-full m-auto"></div>
            </CarouselItem>
            <CarouselItem>
              <div className="border-blue-500 border-2 size-72 rounded-full m-auto"></div>
            </CarouselItem>
            <CarouselItem>
              <div className="border-blue-500 border-2 size-72 rounded-full m-auto"></div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </BlurFade>
    </Container>
  );
};
