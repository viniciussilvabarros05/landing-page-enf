import Button3D from "@/components/button3d";
import { Header } from "@/components/header";
import BlurFade from "@/components/ui/blur-fade";
import BoxReveal from "@/components/ui/box-reveal";
import { Container } from "@/components/ui/container";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-14">
      <Header />
      <Container className="bg-[#BED9DE] py-2 px-4 flex flex-row items-center justify-center gap-10 xl:flex-row">
        <div className="flex flex-col gap-4 w-[50%] max-lg:w-[80%] max-xl:w-[70%]">
          <BoxReveal boxColor={"#8FC0FB"} duration={0.3}>
            <h1 className="lg:text-3xl font-semibold 2xl:text-4xl text-2xl">
              CRIE: Centro de Referência para Imunobiológicos Especiais
            </h1>
          </BoxReveal>
          <BoxReveal boxColor={"#8FC0FB"} duration={0.5}>
            <h2 className="text-md text-justify text-xl">
              Conheça o serviço especializado para proteção de pessoas com
              condições especiais de saúde disponível pelo SUS.
            </h2>
          </BoxReveal>
        </div>
        <BlurFade className="flex flex-1" delay={0.8} duration={0.8}>
          <Image
            alt="hero"
            width={500}
            height={0}
            layout="responsive"
            src="/images/hero-services-crie.png"
          />
        </BlurFade>
      </Container>
      <div className="flex flex-col gap-4 max-lg:w-[80%] w-[80%]  max-xl:w-[80%] mt-20">
        <p className="text-justify">
          O Sistema Único de Saúde (SUS) oferece um serviço de vacinação
          especializado voltado para pessoas com condições de saúde específicas:
          os{" "}
          <span className="text-blue-500 font-bold">
            {" "}
            Centros de Referência para Imunobiológicos Especiais{" "}
          </span>
          , conhecidos como{" "}
          <span className="text-blue-500 font-bold">CRIE</span>. Esses centros
          foram criados para atender quem precisa de vacinas diferenciadas e que
          muitas vezes requerem cuidados adicionais em função de quadros
          clínicos específicos, como imunodeficiências, doenças crônicas,
          transplantados, entre outros.
          <br />
          <br />
          As Unidades são preparadas para atender diferentes grupos
          populacionais com equipes treinadas e em conformidade com as normas do
          Ministério da Saúde. São oferecidas vacinas direcionadas para bebês,
          crianças, adolescentes, adultos, até idosos e gestantes. Esses
          serviços também abrangem grupos com condições especiais de saúde e
          pessoas em situações de vulnerabilidade, proporcionando imunização
          adequada e segura.
          <br />
          <br />
          O CRIE é um local especialmente preparado para proporcionar uma
          imunização segura e adaptada às necessidades de cada usuário. O
          atendimento no CRIE conta com o apoio de profissionais capacitados que
          garantem que as vacinas recomendadas sejam administradas com segurança
          e de acordo com as orientações completas sobre o esquema de vacinação
          necessária específica para cada caso.
          <br />
          <br />
          Para acessar o CRIE, é importante que o paciente tenha uma
          recomendação médica, acompanhado da solicitação do imunobiológico e a
          justificativa da indicação, por meio da{" "}
          <span className="text-blue-500 font-bold">
            “Ficha para Solicitação de Imunobiológicos Especiais - CRIE”
          </span>{" "}
          e apresentação do{" "}
          <span className="text-blue-500 font-bold"> Cartão de Vacina </span>,
          conforme as recomendações do Ministério da Saúde.
          <br />
          <br />
          Converse com o seu médico ou com os profissionais de saúde da Unidade
          Básica de Saúde (UBS) para verificar a necessidade de encaminhamento e
          conhecer o CRIE mais próximo.
        </p>

        <h2 className="text-blue-500 font-semibold mb-4">
          ACESSE OUTRAS INFORMAÇÕES:
        </h2>

        <div className="flex flex-col gap-4 w-fit">
          <div className="flex gap-4 items-center">
            <img alt="certificado" src="/images/certificado.png" width={30} />
            <Button3D className="font-bold flex">
              <a href="https://www.gov.br/saude/pt-br/vacinacao/grupos-especiais" target="_blank">
                Funcionamento e Operacionalização do CRIE
              </a>
            </Button3D>
          </div>
          <div className="flex gap-4 items-center">
            <img alt="certificado" src="/images/certificado.png" width={30} />
            <Button3D className="font-bold flex">
              <a href="https://www.gov.br/saude/pt-br/vacinacao/arquivos/relacao-nacional-dos-crie" target="_blank">
                Endereço dos CRIE no Território Nacional
              </a>
            </Button3D>
          </div>

          <div className="flex gap-4 items-center">
            <img alt="certificado" src="/images/certificado.png" width={30} />

            <Button3D className="font-bold flex">
              <a href="https://www.gov.br/saude/pt-br/vacinacao/grupos-especiais" target="_blank">
                Vacinas disponíveis para grupos especiais
              </a>
            </Button3D>
          </div>
        </div>
      </div>
    </div>
  );
}
