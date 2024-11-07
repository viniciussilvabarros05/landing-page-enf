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
    <Container className="w-full">
      <div ref={ref}>
        {isInView && (
          <WordPullUp
            className="text-2xl lg:text-3xl w-full 2xl:text-5xl"
            words="A Informação é o Melhor Caminho para a Prevenção"
          />
        )}
      </div>
      <div className="flex flex-row justify-between gap-8 mt-20 max-lg:flex-col">
        <div className="flex flex-col gap-4 w-full lg:w-[60%] 2xl:w-[60%] items-end ">
          <BoxReveal boxColor={"#8FC0FB"} duration={0.3}>
            <h2 className="text-justify text-xl">
              O <span className="text-blue-500 font-semibold text-xl"> SIOVH </span>
              foi criado para expandir o acesso a informações confiáveis sobre
              vacinação de maneira inclusiva e acessível, oferecendo um ambiente
              prático, seguro e transparente ao usuário. Aqui, você encontrará
              orientações claras e objetivas sobre o Calendário Vacinal e
              condições especiais de saúde, direcionadas a diferentes grupos
              populacionais.
              <br />
              <br />
              Você tem a oportunidade de acompanhar as vacinas recomendadas para
              cada fase da vida e explorar conteúdos complementares, tudo em uma
              ferramenta prática que combina portabilidade, conectividade e
              fácil navegação.
              <br />
              <br />
              As informações deste website estão rigorosamente alinhadas às
              normas do Ministério da Saúde e respaldadas por Notas Técnicas
              oficiais atualizadas no ano de 2024.
              <br />
              <br />
              Navegue, informe-se e veja como a adoção de hábitos saudáveis pode
              fazer a diferença para você, sua família e toda a comunidade!
            </h2>
          </BoxReveal>

        </div>
        <div className="flex flex-col gap-4 w-fit">
          <BlurFade key={"button-3d-section2"} delay={0.5} inView>
            <div className="p-4 pb-8 h-full max-w-[300px] w-[100%] bg-blue-400 font-medium text-center flex flex-col items-center gap-4">
              <span className="py-1 px-4 rounded-full font-semibold bg-blue-200 w-fit">MISSÃO:</span>
              <p className="font-semibold">
                Expandir o acesso a informações confiáveis sobre o Calendário
                Vacinal.
              </p>
              <span className="py-1 px-4 rounded-full font-semibold bg-blue-200 w-fit">VISÃO:</span>
              <p className="font-semibold">
                Expandir o acesso a informações confiáveis sobre o Calendário
                Vacinal.
              </p>
              <span className="py-1 px-4 rounded-full font-semibold bg-blue-200 w-fit">PRINCÍPIOS/VALORES</span>
              <p className="font-semibold">
                Expandir o acesso a informações confiáveis sobre o Calendário
                Vacinal.
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
    </Container>
  );
};
