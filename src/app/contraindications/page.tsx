import { Container } from "@/components/ui/container";

export default function Page() {
  return (
    <Container className="gap-4 text-justify mt-12 pb-8 text-lg">
      <h1 className="text-blue-500 text-2xl font-bold mx-auto mb-8">Em que situações a vacinação não é indicada?</h1>
      <p>
        1. Pessoas que apresentaram confirmação de alergia depois de receberem a
        última dose de qualquer vacina do Calendário Nacional.
      </p>
      <p className="text-red-500 font-bold">
        ALERTA: Se isso aconteceu, é importante informar ao profissional de
        saúde antes de tomar outra dose da vacina para que possam verificar se é
        seguro ou se precisam fazer algo diferente para proteger você.
      </p>

      <p>
        2. Gestantes, pessoas com imunidade baixa devido alguma complicação de
        saúde ou pessoas em tratamento para qualquer tipo de câncer, não devem
        receber as seguintes vacinas:
      </p>
      <ul style={{listStyleType:'inherit'}} className="max-lg:px-8">
        <li>Poliomielite VOP</li>
        <li>Rotavírus humano</li>
        <li>Febre Amarela</li>
        <li>Tríplice Viral</li>
        <li>Tetraviral</li>
        <li>Varicela</li>
      </ul>
      <p className="text-red-500 font-bold">
        ATENÇÃO: Apenas gestantes com alto risco de exposição a doenças causadas
        por vírus que podem ser prevenidas por vacina, como, por exemplo, a
        febre amarela, podem receber a dose necessária.
      </p>
    </Container>
  );
}
