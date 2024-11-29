import { Header } from "@/components/header";
import BlurFade from "@/components/ui/blur-fade";
import BoxReveal from "@/components/ui/box-reveal";
import { Container } from "@/components/ui/container";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-14">
      <Header />
      <Container className="bg-[#BED9DE] py-2 px-4 flex flex-col items-center justify-center gap-10 xl:flex-row">
        <div className="flex flex-col gap-4 w-[100%] lg:w-[30%] xl:w-[50%]">
          <BoxReveal boxColor={"#8FC0FB"} duration={0.3}>
            <h1 className="lg:text-3xl font-semibold 2xl:text-4xl text-2xl">
            Entenda a importância dos Serviços de Saúde para a Prevenção de Doenças e Qualidade de Vida!
            </h1>
          </BoxReveal>
          <BoxReveal boxColor={"#8FC0FB"} duration={0.5}>
            <h2 className="text-md text-justify text-xl">
              Conheça o papel das Unidades Básicas de Saúde enquanto serviço de
              saúde gratuito e garanta uma vacinação acessível e segura para
              todos.
            </h2>
          </BoxReveal>
        </div>
        <BlurFade className="flex flex-1" delay={0.8} duration={0.8}>
          <Image
            alt="hero"
            width={500}
            height={0}
            layout="responsive"
            src="/images/hero-services-health.png"
          />
        </BlurFade>
      </Container>
      <div className="flex flex-col gap-4 w-[100%] lg:w-[30%] xl:w-[80%] mt-20 text-lg">
        <p className="text-justify">
          As Unidades Básicas de Saúde (UBS) desempenham um papel fundamental no
          cuidado da saúde da população. Como pontos de atendimento primário do
          Sistema Único de Saúde (SUS), elas estão estrategicamente distribuídas
          nas comunidades para garantir que todos os brasileiros tenham acesso a
          serviços de saúde essenciais, incluindo a vacinação.
          <br />
          <br />
          As UBS são preparadas para atender diferentes grupos populacionais com
          equipes treinadas e em conformidade com as normas do Ministério da
          Saúde. São oferecidas vacinas direcionadas para bebês, crianças,
          adolescentes, adultos, idosos e gestantes. Esses serviços também
          abrangem grupos com condições especiais de saúde e pessoas em
          situações de vulnerabilidade, proporcionando imunização adequada e
          segura.
          <br />
          <br />A exemplo disso, tem-se a{" "}
          <span className="font-bold text-blue-500"> vacinação móvel </span>,
          uma iniciativa promovida pelas Unidades para garantir que pessoas
          acamadas e em situação de vulnerabilidade social tenham acesso à
          imunização. Nesse contexto, as equipes de Estratégia Saúde da Família
          desempenham um papel central como intermediadoras do cuidado,
          coordenando ações e garantindo a efetividade das intervenções.
          Complementando esse trabalho, os Agentes Comunitários de Saúde (ACS)
          atuam diretamente na comunidade, mediante o conhecimento sobre as
          necessidades locais para identificar indivíduos que demandam atenção
          especial.
          <br />
          <br />
          Por meio da Vacinação Móvel, os profissionais da Estratégia Saúde da
          Família levam as vacinas até a casa das pessoas que enfrentam
          dificuldades de deslocamento, proporcionando uma experiência de
          vacinação inclusiva ao orientar os usuários conforme as suas
          necessidades e garantir que todos os acompanhamentos necessários sejam
          feitos.
          <br />
          <br />
          Vacinar-se nas Unidades Básicas de Saúde contribui para a saúde
          individual e coletiva, ajudando a reduzir a circulação de doenças
          infecciosas. A vacinação é um direito e um dever de todos, e as UBS
          estão disponíveis para facilitar esse cuidado, acessível e gratuito,
          para você e sua família.
        </p>
      </div>
    </div>
  );
}
