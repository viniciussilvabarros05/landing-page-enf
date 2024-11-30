import { categoriesAdults } from "./categories-adults";
import { CategoriesEmergency } from "./categories-emergency";
import { categoriesIndigena } from "./categories-indigena";
import { categoriesKids, Category } from "./categories-kids";
import { categoriesPregnant } from "./categories-pregnant";
import { categoriesTeen } from "./categories-teen";
import { categoriesViajantes } from "./categories-viajantes";

export type Profile = {
  label: string;
  id: number;
  img: string;
  hero: string;
  title: string;
  color: string;
  description: string;
  categories: Category[];
};
export const profiles = [
  {
    id: 1,
    label: "gestantes e puérpera",
    img: "/images/logo-gestante.png",
    hero: "/images/hero-gestante.jpeg",
    title: "Proteção em dose dupla!",
    color: "#c084fc",
    description: `A vacinação durante a gestação e no período pós-parto é essencial para proteger a saúde da mãe e do bebê. Durante a gestação, ao se vacinar, a mãe garante uma gravidez mais segura, reduzindo riscos tanto para ela quanto para o desenvolvimento saudável do bebê, já que algumas vacinas transmitem anticorpos ao feto, oferecendo uma camada inicial de proteção nos primeiros meses de vida. Após o parto, a vacinação das puérperas continua importante para fortalecer a imunidade materna, protegendo tanto a mãe quanto o bebê contra infecções, já que o contato próximo entre eles é constante.<br/> Todas as vacinas necessárias durante a gestação e o período pós-parto devem ser registradas por um profissional de saúde e acompanhadas no pré-natal, por meio da Caderneta da Gestante, disponibilizada gratuitamente pelo SUS. Esse documento traz informações valiosas sobre vacinas, cuidados na gravidez, exames essenciais, recomendações para o parto e direitos das gestantes, além de orientações para os parceiros, fortalecendo o apoio emocional e promovendo um ambiente familiar mais estável.`,
    categories: categoriesPregnant,
  },
  {
    id: 2,
    label: "criança",
    img: "/images/logo-criancas.png",
    hero: "/images/hero-crianca2.jpeg",
    color: "#f5bf36",
    title:
      "Vacinar as crianças é muito importante para que elas cresçam saudáveis e protegidas!",
    description:
      "Nos primeiros anos de vida, o corpo das crianças ainda está aprendendo a se defender sozinho, então as vacinas ajudam a fortalecer essas defesas. Quando os pais vacinam seus filhos, eles não estão apenas cuidando da saúde das crianças, mas também ajudando a proteger outras pessoas ao redor, evitando que doenças se espalhem.<br/>É essencial que as famílias acompanhem o calendário de vacinas que são preenchidas na Caderneta da Criança. Essa caderneta serve como um registro que ajuda a lembrar quais vacinas já foram tomadas e quais ainda faltam. Ao manter essa caderneta em dia, os pais garantem que seus filhos recebam todas as vacinas necessárias, criando um ambiente mais seguro para o crescimento e o desenvolvimento infantil.",
    categories: categoriesKids,
  },
  {
    id: 3,
    label: "adulto-Idoso",
    img: "/images/logo-adulto.png",
    hero: "/images/hero-adultos.jpg",
    title: "",
    color: "#0284c7",
    description: "",
    categories: categoriesAdults,
  },
  {
    id: 4,
    label: "indígena",
    img: "/images/indigena.png",
    hero: "/images/indigena.png",
    title: "Vacinação é Inclusão",
    color: "",
    description: "Os povos indígenas enfrentam desafios únicos que os tornam vulneráveis a doenças infecciosas, incluindo acesso limitado a serviços de saúde, condições de vida precárias e maior suscetibilidade a surtos de doenças. Garantir a vacinação adequada a este grupo é uma forma de promover equidade em saúde e proteger essas comunidades.</br> Os indígenas possuem apenas uma vacina diferente no esquema vacinal porque o Programa Nacional de Imunizações (PNI) prioriza estratégias específicas para proteger grupos mais vulneráveis. Nesse contexto, além da inclusão da vacina pneumocócica 23-valente como medida específica para proteger contra infecções graves, os indígenas têm acesso a todas as demais vacinas previstas no</br> <a href='/#profiles' style='color:#3B82F6; font-weight:bold'>Calendário Nacional de Vacinação.</a>",
    categories: categoriesIndigena,
  },
  {
    id: 5,
    label: "viajante",
    img: "/images/viajante.png",
    hero: "/images/viajante.png",
    title: "Viajando com segurança!",
    color: "",
    description: "Viajar é uma experiência enriquecedora, mas também pode expor os viajantes a doenças infecciosas que não são comuns em sua região de origem. As vacinas para viajantes são fundamentais para proteger a saúde durante deslocamentos nacionais e internacionais. Eles ajudam a prevenir doenças que podem ser comuns em determinados destinos, além de reduzir o risco de surtos e cooperar para a saúde pública. Antes de viajar, é importante verificar o Calendário de Vacinação, incluindo vacinas recomendadas e oportunas, de acordo com o país ou região a ser visitada, pelo menos 15 dias antes da data da viagem.",
    categories: categoriesViajantes,
  },
  {
    id: 6,
    label: "adolescente",
    img: "/images/adolescentes1.png",
    hero: "/images/hero-adolescentes.jpg",
    color: "#84cc16",
    title: "Cuide de você e de quem você ama: vacine-se e faça parte de uma geração mais saudável!",
    description: "A vacinação na adolescência é essencial para a proteção da saúde a curto e longo prazo. Nesta fase, o sistema imunológico ainda está em desenvolvimento e, apesar de terem mais resistência do que as crianças pequenas, os adolescentes estão expostos a uma variedade de vírus e bactérias em ambientes de convivência como escolas, práticas esportivas e atividades sociais.Vacinas como as que previnem contra o HPV, a meningite e outras infecções graves ajudam a evitar doenças graves que podem ter efeitos duradouros na saúde. Além disso, ao se vacinarem, os adolescentes não apenas protegem a si mesmos, mas também ajudam a reduzir a disseminação de doenças na comunidade, contribuindo para a imunidade coletiva. A vacinação nessa faixa etária também facilita a conscientização sobre a importância de manter uma rotina de cuidados com a saúde, reforçando hábitos preventivos que serão levados para a vida adulta.",
    categories: categoriesTeen,
  },
  {
    id: 7,
    label: "emergencia",
    img: "/images/logo-emergency.png",
    hero: "/images/hero-emergency.png",
    color: "#f87171",
    title: "",
    description: `Conhecer as vacinas recomendadas para situações de emergência é essencial para proteger a saúde pública e evitar a propagação de doenças em contextos críticos, como desastres naturais, surtos epidemiológicos e/ou crises humanitárias. Nesses cenários, o acesso rápido e eficiente às vacinas pode reduzir a propagação de infecções e proteger as populações vulneráveis.
    </br>
O Ministério da Saúde atua coordenando respostas estratégicas, garantindo o fornecimento e a distribuição das vacinas adequadas e orientando profissionais de saúde e comunidades sobre medidas preventivas. Essa ação ágil e coordenada é vital para controlar surtos e garantir a proteção coletiva`,
    categories: CategoriesEmergency,
  },
];
