import { categoriesAdults } from "./categories-adults";
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
    label: "Gestantes e Puérpera",
    img: "/images/icon_gravida.jpg",
    hero: "/images/hero-gestante.jpeg",
    title: "Proteção em dose dupla!",
    color: "#c084fc",
    description: `A vacinação durante a gestação e no período pós-parto é essencial para proteger a saúde da mãe e do bebê. Durante a gestação, ao se vacinar, a mãe garante uma gravidez mais segura, reduzindo riscos tanto para ela quanto para o desenvolvimento saudável do bebê, já que algumas vacinas transmitem anticorpos ao feto, oferecendo uma camada inicial de proteção nos primeiros meses de vida. Após o parto, a vacinação das puérperas continua importante para fortalecer a imunidade materna, protegendo tanto a mãe quanto o bebê contra infecções, já que o contato próximo entre eles é constante.<br/> Todas as vacinas necessárias durante a gestação e o período pós-parto devem ser registradas por um profissional de saúde e acompanhadas no pré-natal, por meio da Caderneta da Gestante, disponibilizada gratuitamente pelo SUS. Esse documento traz informações valiosas sobre vacinas, cuidados na gravidez, exames essenciais, recomendações para o parto e direitos das gestantes, além de orientações para os parceiros, fortalecendo o apoio emocional e promovendo um ambiente familiar mais estável.`,
    categories: categoriesPregnant,
  },
  {
    id: 2,
    label: "Criança",
    img: "/images/6m7m.jpeg",
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
    label: "Adulto-Idoso",
    img: "/images/adulto-idoso.avif",
    hero: "/images/hero-adultos.jpg",
    title: "",
    color: "#0284c7",
    description: "",
    categories: categoriesAdults,
  },
  {
    id: 4,
    label: "Indígena",
    img: "",
    hero: "",
    title: "",
    color: "",
    description: "",
    categories: categoriesKids,
  },
  {
    id: 5,
    label: "Viajante",
    img: "",
    hero: "",
    title: "",
    color: "",
    description: "",
    categories: categoriesKids,
  },
  {
    id: 6,
    label: "Adolescente",
    img: "/images/adolescentes.jpg",
    hero: "/images/adolescentes.jpg",
    color: "#84cc16",
    title: "",
    description: "",
    categories: categoriesTeen,
  },
];
