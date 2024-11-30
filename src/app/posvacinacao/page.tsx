import { Container } from "@/components/ui/container";
import Image from "next/image";

export default function Page() {
  return (
    <Container className="gap-4 text-justify mt-12 pb-8 text-lg">
      <h1 className="text-blue-500 text-2xl font-bold mx-auto mb-8">
        Cuidados Necessários Pós-Vacinação
      </h1>
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
