import { categoriesAdults } from "./categories-adults";
import { CategoriesEmergency } from "./categories-emergency";
import { categoriesKids, Category } from "./categories-kids";
import { categoriesPregnant } from "./categories-pregnant";
import { categoriesTeen } from "./categories-teen";

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
    img: "",
    hero: "",
    title: "",
    color: "",
    description: "",
    categories: categoriesKids,
  },
  {
    id: 5,
    label: "viajante",
    img: "",
    hero: "",
    title: "",
    color: "",
    description: "",
    categories: categoriesKids,
  },
  {
    id: 6,
    label: "adolescente",
    img: "/images/adolescentes1.png",
    hero: "/images/hero-adolescentes.jpg",
    color: "#84cc16",
    title: "",
    description: "",
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
