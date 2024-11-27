import Button3D from "@/components/button3d";
import { Container } from "@/components/ui/container";
import Image from "next/image";
import { ButtonBack } from "../[profile]/[slug]/[nome]/buttonBack";

export default function Page() {
  return (
    <Container className="pb-32 mt-16 text-lg">
      <ButtonBack />
      <h1 className="text-3xl font-bold text-blue-500 mb-4 mx-auto">
        Vacinas para Grupos Especiais
      </h1>
      <div className="w-fit max-w-[45rem] max-2xl:max-w-[30rem] max-2xl:max-h-[25rem] max-h-[30rem] overflow-hidden mx-auto flex items-center justify-center">
        <Image
          alt="grupos especiais"
          src="/images/hero-special-groups.png"
          width={500}
          height={500}
          style={{ objectFit: "cover" }}
          className="w-full h-full"
          layout="responsive"
        />
      </div>

      <h2 className="text-2xl font-bold text-blue-500 mb-8">
        O que são vacinas especiais?
      </h2>
      <p className="text-justify">
        São vacinas formuladas ou administradas em esquemas diferenciados para
        proteger indivíduos que, devido a condições de saúde ou outras
        características específicas, têm maior risco de desenvolver complicações
        graves se infectados por vírus ou bactérias.
      </p>
      <br />
      <p className="text-justify">
        O Calendário de Vacinação para esses grupos é cuidadosamente ajustado
        conforme as necessidades de proteção e as recomendações de segurança
        para cada condição, de modo a promover uma imunização segura e
        eficiente.
      </p>
      <div className="flex justify-center items-center gap-4 w-full max-lg:flex-col">
        <Image
          alt="grupos especiais"
          src="/images/crie.png"
          width={500}
          height={500}
        />
        <Image
          alt="grupos especiais"
          src="/images/crie2.png"
          width={500}
          height={500}
        />
      </div>

      <h2 className="text-2xl font-bold text-blue-500 mb-8">
        Quais condições de saúde são indicadas para encaminhamento ou
        atendimento nos Centros de Referência em Imunobiológicos Especiais
        (CRIE) ?
      </h2>
      <ul
        style={{ listStyleType: "inherit" }}
        className="flex flex-col gap-4 text-justify"
      >
        <li>
          <strong>Problemas no sistema imunológico:</strong> Pessoas que
          nasceram com problemas de imunidade ou que têm doenças que comprometem
          a defesa do corpo. A exemplo disso, pessoas que vivem e convivem com
          HIV/Aids;
        </li>
        <li>
          <strong>Tratamento para câncer:</strong> Pessoas que estão fazendo
          quimioterapia, radioterapia ou usando medicamentos que afetam o
          sistema de defesa do corpo;
        </li>
        <li>
          <strong>Transplantes:</strong> Pessoas que receberam transplante de
          órgãos, como rim, fígado ou medula óssea, precisam de atenção especial
          para evitar infecções;
        </li>
        <li>
          <strong>Doenças autoimunes:</strong> Pessoas que têm doenças que
          atacam o próprio corpo, como lúpus ou artrite reumatóide, entre
          outras, que estão em tratamento com medicamentos imunossupressores
          (Ex.: Corticóides);
        </li>
        <li>
          <strong>Doenças crônicas graves:</strong> Pessoas com doenças de longa
          duração, como problemas graves no coração, pulmões, rins, fígado, ou
          diabetes que não estão controlados.
        </li>
        <li>
          <strong>Gestantes com necessidades especiais:</strong> Gestantes que
          tenham algum problema de saúde específico, a exemplo: doenças crônicas
          graves, imunodeficiência, histórico de perdas gestacionais ou partos
          prematuros por infecção, entre outras;
        </li>
        <li>
          <strong>Bebês pré-termos:</strong> Bebês que nasceram antes de 37
          semanas de idade gestacional, apresentando baixo peso ou muito baixo
          peso.
        </li>
        <li>
          <strong>Alergias graves:</strong> Pessoas que têm reações alérgicas
          muito fortes a componentes das vacinas comuns e precisam de outras
          alternativas ou do acompanhamento de um especialista
        </li>
        <li>
          <strong>Contato com pessoas de risco:</strong> Para quem mora ou cuida
          de pessoas com a imunidade baixa pode ser vacinado no CRIE para sua
          proteção
        </li>
      </ul>
      <p className="font-bold ">Exemplo:</p>
      <ul style={{listStyleType:"inherit"}} className="px-4">
        <li>
          Cuidadores que assistem pessoas com HIV/Aids, câncer em tratamento
          quimioterápico, ou transplantados;
        </li>
        <li>Cuidadores de idosos ou pessoas com doenças crônicas graves;</li>
        <li>
          Cuidadores de bebês pré-termos ou crianças com condições especiais
          (Ex.: cardiopatias congênitas);
        </li>
        <li>
          Cuidadores que acompanham pessoas em áreas com surtos de doenças como
          febre amarela ou sarampo, necessitando de imunização específica.
        </li>
      </ul>
      <h2 className="text-blue-500 font-semibold mt-8 mb-4">
        ACESSE OUTRAS INFORMAÇÕES:
      </h2>
      <div className="flex flex-col gap-4 w-fit">
        <div className="flex gap-4 items-center">
          <img alt="certificado" src="/images/certificado.png" width={30} />
          <Button3D className="font-bold flex">
            <a
              href="https://www.gov.br/saude/pt-br/vacinacao/grupos-especiais"
              target="_blank"
            >
              Vacina para Grupos Especiais: Ministério da Saúde
            </a>
          </Button3D>
        </div>
        <div className="flex gap-4 items-center">
          <img alt="certificado" src="/images/certificado.png" width={30} />
          <Button3D className="font-bold flex">
            <a
              href="https://www.gov.br/saude/pt-br/vacinacao/arquivos/relacao-nacional-dos-crie"
              target="_blank"
            >
              Endereço dos CRIE no Território Nacional
            </a>
          </Button3D>
        </div>
      </div>
    </Container>
  );
}
