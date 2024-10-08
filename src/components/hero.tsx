import Link from "next/link";
import Button3D from "./button3d";
import BlurFade from "./ui/blur-fade";
import BoxReveal from "./ui/box-reveal";
import { Container } from "./ui/container";
import WordPullUp from "./ui/word-pull-up";

export const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col gap-4 w-[100%] lg:w-[30%] xl:w-[50%]">
        <BoxReveal boxColor={"#8FC0FB"} duration={0.3}>
          <h1 className="lg:text-3xl font-semibold 2xl:text-5xl text-2xl">
            Bem-vindo ao (nome do site), o nosso portal de informações sobre
            vacinas
          </h1>
        </BoxReveal>
        <BoxReveal boxColor={"#8FC0FB"} duration={0.5}>
          <h2 className="text-md">
            Aqui, você encontrará tudo o que precisa saber para{" "}
            <span className="text-blue-500 font-semibold">
              proteger sua saúde e a de sua família.{" "}
            </span>
            Nosso objetivo é guiá-lo de forma simples e clara sobre as vacinas
            recomendadas para cada etapa da vida e condições especiais. Juntos,
            podemos cuidar do nosso bem-estar e garantir um futuro mais seguro
            para todos.{" "}
            <span className="text-blue-500 font-semibold">
              Explore e descubra como a vacinação pode fazer a diferença na sua
              vida!
            </span>
          </h2>
        </BoxReveal>

        <BlurFade key={"button-3d-hero"} delay={0.5} inView>
          <Button3D className="mr-auto">
            <Link href={""} className="font-bold">
              Descubra as Vacinas Necessárias para Você
            </Link>
          </Button3D>
        </BlurFade>
      </div>
    </Container>
  );
};
