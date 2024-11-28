export const EmergencyVaccines = [
  {
    nome: "Vacina Febre Amarela",
    categories: [1002],
    finalidade: {
      pergunta: "Para que serve a vacina Febre Amarela?",
      resposta: "Para prevenir contra a Febre Amarela.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A Febre Amarela é uma doença causada por vírus transmitida principalmente pela picada de mosquitos infectados. Pode causar febre, dores no corpo, dor de cabeça, náusea e vômito. Durante surtos, o esquema vacinal é intensificado para proteger rapidamente a população em áreas de risco, seguindo orientações do Ministério da Saúde e da OMS.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Febre Amarela?",
      resposta: [
        "Esquema em situação de emergência: dose única, suficiente para imunidade ao longo da vida.",
        "Durante campanhas emergenciais, doses fracionadas podem ser administradas, oferecendo proteção por um período mínimo de 8 anos.",
      ],
    },
    indicacoes: {
      pergunta: "Quem deve tomar a vacina Febre Amarela?",
      resposta:
        "Pessoas a partir dos 9 meses de idade até 59 anos que vivam em áreas de risco ou que viajem para essas regiões.",
    },
    atencaoEspecial: {
      pergunta: "Existem cuidados para grupos de risco?",
      resposta: [
        "Pessoas com mais de 60 anos, gestantes, imunocomprometidos e indivíduos com histórico de reações alérgicas graves devem ser avaliados cuidadosamente antes da vacinação.",
        "Em casos de alto risco de exposição, as autoridades de saúde podem vacinar esses grupos após análise de risco-benefício.",
      ],
    },
    campanhas: {
      pergunta: "Como funcionam as campanhas de vacinação emergenciais?",
      resposta: [
        "Campanhas são direcionadas a áreas específicas durante surtos para ampliar a cobertura populacional rapidamente.",
        "Doses fracionadas podem ser utilizadas para maximizar o alcance da imunização.",
      ],
    },
  },
  {
    nome: "Vacina contra a Raiva Humana",
    categories: [1001],
    finalidade: {
      pergunta: "Para que serve a vacina contra a Raiva Humana?",
      resposta: "Para prevenir a infecção pelo vírus da raiva.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A raiva é uma doença grave que afeta o cérebro e o sistema nervoso central, sendo quase sempre fatal após o início dos sintomas. A vacinação é recomendada para pessoas expostas ao risco, como veterinários, cuidadores de animais, viajantes para áreas endêmicas, ou quem foi mordido ou arranhado por animais possivelmente infectados.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina contra a Raiva Humana?",
      resposta: [
        "Esquema pré-exposição: Indicado para pessoas em risco contínuo, com 4 doses administradas nos dias 0, 7, 21 e 28.",
        "Esquema pós-exposição: Indicado para quem teve contato suspeito com o vírus da raiva.",
        "5 doses para não vacinados: Dias 0, 3, 7, 14 e 28.",
        "2 doses para previamente vacinados: Dias 0 e 3.",
      ],
    },
    indicacoes: {
      pergunta: "Quem deve tomar a vacina contra a Raiva Humana?",
      resposta:
        "Pessoas expostas ao risco contínuo (veterinários, profissionais que manipulam animais, viajantes para áreas endêmicas) ou em casos de acidentes (mordidas, arranhões ou lambeduras de animais infectados ou suspeitos).",
    },
    atencaoEspecial: {
      pergunta: "Existem cuidados adicionais?",
      resposta: [
        "Nos casos de acidente, lavar a área afetada com água e sabão imediatamente.",
        "Observar o animal por 10 dias após o acidente. Caso ele morra, desapareça ou demonstre comportamento suspeito, é necessário prosseguir com o esquema de vacinação e imunoglobulina antirrábica, se indicado.",
      ],
    },
    campanhas: {
      pergunta: "Como funcionam as orientações em situações emergenciais?",
      resposta: [
        "A imunoglobulina antirrábica pode ser administrada junto com a primeira dose da vacina em acidentes graves.",
        "É fundamental procurar uma Unidade de Saúde rapidamente para avaliação e início do esquema vacinal.",
      ],
    },
  },
  {
    nome: "Vacina Meningocócica ACWY",
    categories: [1003],
    finalidade: {
      pergunta: "Para que serve a vacina Meningocócica ACWY?",
      resposta:
        "A vacina meningocócica ACWY serve para prevenir a meningite causada pela bactéria dos sorogrupos A, C, W e Y.",
    },
    descricao: {
      pergunta: "Saiba mais sobre a Vacinação de Bloqueio:",
      resposta:
        "A vacinação de bloqueio é recomendada em casos de surto de meningite causado por um tipo específico de meningococo, confirmado por testes laboratoriais. Sua aplicação depende de uma decisão das autoridades de saúde, baseada em análises epidemiológicas e características da população afetada. Nesses casos, o esquema vacinal pode ser ajustado para garantir uma proteção mais rápida e eficaz.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Meningocócica ACWY?",
      resposta: [
        "Para meningococo C:",
        "Crianças entre 3 e 12 meses: 2 doses com intervalo de 2 meses e um reforço após 12 meses.",
        "Crianças acima de 1 ano até 29 anos que não foram vacinadas: Dose única.",
        "Para meningococo ACWY:",
        "Crianças e adolescentes de 11 a 19 anos: Dose única, dependendo da situação epidemiológica.",
      ],
    },
    indicacoes: {
      pergunta: "Quem deve tomar a vacina Meningocócica ACWY?",
      resposta:
        "Pessoas residentes ou frequentadoras de áreas afetadas por surtos, com foco em crianças, adolescentes e jovens adultos de acordo com os esquemas vacinais definidos para meningococo C ou ACWY.",
    },
    atencaoEspecial: {
      pergunta: "Existem cuidados adicionais?",
      resposta: [
        "A aplicação da vacina deve seguir recomendações das autoridades de saúde locais.",
        "Em situações de emergência, o público-alvo pode ser ampliado para conter a disseminação da doença.",
      ],
    },
    campanhas: {
      pergunta: "Como funcionam as campanhas de vacinação emergencial?",
      resposta: [
        "Durante surtos, a vacinação pode ser organizada para atingir rapidamente as faixas etárias em maior risco.",
        "O esquema vacinal pode ser ajustado para incluir doses únicas ou reforços específicos, conforme necessário.",
      ],
    },
  },
  {
    nome: "Vacina Dupla Bacteriana (dT)",
    categories: [1000],
    finalidade: {
      pergunta: "Para que serve a vacina Dupla Bacteriana?",
      resposta:
        "A vacina Dupla Bacteriana serve para prevenir as doenças graves causadas por bactérias: a difteria e o tétano.",
    },
    descricao: {
      pergunta: "Saiba mais sobre a vacina Dupla Bacteriana:",
      resposta:
        "A difteria é caracterizada por placas branco-acinzentadas nas amígdalas ou garganta, podendo causar dificuldades para respirar. Já o tétano provoca rigidez e dores musculares intensas, causando câimbras severas. Ambas são doenças graves e potencialmente fatais.",
    },
    comoTomar: {
      pergunta:
        "ESQUEMA VACINAL - SITUAÇÃO DE EMERGÊNCIA PARA DIFTERIA E TÉTANO:",
      resposta: [
        `<strong>Público-alvo</strong>: Em áreas com surtos, a prioridade é vacinar crianças, adolescentes e adultos jovens, que são mais suscetíveis. O intervalo entre as doses pode ser reduzido, conforme avaliação de risco-benefício pelas autoridades de saúde.`,
        `<p style="color:#3b82f6; font-weight: bold; ">Pessoas sem histórico de vacinação ou esquema incompleto:</p>`,
        `<strong>Dose inicial:</strong> Uma primeira dose é administrada imediatamente;`,
        `<strong>Doses de Reforço:</strong> Duas doses subsequentes, intervalo de 30 a 60 dias entre cada uma. Após completar o esquema inicial, recomenda-se um reforço a cada 10 anos.`,
        `<p style="color:#3b82f6; font-weight: bold; ">Gestantes:</p>`,
        `Em caso de risco de exposição ao tétano e/ou difteria, as gestantes podem receber a vacina DT (Dupla Bacteriana) ou a dTpa (Tríplice Bacteriana) - que também protege contra a coqueluche - para proteção adicional.`,
        `<p style="color:#3b82f6; font-weight: bold; ">Exposição à arma de fogo, arma branca e acidentes com prego e/ou lata enferrujada:</p>`,
        `Realiza-se a avaliação e intervenção inicial do ferimento em serviço de saúde, e logo em seguida, atualiza-se o esquema vacinal com as doses subsequentes ou dose de reforço.`,
        `<p style="color:#3b82f6; font-weight: bold; ">Avaliação do Ferimento:</p>`,
        `<strong>Baixo risco</strong>: Feridas limpas, superficiais, recentes, sem contaminação.`,
        `<strong>Alto risco</strong>: Feridas sujas, profundas, contaminadas, ou com necrose.`,
      ],
    },
    indicacoes: {
      pergunta: "",
      resposta: "",
    },
    atencaoEspecial: {
      pergunta: "",
      resposta: ["", ""],
    },
    campanhas: {
      pergunta: "",
      resposta: "",
    },
  },
];
