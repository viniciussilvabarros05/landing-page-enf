import Button3D from "@/components/button3d";
import BlurFade from "@/components/ui/blur-fade";
import BoxReveal from "@/components/ui/box-reveal";
import { Container } from "@/components/ui/container";
import { profiles } from "@/utils/profiles";
import { vaccines } from "@/utils/vaccines";
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { ButtonBack } from "./buttonBack";
type Props = {
  params: { slug: string; profile: string; nome: string };
};
export default function Page({ params }: Props) {
  const { slug, profile, nome } = params;
  const profileSearch = decodeURIComponent(profile);
  const slugSearch = Number(decodeURIComponent(slug));
  const nomeSearch = decodeURIComponent(nome);
  const profileData = profiles.find(
    (profile) => profile.label == profileSearch
  );
  const categoryData = profileData?.categories.find(
    (category) => category.id == slugSearch
  );
  const vaccinesData = vaccines.filter(
    (vaccine) =>
      vaccine.categories.includes(slugSearch) && vaccine.nome == nomeSearch
  );

  return (
    <Container className="py-8 lg:px-4 items-center">
      <ButtonBack style={{ backgroundColor: profileData?.color }} />
      <BlurFade inView>
        <div className="size-32 mb-8 mx-auto rounded-full border-blue-500 border p-4 overflow-hidden">
          <img
            src={categoryData?.img}
            className="w-full h-full object-contain"
          />
        </div>
      </BlurFade>
      <BoxReveal boxColor={profileData?.color} duration={0.4}>
        <h1 className="text-black text-4xl mb-8 font-bold text-center lg:text-start capitalize">
          {nomeSearch} : {categoryData?.label}
        </h1>
      </BoxReveal>
      {vaccinesData.map((vaccine) => {
        return (
          <div className="mb-4 flex flex-col items-center lg:items-start lg:w-[70%] py-8 text-justify">
            <BoxReveal boxColor={profileData?.color} duration={0.4}>
              <h2 className="text-blue-500 uppercase font-bold mx-auto mb-8">
                {vaccine.nome}
              </h2>
            </BoxReveal>

            <BlurFade inView duration={0.4}>
              <div className="mb-4 flex flex-col gap-2 h-fit" style={{display: vaccine.finalidade.resposta !== "" ? "flex": "none"}}>
                <p className="font-bold">{vaccine.finalidade.pergunta}</p>
                <p className="">{vaccine.finalidade.resposta}</p>
              </div>
            </BlurFade>
            <BlurFade inView duration={0.4}>
              <div className="mb-4 flex flex-col gap-2 h-fit"  style={{display: vaccine.descricao.resposta !== "" ? "flex": "none"}}>
                <p className="">
                  <label htmlFor="" className="text-blue-500 font-bold">
                    {vaccine.descricao.pergunta}{" "}
                  </label>

                  {vaccine.descricao.resposta}
                </p>
              </div>
            </BlurFade>
            <BlurFade inView duration={0.4}>
              <div className="mb-4 flex flex-col gap-2" style={{display: vaccine.comoTomar.resposta !== " " ? "flex": "none"}}>
                <p className="font-bold">Esquema Vacinal</p>
                <p
                  className=""
                  dangerouslySetInnerHTML={{
                    __html: vaccine.comoTomar.resposta,
                  }}
                ></p>
              </div>
            </BlurFade>
            <BlurFade inView duration={0.4}>
              <div className="mb-4 flex flex-col gap-2" style={{display: vaccine?.quandoTomar?.resposta ? "flex": "none"}}>
                <p className="font-bold">{vaccine.quandoTomar?.pergunta}</p>
                
                <p className="">{vaccine.quandoTomar?.resposta}</p>
              </div>
            </BlurFade>
            <BlurFade inView duration={0.4}>
              <div className="mb-4 flex flex-col gap-2 h-fit" style={{display: vaccine.indicacoes?.idadeMinima?.resposta  ? "flex": "none"}}>
                <p className="font-bold">
                  {vaccine.indicacoes?.idadeMinima?.pergunta}
                </p>
                <p className="">{vaccine.indicacoes?.idadeMinima?.resposta}</p>
              </div>
            </BlurFade>
            <BlurFade inView duration={0.4}>
              <div className="mb-4 flex flex-col gap-2 h-fit" style={{display: vaccine.indicacoes?.idadeMaxima?.resposta ? "flex": "none"}}>
                <p className="font-bold">
                  {vaccine.indicacoes?.idadeMaxima?.pergunta}
                </p>
                <p className="">{vaccine.indicacoes?.idadeMaxima?.resposta}</p>
              </div>
            </BlurFade>
            <BlurFade inView duration={0.4}>
              <div className="mb-4 flex flex-col gap-2 h-fit" style={{display: vaccine.localAplicacao?.resposta ? "flex": "none"}}>
                <p className="font-bold">Como a vacina é administrada</p>
                <p className="">{vaccine.localAplicacao?.resposta}</p>
              </div>
            </BlurFade>
            <BlurFade inView duration={0.4}>
              <div className="mb-4 flex flex-col gap-2 h-fit" style={{display: vaccine.vacinacaoSimultanea?.resposta ? "flex": "none"}}>
                <p className="font-bold">
                  {vaccine.vacinacaoSimultanea?.pergunta}
                </p>
                <p className="">{vaccine.vacinacaoSimultanea?.resposta}</p>
              </div>
            </BlurFade>
            {nomeSearch === "Vacina BCG" && (
              <>
                <BlurFade inView duration={0.4}>
                  <div className="mb-4 flex flex-col gap-2 h-fit" style={{display: vaccine.reacoesAdversas?.resposta ? "flex": "none"}}>
                    <p className="font-bold">
                      {vaccine.reacoesAdversas?.pergunta}
                    </p>
                    <p className="">{vaccine.reacoesAdversas?.resposta}</p>
                  </div>
                </BlurFade>
                <BlurFade inView duration={0.4}>
                  <div className="mb-4 flex flex-col gap-2 h-fit" style={{display: vaccine?.cuidadosPosVacinacao?.resposta ? "flex": "none"}}>
                    <p className="font-bold">
                      {vaccine.cuidadosPosVacinacao?.pergunta}
                    </p>
                    {vaccine.cuidadosPosVacinacao?.resposta?.map((res) => {
                      return <li className="">{res}</li>;
                    })}
                  </div>
                </BlurFade>
                <BlurFade inView duration={0.4}>
                  <div className="mb-4 flex flex-col gap-2 h-fit" style={{display: vaccine.contraIndicacoes?.pergunta ? "flex": "none"}}>
                    <p className="font-bold">
                      {vaccine.contraIndicacoes?.pergunta}
                    </p>
                    {vaccine.contraIndicacoes?.resposta?.map((res) => {
                      if (res == "") {
                        return;
                      }
                      return <li className="">{res}</li>;
                    })}
                  </div>
                </BlurFade>
                <BlurFade inView duration={0.4}>
                  <div className="mb-4 flex flex-col gap-2 h-fit" style={{display: vaccine.condicoesEspecificas?.pergunta ? "flex": "none"}}>
                    <p className="font-bold">
                      {vaccine.condicoesEspecificas?.pergunta}
                    </p>
                    {vaccine.condicoesEspecificas?.respostas.map((res) => {
                      return (
                        <div>
                          <p className="text-bold">- {res.titulo}</p>
                          <li className="">{res.resposta}</li>
                          <li className="text-red-400">{res.alerta}</li>
                        </div>
                      );
                    })}
                  </div>
                </BlurFade>
                <BlurFade inView duration={0.4}>
                  <div className="mb-4 flex flex-col gap-2 h-fit" style={{display: vaccine?.contraIndicacoes?.alertas?.length ? "flex": "none"}}>
                    <p className="font-bold text-red-700">
                      {vaccine.contraIndicacoes?.alertas?.length
                        ? "Alertas"
                        : ""}
                    </p>
                    {vaccine.contraIndicacoes?.alertas?.map((res) => {
                      return (
                        <li className="text-red-500 font-semibold">{res}</li>
                      );
                    })}
                  </div>
                </BlurFade>{" "}
              </>
            )}
          </div>
        );
      })}
    </Container>
  );
}
