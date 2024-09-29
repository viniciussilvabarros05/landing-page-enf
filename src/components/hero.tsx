import BoxReveal from "./ui/box-reveal";

export const Hero = () => {
  return (
    <div className="w-screen h-screen bg-center bg-cover flex items-center px-20">
      <div className="flex flex-col gap-4 max-w-[40%]">
        <BoxReveal boxColor={"#8FC0FB"} duration={0.3}>
          <h1 className="text-5xl font-bold lg:text-4xl">
            Bem-vindo ao (nome do site), o nosso portal de informações sobre
            vacinas
          </h1>
        </BoxReveal>
        <BoxReveal boxColor={"#8FC0FB"} duration={0.5}>
          <h2 className="text-md">
            Aqui, você encontrará tudo o que precisa saber para{" "}
            <span className="text-blue-700 font-semibold">
              proteger sua saúde e a de sua família.{" "}
            </span>
            Nosso objetivo é guiá-lo de forma simples e clara sobre as vacinas
            recomendadas para cada etapa da vida e condições especiais. Juntos,
            podemos cuidar do nosso bem-estar e garantir um futuro mais seguro
            para todos.{" "}
            <span className="text-blue-700 font-semibold">
              Explore e descubra como a vacinação pode fazer a diferença na sua
              vida!
            </span>
          </h2>
        </BoxReveal>
      </div>
    </div>
  );
};
