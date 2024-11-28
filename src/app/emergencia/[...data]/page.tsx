
import { ButtonBack } from "@/app/[profile]/[slug]/[nome]/buttonBack";
import Button3D from "@/components/button3d";
import BlurFade from "@/components/ui/blur-fade";
import BoxReveal from "@/components/ui/box-reveal";
import { Container } from "@/components/ui/container";
import { CategoriesEmergency } from "@/utils/categories-emergency";
import { EmergencyVaccines } from "@/utils/emergency-vaccines";
import { profiles } from "@/utils/profiles";

type Props = {
  params: { data: string[] };
};
export default function Page({ params }: Props) {
  const [id, vaccine] = params.data;
  const vaccineName = decodeURIComponent(vaccine);
  const categoryData = CategoriesEmergency.find(
    (category) => category.id == Number(id)
  );
  const profileSearch = profiles.find((profile) => profile.id == 7);
  const vaccinesData = EmergencyVaccines.filter(
    (vaccine) => vaccine.nome == vaccineName
  );

  return (
    <Container className="py-8 lg:px-4 gap-8 items-center">
      <ButtonBack style={{ backgroundColor: profileSearch?.color }} />
      <BlurFade inView>
        <div className="size-32 mx-auto rounded-full border-blue-500 border p-4 overflow-hidden">
          <img
            src={categoryData?.img}
            className="w-full h-full object-contain"
            alt={categoryData?.label}
          />
        </div>
      </BlurFade>
      <BoxReveal boxColor={profileSearch?.color} duration={0.4}>
        <h1 className="text-black text-4xl font-bold text-center lg:text-start">
          {vaccineName} : {categoryData?.label}
        </h1>
      </BoxReveal>
      {vaccinesData.map((vaccine) => {
        return (
          <div className="flex flex-col items-center lg:items-start gap-4 lg:w-[70%] py-8 text-justify">
            <BoxReveal boxColor={profileSearch?.color} duration={0.4}>
              <h2 className="text-blue-500 uppercase font-bold mx-auto">
                {vaccine.nome}
              </h2>
            </BoxReveal>

            <BlurFade inView duration={0.4}>
              <div className="flex flex-col gap-2">
                <p className="font-bold">{vaccine.finalidade.pergunta}</p>
                <p className="">{vaccine.finalidade.resposta}</p>
              </div>
            </BlurFade>
            <BlurFade inView duration={0.4}>
              <div className="flex flex-col gap-2">
                <p className="">
                  <label htmlFor="" className="text-blue-500 font-bold">
                    {vaccine.descricao.pergunta}{" "}
                  </label>

                  {vaccine.descricao.resposta}
                </p>
              </div>
            </BlurFade>
            <BlurFade inView duration={0.4}>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-blue-500">
                  {vaccine.comoTomar.pergunta}
                </p>
                <div className="flex flex-col gap-2">
                  {vaccine.comoTomar.resposta.map((res) => {
                    return (
                      <div
                        className=""
                        dangerouslySetInnerHTML={{ __html: res }}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </BlurFade>
            <BlurFade inView duration={0.4}>
              <div className="flex flex-col gap-2">
                <p className="font-bold">{vaccine.indicacoes?.pergunta}</p>
                <p className="">{vaccine.indicacoes?.resposta}</p>
              </div>
            </BlurFade>
            <BlurFade inView duration={0.4}>
              <div className="flex flex-col gap-2">
                <p className="font-bold">{vaccine.atencaoEspecial.pergunta}</p>
                <p className="">{vaccine.atencaoEspecial?.resposta}</p>
              </div>
            </BlurFade>
            <BlurFade inView duration={0.4}>
              <div className="flex flex-col gap-2">
                <p className="font-bold">{vaccine.campanhas.pergunta}</p>
                <p className="">{vaccine.campanhas?.resposta}</p>
              </div>
            </BlurFade>
          </div>
        );
      })}
    </Container>
  );
}
