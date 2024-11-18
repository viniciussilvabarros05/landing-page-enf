import Image from "next/image";
import Link from "next/link";
import Button3D from "./button3d";
import BlurFade from "./ui/blur-fade";
import BoxReveal from "./ui/box-reveal";
import { Container } from "./ui/container";
import WordPullUp from "./ui/word-pull-up";

export const Hero = () => {
  return (
    <Container className="xl:w-full mt-0 p-0 lg:p-0">
      <div
        className="w-fit lg:px-44 h-[90vh] xl:flex-row gap-10 items-center justify-start py-2 flex flex-col bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url(/images/hero-bg2.png)", backgroundPosition:'center' }}
      >
        <div className="flex flex-col gap-4 w-[100%] lg:w-[30%] xl:w-[50%] max-lg:px-4">
          <BoxReveal boxColor={"#8FC0FB"} duration={0.3}>
            <h1 className="lg:text-3xl font-semibold 2xl:text-4xl text-2xl">
              Bem-vindo ao
              <span className="text-blue-500 font-semibold"> SIOVH</span>,
              Suporte Instrucional Online para Vacinação Humana
            </h1>
          </BoxReveal>
          <BoxReveal boxColor={"#8FC0FB"} duration={0.5}>
            <h2 className="text-md text-justify text-xl">
              Explore informações essenciais sobre o Calendário Vacinal, seja
              você um profissional de saúde ou alguém em busca de orientações.
              Encontre aqui tudo o que precisa para a vacinação completa e
              segura.
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#8FC0FB"} duration={0.5}>
            <h2 className="text-md">
              <span className="text-blue-500 font-semibold text-xl">
              A informação é o melhor caminho para a prevenção! 
              </span>
            </h2>
          </BoxReveal>
        </div>

      </div>
    </Container>
  );
};
