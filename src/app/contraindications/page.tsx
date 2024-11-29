import { Container } from "@/components/ui/container";
import Image from "next/image";

export default function Page() {
  return (
    <Container className="gap-4 text-justify mt-12 pb-8 text-lg">
      <h1 className="text-blue-500 text-2xl font-bold mx-auto mb-8 capitalize">
        Em que situações a vacinação não é indicada?
      </h1>
      <div className="w-[250px] lg:w-[500px] lg:h-[250px] m-auto rounded-2xl mb-16">
          <Image
            alt="crianças"
            src={"/images/hero-contraindication.png"}
            className="rounded-2xl"
            width={500}
            height={250}
            layout="responsive"
          />
        </div>
      <p>
        A vacinação é um método seguro e indispensável para a prevenção de
        doenças. No entanto, em determinadas condições de saúde ou situações
        específicas, a vacinação pode ser contraindicada ou adiada, são elas:
      </p>
      <p>
        <span className="text-blue-500 font-bold">
          Reações Alérgicas Graves:
        </span>{" "}
        Pessoas que apresentaram confirmação de alergia grave a algum componente
        específico da vacina ou recebimento da última dose de qualquer vacina do
        Calendário Nacional.
      </p>
      <Image
        layout="responsive"
        width={600}
        height={600}
        className="max-w-[400px]"
        alt="contraindicação"
        src="/images/contraindication1.png"
      />
      <p>
        <span className="text-blue-500 font-bold">
          Vacinas com Vírus Vivo Atenuado:
        </span>{" "}
        Vacinas vivas atenuadas são vacinas produzidas com uma versão
        enfraquecida do vírus ou bactéria que causa a doença. Esses
        microrganismos foram modificados para não serem capazes de causar
        doenças em pessoas saudáveis, mas ainda estimulam o sistema imunológico
        para se proteger. Contudo, em pessoas com condições de saúde
        específicas, as vacinas com vírus vivo têm menor capacidade de reação de
        forma eficaz, podendo ser contraindicadas ou adiadas conforme a
        situação, são eles:
      </p>
      <p className="font-bold mt-4">Exemplo:</p>
      <ul style={{ listStyleType: "inherit" }} className="max-lg:px-8 px-4">
        <li>Gestantes;</li>
        <li>
          Pessoas com imunodeficiência grave causada por quimioterapia;
          HIV/Aids; Transplantes de órgãos; Uso de medicamentos
          imunossupressores (Ex.: Corticóides);
        </li>
        <li>
          Pessoas com doenças autoimunes graves (Ex.: Lúpus, artrite
          reumatóide).
        </li>
      </ul>
      <div className="w-full flex items-center justify-center gap-8 max-lg:flex-col ">
        <Image
          layout="responsive"
          width={600}
          height={600}
          className="max-w-[400px]"
          alt="contraindicação"
          src="/images/contraindication2.png"
        />
        <Image
          layout="responsive"
          width={600}
          height={600}
          className="max-w-[400px]"
          alt="contraindicação"
          src="/images/contraindication3.png"
        />
      </div>
      <p>
        Antes de se vacinar, é essencial passar por avaliação profissional para
        analisar o histórico de saúde. Esse processo ajuda a identificar
        condições que possam contraindicar ou exigir restrições na administração
        de determinadas vacinas, como visto anteriormente. Com essa análise, o
        profissional pode recomendar as vacinas mais adequadas, garantindo
        segurança e eficácia na proteção contra doenças.
        <br />
        <br />
        No quadro abaixo, são apresentadas outras duas vacinas segundo suas
        especificidades para situações de contraindicação ou adiamento:
      </p>
      <Image
        layout="responsive"
        width={1920}
        height={1920}
        className="max-w-[80%] m-auto mt-4"
        alt="contraindicação"
        src="/images/contraindicationtable.png"
      />
    </Container>
  );
}
