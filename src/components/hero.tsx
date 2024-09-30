import Link from "next/link";
import Button3D from "./button3d";
import BlurFade from "./ui/blur-fade";
import BoxReveal from "./ui/box-reveal";
import WordPullUp from "./ui/word-pull-up";

export const Hero = () => {
  return (
    <div className="w-full h-screen bg-center bg-cover flex items-center px-20 2xl:w-[70%]">
      <div className="flex flex-col gap-4 w-[30%] lg:w-[50%]">
        <BoxReveal boxColor={"#8FC0FB"} duration={0.3}>
          <h1 className="text-3xl font-semibold 2xl:text-5xl">
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
    </div>
  );
};
