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
    img: "",
    hero: "",
    title: "",
    color: "#c084fc",
    description: "",
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
      "Nos primeiros anos de vida, o corpo das crianças ainda está aprendendo a se defender sozinho, então as vacinas ajudam a fortalecer essas defesas. Quando os pais vacinam seus filhos, eles não estão apenas cuidando da saúde das crianças, mas também ajudando a proteger outras pessoas ao redor, evitando que doenças se espalhem. É essencial que as famílias acompanhem o calendário de vacinas que são preenchidas na caderneta de saúde da criança. Essa caderneta serve como um registro que ajuda a lembrar quais vacinas já foram tomadas e quais ainda faltam. Ao manter essa caderneta em dia, os pais garantem que seus filhos recebam todas as vacinas necessárias, criando um ambiente mais seguro para o crescimento e o desenvolvimento infantil.",
    categories: categoriesKids,
  },
  {
    id: 3,
    label: "Adulto-Idoso",
    img: "/images/adulto-idoso.avif",
    hero: "/images/adulto-idoso.avif",
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
