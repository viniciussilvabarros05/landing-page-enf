"use client";

import Button3D from "./button3d";
import BlurFade from "./ui/blur-fade";
import WordPullUp from "./ui/word-pull-up";
import { useRef } from "react";
import { useInView } from "framer-motion";
import BoxReveal from "./ui/box-reveal";
import { Container } from "./ui/container";
export const Section2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Container>
      <div ref={ref}>
        {isInView && (
          <WordPullUp
            className="text-2xl lg:text-3xl w-full 2xl:text-5xl"
            words="Proteção em Cada Fase da Vida - As Vacinas que Salvam Vidas"
          />
        )}
      </div>
      <div className="flex flex-col gap-4 w-full lg:w-[60%] 2xl:w-[50%] ml-auto items-end mt-20">
        <BoxReveal boxColor={"#8FC0FB"} duration={0.3}>
          <h2 className="text-end">
            A vacinação é fundamental para garantir proteção em todas as etapas
            da vida. Saiba quais vacinas são indicadas para gestantes, crianças,
            adolescentes, adultos, idosos e outros grupos específicos.
          </h2>
        </BoxReveal>
        <BlurFade key={"button-3d-section2"} delay={0.5} inView>
          <Button3D className="w-fit">
            <p className="text-bold ">
              Descubra as Vacinas Necessárias para Você
            </p>
          </Button3D>
        </BlurFade>
      </div>
    </Container>
  );
};
