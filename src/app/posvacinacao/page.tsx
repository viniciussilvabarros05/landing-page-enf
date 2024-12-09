import BlurFade from "@/components/ui/blur-fade";
import { Container } from "@/components/ui/container";
import Image from "next/image";
import { ButtonBack } from "../[profile]/[slug]/[nome]/buttonBack";

export default function Page() {
  return (
    <Container className="gap-4 text-justify mt-12 pb-8 text-lg">
      <ButtonBack />
      <h1 className="text-blue-500 text-2xl font-bold mx-auto mb-8">
        Cuidados Necessários Pós-Vacinação
      </h1>
      <BlurFade inView>
        <div className="w-[250px] lg:w-[500px] lg:h-[250px] m-auto rounded-2xl mb-16">
          <Image
            alt="crianças"
            src={"/images/hero-cuidados.png"}
            className="rounded-2xl"
            width={500}
            height={250}
            layout="responsive"
          />
        </div>
      </BlurFade>
      <p>
      Após a vacinação, é essencial adotar cuidados simples para prevenir desconfortos e garantir o bem-estar geral. Estar atento às orientações recebidas no momento da vacinação contribui para uma experiência segura e tranquila. Observe abaixo algumas recomendações importantes:
      </p>
      <Image
        layout="responsive"
        width={1000}
        height={1000}
        className="max-w-[700px] m-auto"
        alt="contraindicação"
        src="/images/acuidados.png"
      />
    </Container>
  );
}
