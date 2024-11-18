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
      <div className="flex flex-row justify-between gap-8 mt-20 max-lg:flex-col max-lg:items-center">
        <div className="flex flex-col gap-4 w-full lg:w-[60%] 2xl:w-[60%] items-end ">
          <BoxReveal boxColor={"#8FC0FB"} duration={0.3}>
            <h2 className="text-justify text-xl">
              <span className="text-blue-500 font-semibold text-xl">
                O SIOVH{" "}
              </span>
              foi criado para ampliar o acesso a informações confiáveis sobre
              vacinação de maneira inclusiva e acessível, oferecendo um ambiente
              prático, seguro e transparente ao usuário. Aqui, você encontrará
              orientações claras e objetivas sobre o Calendário Vacinal e
              condições especiais de saúde, direcionadas a diferentes grupos
              populacionais.
            </h2>
          </BoxReveal>
          <br />
          <BoxReveal boxColor={"#8FC0FB"} duration={0.5}>
            <h2 className="text-justify text-xl">
              Você terá a oportunidade de acompanhar as vacinas recomendadas
              para cada fase da vida e explorar conteúdos complementares, tudo
              em uma ferramenta prática que combina portabilidade, conectividade
              e fácil navegação.
            </h2>
          </BoxReveal>
          <br />
          <BoxReveal boxColor={"#8FC0FB"} duration={0.7}>
            <h2 className="text-justify text-xl">
              As informações deste
              <i> Website </i>
              estão rigorosamente alinhadas às normas do Ministério da Saúde e
              respaldadas por Notas Técnicas oficiais atualizadas no ano de
              2024.
            </h2>
          </BoxReveal>
          <br />
          <BoxReveal boxColor={"#8FC0FB"} duration={0.7}>
            <h2 className="text-justify text-xl">
              Navegue, informe-se e veja como o Calendário de Vacinação completo
              protege você, sua família e toda a comunidade!
            </h2>
          </BoxReveal>
        </div>
        <div className="flex flex-col gap-4 w-fit">
          <BlurFade key={"button-3d-section2"} delay={0.5} inView>
            <div className="p-4 pb-8 h-full max-w-[300px] w-[100%] bg-blue-400 font-medium text-center flex flex-col items-center gap-4">
              <span className="py-1 px-4 rounded-full font-semibold bg-blue-200 w-fit">
                MISSÃO
              </span>
              <p className="font-semibold">
                Ampliar o acesso a informações confiáveis sobre o Calendário
                Vacinal.
              </p>
              <span className="py-1 px-4 rounded-full font-semibold bg-blue-200 w-fit">
                VISÃO
              </span>
              <p className="font-semibold">
                Busca-se ser uma referência em educação em saúde, orientando a
                população e contribuindo para a promoção da saúde por meio da
                prevenção de doenças através do conhecimento.
              </p>
              <span className="py-1 px-4 rounded-full font-semibold bg-blue-200 w-fit">
                PRINCÍPIOS/VALORES
              </span>
              <p className="font-semibold">
                Inclusão; Transparência; Acessibilidade; Inovação; Educação;
                Confiabilidade.
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
    </Container>
  );
};
