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
    description: `A vacinação durante a gestação e puerpério é essencial para proteger a saúde da mãe e do bebê. Todas as vacinas correspondentes devem ser registradas na Caderneta da Gestante e acompanhadas por profissional de saúde durante o pré-natal, disponível gratuitamente pelo SUS. <br/><br/> Esse documento traz informações valiosas sobre vacinas, cuidados na gravidez, exames essenciais, recomendações para o parto e direitos da gestante, além de orientações para a parceria, fortalecendo o apoio emocional e promovendo um ambiente familiar acolhedor.`,
    categories: categoriesPregnant,
  },
  {
    id: 2,
    label: "criança",
    img: "/images/logo-criancas.png",
    hero: "/images/hero-crianca2.jpeg",
    color: "#f5bf36",
    title:
      "Vacinar as crianças é essencial para que elas cresçam protegidas!",
    description:
      "Nos primeiros anos de vida, o sistema imunológico das crianças ainda está em desenvolvimento, e as vacinas desempenham um papel essencial para fortalecer essas defesas. Ao vacinar seus filhos, os pais contribuem para a saúde pública, prevenindo a propagação de doenças.<br/> <br/> É essencial que as famílias acompanhem a Caderneta da Criança que é um instrumento utilizado para monitorar as ações de saúde da criança, incluindo as vacinas. Ao manter o esquema vacinal em dia, os pais garantem que seus filhos recebam todas as vacinas necessárias, protegendo-os de doenças que são preveníveis pela vacinação.",
    categories: categoriesKids,
  },
  {
    id: 3,
    label: "adulto-Idoso",
    img: "/images/logo-adulto.png",
    hero: "/images/hero-adultos.jpg",
    title: "Cuidado em Todas as Idades!",
    color: "#0284c7",
    description: "A vacinação é importante em todas as etapas da vida, especialmente na idade adulta. Com o envelhecimento, o sistema imunológico enfraquece, aumentando o risco de complicações por doenças. Por isso, algumas vacinas são reforçadas ou recomendadas em situações específicas, tornando essencial manter o Calendário Vacinal atualizado para o fortalecimento da saúde e, consequentemente reduzir hospitalizações, garantindo mais segurança e qualidade de vida.",
    categories: categoriesAdults,
  },
  {
    id: 4,
    label: "indígena",
    img: "/images/indigena.png",
    hero: "/images/indigena.png",
    title: "Vacinação é Inclusão",
    color: "#a16207",
    description: "Os povos indígenas enfrentam desafios únicos que os tornam vulneráveis a doenças infecciosas, incluindo acesso limitado a serviços de saúde, condições de vida precárias e maior suscetibilidade a surtos de doenças. Garantir a vacinação adequada a este grupo é uma forma de promover equidade em saúde e proteger essas comunidades.</br> Os indígenas possuem apenas uma vacina diferente no esquema vacinal porque o Programa Nacional de Imunizações (PNI) prioriza estratégias específicas para proteger grupos mais vulneráveis. Nesse contexto, além da inclusão da vacina pneumocócica 23-valente como medida específica para proteger contra infecções graves, os indígenas têm acesso a todas as demais vacinas previstas no</br> <a href='/#profiles' style='color:#3B82F6; font-weight:bold'>Calendário Nacional de Vacinação.</a>",
    categories: categoriesIndigena,
  },
  {
    id: 5,
    label: "viajante",
    img: "/images/viajante.png",
    hero: "/images/hero-viajantes.png",
    title: "Viajando com segurança!",
    color: "#f59e0b",
    description: "Viajar é uma experiência enriquecedora, mas também pode expor os viajantes a doenças infecciosas que não são comuns em sua região de origem. As vacinas para viajantes são fundamentais para proteger a saúde durante deslocamentos nacionais e internacionais. Eles ajudam a prevenir doenças que podem ser comuns em determinados destinos, além de reduzir o risco de surtos e cooperar para a saúde pública. Antes de viajar, é importante verificar o Calendário de Vacinação, incluindo vacinas recomendadas e oportunas, de acordo com o país ou região a ser visitada, pelo menos 15 dias antes da data da viagem.",
    categories: categoriesViajantes,
  },
  {
    id: 6,
    label: "adolescente",
    img: "/images/adolescentes1.png",
    hero: "/images/hero-adolescentes.jpg",
    color: "#84cc16",
    title: "Vacine-se e faça parte de uma juventude saudável!",
    description: "Os adolescentes frequentam ambientes como escolas, atividades esportivas e diferentes tipos de eventos sociais, onde são mais suscetíveis a vírus e bactérias. Vacinas contra HPV, meningite e outras infecções ajudam a prevenir doenças graves com possíveis consequências a longo prazo.<br/><br/> Além disso, a vacinação nessa fase promove a conscientização sobre cuidados preventivos, incentivando comportamentos em saúde ​​que devem ser mantidos ao longo da vida.",
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
