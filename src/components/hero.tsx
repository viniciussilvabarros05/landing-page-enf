import Image from "next/image";
import Link from "next/link";
import Button3D from "./button3d";
import BlurFade from "./ui/blur-fade";
import BoxReveal from "./ui/box-reveal";
import { Container } from "./ui/container";
import WordPullUp from "./ui/word-pull-up";

export const Hero = () => {
  return (
    <Container className="bg-[#BED9DE] p-4 flex flex-col items-center justify-center gap-10 xl:flex-row">
      <div className="flex flex-col gap-4 w-[100%] lg:w-[30%] xl:w-[50%]">
        <BoxReveal boxColor={"#8FC0FB"} duration={0.3}>
          <h1 className="lg:text-3xl font-semibold 2xl:text-4xl text-2xl">
            Bem-vindo ao
            <span className="text-blue-500 font-semibold"> SIOVH</span>, o nosso
            portal de informações sobre vacinas
          </h1>
        </BoxReveal>
        <BoxReveal boxColor={"#8FC0FB"} duration={0.5}>
          <h2 className="text-md text-justify">
            Explore informações essenciais sobre o Calendário Vacinal, seja você
            um profissional de saúde ou alguém em busca de orientações, encontre
            aqui tudo o que precisa para uma vacinação completa e segura.
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={"#8FC0FB"} duration={0.5}>
          <h2 className="text-md">
            <span className="text-blue-500 font-semibold">
              Explore e descubra como a vacinação pode fazer a diferença na sua
              vida!
            </span>
          </h2>
        </BoxReveal>
      </div>
      <BlurFade className="flex flex-1" delay={0.8} duration={0.8}>
        <Image
          alt="hero"
          width={500}
          height={0}
          layout="responsive"
          src="/images/hero.png"
        />
      </BlurFade>
    </Container>
  );
};
