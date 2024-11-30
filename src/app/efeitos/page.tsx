import Button3D from "@/components/button3d";
import BlurFade from "@/components/ui/blur-fade";
import { Container } from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <Container className="gap-4 text-justify mt-12 pb-8 text-lg">
    
      <h1 className="text-blue-500 text-2xl font-bold mx-auto mb-8">
        Eventos Esperados e Inesperados Pós-Vacinação
      </h1>
      <BlurFade inView>
        <div className="w-[250px] lg:w-[500px] lg:h-[250px] m-auto rounded-2xl mb-16">
          <Image
            alt="crianças"
            src={"/images/hero-efeitos.png"}
            className="rounded-2xl"
            width={500}
            height={250}
            layout="responsive"
          />
        </div>
      </BlurFade>
      <p>
        <strong className="text-blue-500">
          Eventos Esperados Pós-Vacinação:{" "}
        </strong>
        Os eventos esperados após a vacinação são aqueles que, comumente, podem
        ocorrer após administração de qualquer vacina disponível no Calendário
        Nacional de Vacinação, independente da faixa-etária.
        <br />
        <br />
        São exemplos de eventos esperados:
      </p>
      <p className="">
        comuns nos dois primeiros dias. Na maioria dos casos, esses sintomas
        desaparecem espontaneamente{" "}
        <strong className="text-blue-500">em 1 a 3 dias</strong>, mas é
        necessário que alguns cuidados sejam adotados durante esse período para
        garantir uma recuperação rápida e segura. Acesse a aba “Cuidados
        Necessários Pós-vacinação” e veja as orientações disponíveis.
      </p>
      <Link href="/posvacina">
        <Button3D>Cuidados Necessários Pós-vacinação</Button3D>
      </Link>
      <ul style={{ listStyleType: "inherit" }} className="px-4">
        <li>
          Dor e/ou leve inchaço no local em que a vacina foi administrada;
        </li>
        <li>Febre baixa a moderada (até 37,9°);</li>
        <li>Mal-estar;</li>
        <li>Sonolência;</li>
        <li>Dores de cabeça;</li>
        <li>
          Em crianças, irritabilidade, alterações de humor e perda do apetite
          são comuns nos dois primeiros dias.
        </li>
      </ul>

      <p className="">
        <strong className="text-blue-500">
          Eventos Não Esperados Pós-Vacinação:
        </strong>
        Eventos inesperados pós-vacinação são reações raras e imprevistas que
        podem ocorrer após administração da vacina. Embora a maioria das
        respostas sejam temporárias, esses eventos podem exigir acompanhamento
        com profissional de saúde.
        <br />
        <br />
        São exemplos de eventos inesperados:
      </p>

      <ul style={{ listStyleType: "inherit" }} className="px-4">
        <li>Febre baixa a moderada (até 37,9°);</li>
        <li>Vermelhidão no local onde a vacina foi administrada;</li>
        <li>
          Abscessos locais (coleção de pus que se forma em um tecido ou área
          específica do corpo, geralmente como resultado de uma infecção);
        </li>
        <li>Reações alérgicas;</li>
        <li>Vômito.</li>
      </ul>
      <p className="text-red-500 font-bold">
        ATENÇÃO: Fique atento a sinais de eventos adversos graves
      </p>
      <p>São exemplos de eventos graves, considerados raros:</p>

      <ul style={{ listStyleType: "inherit" }} className="px-4">
        <li>Dificuldade respiratória;</li>
        <li>Inchaço no rosto ou garganta;</li>
        <li>Tontura ou desmaios;</li>
        <li>
          Irritabilidade no local onde a vacina foi administrada causando
          assaduras na pele (erupção cutânea);
        </li>
        <li>
          Sintomas neurológicos, como confusão mental, convulsões ou dormência.
        </li>
      </ul>

      <Image
        layout="responsive"
        width={1000}
        height={1000}
        className="max-w-[600px]"
        alt="contraindicação"
        src="/images/efeitos-dialog.png"
      />
    </Container>
  );
}
