import Button3D from "@/components/button3d";
import BlurFade from "@/components/ui/blur-fade";
import BoxReveal from "@/components/ui/box-reveal";
import { Container } from "@/components/ui/container";
import { profiles } from "@/utils/profiles";
import { vaccines } from "@/utils/vaccines";
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
type Props = {
  params: { slug: string; profile: string };
};
export default function Page({ params }: Props) {
  const { slug, profile } = params;
  const profileSearch = decodeURIComponent(profile);
  const slugSearch = Number(decodeURIComponent(slug));
  const profileData = profiles.find(
    (profile) => profile.label == profileSearch
  );
  const categoryData = profileData?.categories.find(
    (category) => category.id == slugSearch
  );
  const vaccinesData = vaccines.filter((vaccine) =>
    vaccine.categories.includes(slugSearch)
  );


  return (
    <Container className="py-8 px-16 gap-8 items-center">
      <Button3D className="fixed left-12 top-8 rounded-full px-2">
        <Link href="/#profiles">
          <CircleArrowLeft className="size-12 text-white" />
        </Link>
      </Button3D>
      <BlurFade inView>
        <div className="size-32 mx-auto rounded-full border-blue-500 border p-4 overflow-hidden">
          <img
            src={categoryData?.img}
            className="w-full h-full object-contain"
          />
        </div>
      </BlurFade>
      <BoxReveal boxColor="#3b82f6" duration={0.2}>
        <h1 className="text-black text-4xl font-bold">
          {profileData?.label} : {categoryData?.label}
        </h1>
      </BoxReveal>
      {vaccinesData.map((vaccine) => {
        return (
          <div className="flex flex-col items-start gap-4 w-[50%] py-8">
            <BoxReveal boxColor="#3b82f6" duration={0.2}>
              <h2 className="text-blue-500 uppercase font-bold mx-auto">
                {vaccine.nome}
              </h2>
            </BoxReveal>

            <BlurFade inView duration={0.2}>
              <div className="flex flex-col gap-2">
                <p className="font-bold">{vaccine.finalidade.pergunta}</p>
                <p className="">{vaccine.finalidade.resposta}</p>
              </div>
            </BlurFade>
            <BlurFade inView duration={0.2}>
              <div className="flex flex-col gap-2">
                <p className="">
                  <label htmlFor="" className="text-blue-500 font-bold">
                    {vaccine.descricao.pergunta}{" "}
                  </label>

                  {vaccine.descricao.resposta}
                </p>
              </div>
            </BlurFade>
            <BlurFade inView duration={0.2}>
              <div className="flex flex-col gap-2">
                <p className="font-bold">{vaccine.comoTomar.pergunta}</p>
                <p className="">{vaccine.comoTomar.resposta}</p>
              </div>
            </BlurFade>
            <BlurFade inView duration={0.2}>
              <div className="flex flex-col gap-2">
                <p className="font-bold">{vaccine.quandoTomar?.pergunta}</p>
                <p className="">{vaccine.quandoTomar?.resposta}</p>
              </div>
            </BlurFade>
            <BlurFade inView duration={0.2}>
              <div className="flex flex-col gap-2">
                <p className="font-bold">
                  {vaccine.indicacoes?.idadeMinima?.pergunta}
                </p>
                <p className="">{vaccine.indicacoes?.idadeMinima?.resposta}</p>
              </div>
            </BlurFade>
            <BlurFade inView duration={0.2}>
              <div className="flex flex-col gap-2">
                <p className="font-bold">
                  {vaccine.indicacoes?.idadeMaxima?.pergunta}
                </p>
                <p className="">{vaccine.indicacoes?.idadeMaxima?.resposta}</p>
              </div>
            </BlurFade>
            <BlurFade inView duration={0.2}>
              <div className="flex flex-col gap-2">
                <p className="font-bold">{vaccine.localAplicacao?.pergunta}</p>
                <p className="">{vaccine.localAplicacao?.resposta}</p>
              </div>
            </BlurFade>
            <BlurFade inView duration={0.2}>
              <div className="flex flex-col gap-2">
                <p className="font-bold">
                  {vaccine.vacinacaoSimultanea?.pergunta}
                </p>
                <p className="">{vaccine.vacinacaoSimultanea?.resposta}</p>
              </div>
            </BlurFade>
            <BlurFade inView duration={0.2}>
              <div className="flex flex-col gap-2">
                <p className="font-bold">{vaccine.reacoesAdversas?.pergunta}</p>
                <p className="">{vaccine.reacoesAdversas?.resposta}</p>
              </div>
            </BlurFade>
            <BlurFade inView duration={0.2}>
              <div className="flex flex-col gap-2">
                <p className="font-bold">
                  {vaccine.cuidadosPosVacinacao?.pergunta}
                </p>
                {vaccine.cuidadosPosVacinacao?.resposta?.map((res) => {
                  return <li className="">{res}</li>;
                })}
              </div>
            </BlurFade>
            <BlurFade inView duration={0.2}>
              <div className="flex flex-col gap-2">
                <p className="font-bold">
                  {vaccine.contraIndicacoes?.pergunta}
                </p>
                {vaccine.contraIndicacoes?.resposta.map(res=>{
                  return <li className="">{res}</li>
                })}
                
                {vaccine.contraIndicacoes?.alertas?.map((res) => {
                  return <li className="text-red-500 font-semibold">{res}</li>;
                })}
              </div>
            </BlurFade>
          </div>
        );
      })}
    </Container>
  );
}