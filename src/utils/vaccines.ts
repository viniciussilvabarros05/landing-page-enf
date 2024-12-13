export const vaccines = [
  {
    categories: [1],
    nome: "Vacina Hepatite B",
    finalidade: {
      pergunta: "Para que serve a vacina Hepatite B?",
      resposta:
        "A vacina Hepatite B serve para prevenir doenças causadas pelo vírus da Hepatite B.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A Hepatite B é uma doença que provoca inflamação e problemas no fígado, sendo transmitida por sexo sem proteção, compartilhamento de objetos contaminados e de mãe para filho.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Hepatite B?",
      resposta: "A vacina da Hepatite B é de dose única (somente 1 dose).",
    },
    quandoTomar: {
      pergunta: "Quando a criança deve receber a vacina Hepatite B?",
      resposta:
        "Deve ser administrada logo após o nascimento, a partir das primeiras 2 e 12 horas de vida, antes da alta da Maternidade ou Hospital.",
      alerta:
        "A vacina Hepatite B só pode ser administrada nos primeiros 30 dias de vida. Outras doses serão feitas com a vacina Pentavalente aos 2, 4 e 6 meses de idade.",
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade mínima recomendada para a criança ser vacinada:",
        resposta: "0 meses, nas primeiras 12h de vida.",
      },
      idadeMaxima: {
        pergunta: "Idade máxima recomendada para a criança ser vacinada:",
        resposta:
          "A primeira dose da Hepatite B só pode ser aplicada em até 30 dias após o nascimento.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Hepatite B é aplicada?",
      resposta:
        "A vacina Hepatite B é aplicada na coxa (músculo vasto lateral da coxa) em crianças de até 1 ano, 11 meses e 29 dias. Em crianças a partir de 2 anos, é administrada no ombro do braço por meio de injeção intramuscular.",
    },
    vacinacaoSimultanea: {
      pergunta:
        "A criança pode receber a vacina Hepatite B junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. A criança pode receber outras vacinas do Calendário de Vacinação junto com a Hepatite B.",
    },
    reacoesAdversas: {
      pergunta: "O que acontece no local em que a vacina foi aplicada?",
      resposta:
        "Pode haver pequena vermelhidão no local da aplicação, e febre nas primeiras 24h após a vacinação.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós vacinação:",
      resposta: [
        "Utilizar compressas frias no local de aplicação para aliviar a vermelhidão.",
        ,
        "Se houver desconforto por vários dias ou febre acima de 37.9º, procurar ajuda com um profissional de saúde.",
      ],
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Hepatite B?",
      resposta: [
        "Qualquer pessoa que apresentar alergia a algum componente da vacina.",
        "Crianças após 30 dias de vida. Caso não haja vacinação nesse período, a continuidade do esquema vacinal é recomendada a partir dos 2 meses de idade com a vacina Pentavalente, com doses aos 2, 4 e 6 meses de idade.",
      ],
      alertas: [
        "A vacina Hepatite B só pode ser administrada nos primeiros 30 dias de vida.",
        "Caso a criança não seja vacinada nos primeiros 30 dias, o esquema vacinal deve ser continuado com a vacina Pentavalente.",
      ],
    },
  },
  {
    categories: [1],
    nome: "Vacina BCG",
    finalidade: {
      pergunta: "Para que serve a vacina BCG?",
      resposta:
        "Prevenir os casos graves de tuberculose no pulmão (tuberculose pulmonar).",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A forma mais comum da tuberculose é quando a bactéria ataca os pulmões. Os sintomas incluem tosse (às vezes com sangue), perda de peso, suor noturno e febre. A doença pode afetar os ossos, rins e cérebro, sendo transmitida por tosse, espirros ou bebidas compartilhadas. A vacina BCG previne somente a tuberculose pulmonar. ATENÇÃO: A vacina BCG previne somente a tuberculose pulmonar.",
    },
    comoTomar: {
      pergunta: "Como é preciso tomar a vacina BCG?",
      resposta: "A vacina BCG é de dose única (somente 1 dose).",
    },
    quandoTomar: {
      pergunta: "Quando a criança deve receber a vacina BCG?",
      resposta:
        "Deve ser administrada logo após o nascimento, entre 2 e 12 horas de vida, antes da alta da maternidade ou hospital.",
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade mínima recomendada para a criança ser vacinada:",
        resposta: "Nas primeiras 12h de vida.",
      },
      idadeMaxima: {
        pergunta: "Idade máxima recomendada para a criança ser vacinada:",
        resposta:
          "4 anos, 11 meses e 29 dias. Não vacinar com a BCG após essa idade.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina BCG é administrada?",
      resposta:
        "A vacina BCG é administrada na parte superior do braço direito ou esquerdo da criança, no músculo deltóide, por injeção na pele (via intradérmica).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "A criança pode receber a vacina BCG junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. A criança pode receber outras vacinas do Calendário de Vacinação junto com a BCG.",
    },
    reacoesAdversas: {
      pergunta: "O que acontece no local em que a vacina BCG foi administrada?",
      resposta:
        "Pode apresentar pequena vermelhidão, formação de uma bolha com ou sem pus, seguida de uma ferida com crosta (cascão) e, por fim, uma cicatriz redondinha. Pode surgir apenas um carocinho ao tocar o local. A cicatrização completa ocorre em até 12 semanas (3 meses).",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós-vacinação:",
      resposta: [
        "Lavar normalmente com água na hora do banho e secar com toalha limpa, sem esfregar;",
        "Não fazer compressa;",
        "Não usar pomadas ou qualquer outro remédio no local em que a vacina foi administrada.",
        "Não romper a bolha.",
      ],
      alertas: [
        "Se houver qualquer alteração incomum no local ou próximo à aplicação, procure um profissional de saúde.",
      ],
    },
    contraIndicacoes: {
      pergunta: "ATENÇÃO",
      resposta: [
        "Nas crianças nascidas com peso menor de 2 quilos a vacina BCG será adiada até a criança chegar nesse peso.",
        "Qualquer outra alteração no local ou próximo de onde a vacina foi administrada procurar ajuda com um profissional de saúde.",
        "A vacina BCG previne somente a tuberculose pulmonar.",
      ],
    },
  },

  {
    categories: [2, 4, 6],
    nome: "Vacina Poliomielite Inativada (VIP)",
    finalidade: {
      pergunta: "Para que serve a vacina Poliomielite?",
      resposta:
        "A vacina Poliomielite (VIP) serve para prevenir contra a paralisia infantil.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A paralisia infantil é uma doença causada por um vírus que afeta os músculos, dificultando ou impedindo o movimento de partes do corpo.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Poliomielite?",
      resposta: [
        "A vacina Poliomielite (VIP) possui 3 doses iniciais: a primeira aos 2 meses, a segunda aos 4 meses e a terceira aos 6 meses.",
        "A vacina também possui uma dose de reforço aos 15 meses de idade.",
      ],
      alerta:
        "O intervalo entre as 3 doses iniciais deve ser de no mínimo 30 dias e no máximo 60 dias.",
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade mínima recomendada para a criança ser vacinada:",
        resposta: "2 meses de idade.",
      },
      idadeMaxima: {
        pergunta: "Idade máxima recomendada para a criança ser vacinada:",
        resposta: "4 anos, 11 meses e 29 dias.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Poliomielite é aplicada?",
      resposta:
        "A vacina Poliomielite (VIP) é aplicada na coxa (músculo vasto lateral da coxa) em crianças de até 1 ano, 11 meses e 29 dias. A partir dos 2 anos, é aplicada no ombro por via intramuscular.",
    },
    vacinacaoSimultanea: {
      pergunta:
        "A criança pode receber a vacina Poliomielite junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. A criança pode receber outras vacinas do Calendário de Vacinação junto com a Poliomielite (VIP).",
    },
    reacoesAdversas: {
      pergunta:
        "O que acontece no local em que a vacina Poliomielite foi aplicada?",
      resposta:
        "Pode haver vermelhidão, endurecimento, calor e dor no local, além de febre nos dois primeiros dias após a vacinação.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós vacinação:",
      resposta: [
        "Utilizar compressas frias no local de aplicação para aliviar a dor, vermelhidão e inflamação.",
        ,
        "Se a criança apresentar desconforto incomum por vários dias, alergias, ou febre acima de 37.9º, procurar ajuda de um profissional de saúde.",
      ],
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Poliomielite?",
      resposta: [
        "Crianças que apresentaram alergias após uma dose anterior da vacina Poliomielite.",
      ],
    },
    alertas: [
      "O intervalo de tempo recomendado entre as 3 doses iniciais é de no mínimo 30 dias e máximo de 60 dias.",
      "Qualquer alteração no local da aplicação deve ser avaliada por um profissional de saúde.",
    ],
  },
  {
    categories: [2, 4],
    nome: "Vacina Rotavírus Humano",
    finalidade: {
      pergunta: "Para que serve a vacina Rotavírus?",
      resposta: "A vacina Rotavírus Humano previne diarreia por rotavírus.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "O Rotavírus é uma das principais causas de diarreia forte em crianças com menos de cinco anos no mundo. Embora pessoas de todas as idades possam pegar essa infecção, ela é mais comum e perigosa em crianças pequenas.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Rotavírus?",
      resposta: [
        "A vacina Rotavírus possui 2 doses iniciais: a primeira dose aos 2 meses e a segunda dose aos 4 meses.",
      ],
      alertas: [
        "Se a criança cuspir ou vomitar após a vacinação, NÃO PODERÁ tomar uma outra dose.",
        "O intervalo de tempo recomendado entre as doses iniciais é de no mínimo 30 dias e máximo de 60 dias.",
      ],
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade mínima recomendada para a criança ser vacinada:",
        resposta:
          "A primeira dose deve ser administrada até 3 meses e 15 dias de idade.",
      },
      idadeMaxima: {
        pergunta: "Idade máxima recomendada para a criança ser vacinada:",
        resposta: "A segunda dose pode ser administrada até 7 meses e 29 dias.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Rotavírus é aplicada?",
      resposta:
        "A vacina contra o Rotavírus Humano é aplicada em forma de gotinhas líquidas que a criança toma pela boca.",
    },
    vacinacaoSimultanea: {
      pergunta:
        "A criança pode receber a vacina Rotavírus Humano junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. A criança pode receber outras vacinas do Calendário de Vacinação junto com o Rotavírus.",
    },
    reacoesAdversas: {
      pergunta:
        "O que pode acontecer após a criança ser vacinada com Rotavírus?",
      resposta:
        "É esperado que a criança apresente febre, aumento de gases, diarreia ou vômitos. Esses sintomas são comuns e, em geral, passam rapidamente. A criança também pode ficar um pouco mais irritada, mas isso é temporário.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários após a vacinação:",
      resposta: [
        "Monitorar os sintomas e, caso persistam por muitos dias ou piorem, procurar um profissional de saúde.",
      ],
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Rotavírus?",
      resposta: [
        "Crianças menores de 2 meses e maiores de 3 meses e 15 dias para a primeira dose.",
        "Crianças que têm problemas no intestino ou nasceram com alguma alteração no sistema digestivo.",
      ],
      alertas: [
        "Crianças que apresentem vômito, diarreia e febre terão a vacina Rotavírus Humano adiada até que tenham melhores condições de saúde.",
        "Crianças com imunidade baixa deverão ser avaliadas e vacinadas conforme prescrição médica.",
      ],
    },
  },
  {
    categories: [2, 4, 12],
    nome: "Vacina Pneumocócica 10",
    finalidade: {
      pergunta: "Para que serve a vacina Pneumocócica 10?",
      resposta:
        "A vacina pneumocócica 10 serve para prevenir a pneumonia, meningite, sinusite, infecção no ouvido e outras doenças causadas pela bactéria pneumococo.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "Essa bactéria chamada pneumococo costuma aparecer com frequência na parte respiratória de pessoas saudáveis (ex: pulmão). Essa bactéria é passada de uma pessoa para outra por meio de gotas de saliva pelo ar, espirros ou tosse.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Pneumocócica 10?",
      resposta: [
        "A vacina Pneumocócica 10 possui 2 doses iniciais: a primeira aos 2 meses e a segunda aos 4 meses, e uma dose de reforço aos 12 meses de idade.",
      ],
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade mínima recomendada para a criança ser vacinada:",
        resposta: "2 meses de idade.",
      },
      idadeMaxima: {
        pergunta: "Idade máxima recomendada para a criança ser vacinada:",
        resposta: "4 anos, 11 meses e 29 dias.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Pneumocócica 10 é aplicada?",
      resposta:
        "A vacina Pneumocócica 10 é aplicada na coxa (músculo vasto lateral da coxa) em crianças de até 1 ano, 11 meses e 29 dias de vida. Em crianças a partir de 2 anos, a vacina é aplicada na parte superior do braço direito ou esquerdo por meio de injeção no músculo deltóide (chamada via intramuscular).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "A criança pode receber a vacina Pneumocócica 10 junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. A criança pode receber outras vacinas do Calendário de Vacinação junto com a Pneumocócica 10.",
    },
    reacoesAdversas: {
      pergunta: "O que acontece no local em que a vacina foi aplicada?",
      resposta:
        "É esperado que no local de aplicação fique vermelho e dolorido nos primeiros minutos após a aplicação da vacina, podendo durar algumas horas. Também é comum que a criança sinta-se irritada.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós-vacinação:",
      resposta: [
        "Utilizar compressas frias no local de aplicação para alívio da dor, vermelhidão e/ou inflamação. Se a criança sentir algum desconforto incomum por vários dias ou se observar o aparecimento de alergias e febre acima de 37.9º, é importante procurar ajuda com um profissional de saúde para avaliação.",
      ],
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Pneumocócica 10?",
      resposta: [
        "Crianças que apresentaram alergias após receberem dose anterior da vacina Pneumocócica.",
      ],
      alertas: [
        "Qualquer outra alteração no local ou próximo de onde a vacina foi administrada deve procurar ajuda com um profissional de saúde.",
      ],
    },
  },
  {
    categories: [2, 4, 6],
    nome: "Vacina Pentavalente",
    finalidade: {
      pergunta: "Para que serve a vacina Pentavalente?",
      resposta:
        "A vacina Pentavalente protege contra cinco doenças importantes: difteria, tétano, coqueluche, hepatite B e algumas infecções graves causadas por bactérias, como meningite e pneumonia.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A vacina é chamada de 'Pentavalente' porque protege contra cinco doenças diferentes. Ela previne a difteria, que afeta a garganta e pode dificultar a respiração; o tétano, que pode causar rigidez muscular; a coqueluche, que provoca uma tosse forte e pode ser perigosa, especialmente para bebês; a hepatite B, causadora de infecção no fígado; e a meningite, uma infecção que pode causar sérios problemas no cérebro.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Pentavalente?",
      resposta: [
        "A vacina Pentavalente possui 3 doses iniciais: a primeira dose aos 2 meses, a segunda dose aos 4 meses e a terceira dose aos 6 meses de idade.",
        "A vacina possui duas doses de reforço com a vacina Tríplice Bacteriana (DTP) aos 15 meses e aos 4 anos de idade.",
      ],
      alertas: [
        "O intervalo de tempo recomendado entre as 3 doses iniciais é de no mínimo 30 dias e máximo de 60 dias.",
      ],
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade mínima recomendada para a criança ser vacinada:",
        resposta: "2 meses de idade.",
      },
      idadeMaxima: {
        pergunta: "Idade máxima recomendada para a criança ser vacinada:",
        resposta: "4 anos, 11 meses e 29 dias.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Pentavalente é aplicada?",
      resposta:
        "A vacina Pentavalente é aplicada na lateral da coxa (músculo vasto lateral da coxa) em crianças de até 1 ano, 11 meses e 29 dias. Em crianças a partir de 2 anos, a vacina é administrada na parte superior do braço direito ou esquerdo por meio de injeção no músculo deltóide (chamada via intramuscular).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "A criança pode receber a vacina Pentavalente junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. A criança pode receber outras vacinas do Calendário de Vacinação junto com a Pentavalente.",
    },
    reacoesAdversas: {
      pergunta:
        "O que acontece no local em que a vacina Pentavalente foi aplicada?",
      resposta:
        "É esperado que o lugar onde a vacina foi aplicada fique vermelho, endurecido e dolorido. A criança também pode ter febre entre os primeiros 2 dias após a vacinação.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós-vacinação:",
      resposta: [
        "Utilizar compressas frias no local de aplicação para alívio da dor, vermelhidão e/ou inflamação. Se a criança sentir algum desconforto incomum por vários dias ou se observar o aparecimento de alergias e febre acima de 37.9º, é importante procurar ajuda com um profissional de saúde para avaliação.",
      ],
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Pentavalente?",
      resposta: [
        "Crianças a partir de 7 anos de idade.",
        "Crianças que possuem problemas cerebrais.",
        "Crianças que apresentaram convulsão entre os 3 primeiros dias depois de receberem a vacina Pentavalente.",
        "Crianças que apresentaram fraqueza muscular ou que mudaram a cor da pele entre os 2 primeiros dias depois de receberem a vacina Pentavalente.",
        "Crianças que apresentaram alergia depois de receberem a dose anterior da vacina Pentavalente.",
      ],
    },
  },
  {
    categories: [3, 5, 12],
    nome: "Vacina Meningocócica C",
    finalidade: {
      pergunta: "Para que serve a vacina Meningocócica C?",
      resposta:
        "A vacina Meningocócica C é indicada para prevenir a meningite.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A meningite é uma inflamação das meninges, que são as membranas que protegem o cérebro e a medula espinhal. Essa inflamação pode ser causada por bactérias ou vírus.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Meningocócica C?",
      resposta: [
        "A vacina Meningocócica C possui 2 doses iniciais: a primeira dose aos 3 meses e a segunda dose aos 5 meses de idade.",
        "A vacina possui uma dose de reforço aos 12 meses de idade.",
      ],
      alertas: [
        "O intervalo de tempo recomendado entre as doses iniciais é de no mínimo 30 dias e máximo de 60 dias.",
      ],
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade mínima recomendada para a criança ser vacinada:",
        resposta: "3 meses de idade.",
      },
      idadeMaxima: {
        pergunta: "Idade máxima recomendada para a criança ser vacinada:",
        resposta: "Disponível para crianças até 10 anos de idade.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Meningocócica C é aplicada?",
      resposta:
        "A vacina Meningocócica C é aplicada na coxa (músculo vasto lateral da coxa) em crianças de até 1 ano, 11 meses e 29 dias de vida. Em crianças a partir de 2 anos, a vacina é aplicada na parte superior do braço direito ou esquerdo por meio de injeção no músculo deltóide (chamada via intramuscular).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "A criança pode receber a vacina Meningocócica C junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. A criança pode receber outras vacinas do Calendário de Vacinação junto com a Meningocócica C.",
    },
    reacoesAdversas: {
      pergunta:
        "O que acontece no local em que a vacina Meningocócica foi aplicada?",
      resposta:
        "É esperado que no local de aplicação fique vermelho, endurecido, dolorido e sensível, sendo mais frequentes nas doses de reforço.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós-vacinação:",
      resposta: [
        "Utilizar compressas frias no local de aplicação para alívio da dor, vermelhidão e/ou inflamação. Se a criança sentir algum desconforto incomum por vários dias ou se observar o aparecimento de alergias e febre acima de 37.9º, é importante procurar ajuda com um profissional de saúde para avaliação.",
      ],
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Meningocócica C?",
      resposta: [
        "Crianças que apresentaram alergias após receberem dose anterior da vacina Meningocócica C.",
      ],
    },
  },
  {
    categories: [6],
    nome: "Vacina Influenza",
    finalidade: {
      pergunta: "Para que serve a vacina Influenza?",
      resposta:
        "A vacina Influenza serve para prevenir a gripe e ajuda a evitar outras doenças que afetam o nariz, a boca, a garganta e os pulmões.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A gripe é uma doença contagiosa que afeta o nariz, a garganta e os pulmões. Sintomas incluem febre, tosse, dor de garganta, nariz entupido, dores no corpo e cansaço.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Influenza?",
      resposta: [
        "Para crianças de 6 meses a 8 anos, são necessárias 2 doses por ano.",
        "Para crianças a partir de 9 anos e adultos, é necessária 1 dose por ano.",
      ],
      alertas: [
        "O intervalo de tempo recomendado é de 30 dias após receber a 1ª dose.",
      ],
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade mínima recomendada para a criança ser vacinada:",
        resposta: "6 meses de idade.",
      },
      idadeMaxima: {
        pergunta: "Idade máxima recomendada para a criança ser vacinada:",
        resposta:
          "8 anos, 11 meses e 29 dias para receber 2 doses por ano. A partir dos 9 anos de idade a criança recebe dose única.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Influenza é aplicada?",
      resposta:
        "Em crianças de até 1 ano, 11 meses e 29 dias, a vacina é aplicada na lateral da coxa (músculo vasto lateral da coxa). Em crianças a partir de 2 anos, a vacina é aplicada no ombro, por meio de uma injeção no músculo (chamada via intramuscular).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "A criança pode receber a vacina Influenza junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. A criança pode receber outras vacinas do Calendário de Vacinação junto com a Influenza.",
    },
    reacoesAdversas: {
      pergunta:
        "O que acontece no local em que a vacina Influenza foi aplicada?",
      resposta:
        "É esperado que o local da injeção fique vermelho, duro e dolorido. A criança também pode ter febre entre os primeiros 2 dias após a vacinação.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados com o local onde a vacina foi administrada:",
      resposta: [
        "Coloque compressas frias no local da injeção para aliviar a dor, vermelhidão e/ou inflamação. Se a criança sentir algum desconforto por vários dias, ou se observar o surgimento de alergias e febre acima de 37.9ºC, é importante procurar ajuda com um profissional de saúde.",
      ],
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Influenza?",
      resposta: [
        "Crianças menores de 6 meses de idade.",
        "Pessoas que apresentaram confirmação de alergia depois de receberem a última dose da vacina influenza.",
      ],
      alertas: [
        "Pessoas que possuem alergia grave por causa do ovo de galinha e seus derivados devem ser vacinadas com a Influenza no hospital, conforme acompanhamento médico.",
      ],
    },
  },
  {
    categories: [6, 7],
    nome: "Vacina Covid-19",
    finalidade: {
      pergunta: "Para que serve a vacina Covid-19?",
      resposta:
        "A vacina contra a Covid-19 ajuda a prevenir problemas respiratórios graves que podem ser causados pela doença.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "Pessoas com Covid-19 podem ter sintomas como febre, tosse, falta de ar, dor de garganta, dores musculares, cansaço, dor de cabeça, diarreia e podem também perder o olfato e o paladar.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Covid-19?",
      resposta: [
        "A vacina Covid-19 possui 2 doses iniciais com a vacina Monovalente XXB, Moderna, sendo: <br/> <strong/>1ª dose: </strong>6 meses de idade <br/> <strong/>2ª dose: </strong> 7 meses de idade ",
      ],
      alertas: [
        "O intervalo de tempo recomendado entre a primeira e a segunda dose é de 30 dias (4 semanas).",
        "Para crianças a partir de 5 anos de idade que não receberam nenhuma dose anteriormente para Covid-19, recomenda-se 1 dose (dose única) com a vacina Monovalente XXB, Moderna.",
        "As doses de reforço estão disponíveis para pessoas que fazem parte dos grupos com prioridade a partir de 5 anos de idade com uma dose anual.",
      ],
      link: "https://www.gov.br/saude/pt-br/assuntos/covid-19/esquemas-vacinais/esquema-vacinal-covid-19",
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade mínima recomendada para a criança ser vacinada:",
        resposta: "6 meses de idade.",
      },
      idadeMaxima: {
        pergunta: "Idade máxima recomendada para a criança ser vacinada:",
        resposta: "4 anos, 11 meses e 29 dias.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Covid-19 é aplicada?",
      resposta:
        "A vacina Covid-19 é aplicada na coxa (músculo vasto lateral da coxa) em crianças de 6 a 12 meses de idade. Em crianças acima de 1 ano, a mesma vacina também pode ser aplicada na parte superior do braço direito ou esquerdo por meio de injeção no músculo deltóide (chamada via intramuscular).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "A criança pode receber a vacina Covid-19 junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. A criança pode receber outras vacinas do Calendário de Vacinação junto com a vacina Covid-19.",
    },
    reacoesAdversas: {
      pergunta:
        "O que acontece no local em que a vacina Covid-19 foi aplicada?",
      resposta: "Pode apresentar vermelhidão e dor.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós vacinação:",
      resposta: [
        "Evite muitos esforços e movimentos do braço.",
        "Utilize compressas frias no local de aplicação para alívio da dor, vermelhidão e/ou inflamação.",
        "Se a criança sentir algum desconforto incomum por vários dias ou se observar o aparecimento de alergias e febre acima de 37.9º, é importante procurar ajuda com um profissional de saúde para avaliação.",
      ],
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Covid-19?",
      resposta: [
        "Pessoas com febre.",
        "Pessoas com doença aguda (problema de saúde que surge de repente por um curto período de tempo).",
        "Pessoas com doença crônica (problema de saúde que dura muito tempo, muitas vezes por toda a vida).",
        "Pessoas que apresentaram alergia após receberem dose anterior da vacina.",
      ],
    },
  },
  {
    categories: [9, 40, 50],
    nome: "Vacina Febre Amarela",
    finalidade: {
      pergunta: "Para que serve a vacina Febre Amarela?",
      resposta:
        "A vacina Febre Amarela serve para prevenir contra a Febre Amarela.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A febre amarela é causada por um vírus transmitido pela picada de mosquitos. Pode causar febre, dores no corpo, dor de cabeça, náusea e vômito.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Febre Amarela?",
      resposta: [
        "A vacina Febre Amarela possui uma dose inicial para crianças aos 9 meses de idade e uma dose de reforço aos 4 anos.",
        "A dose de reforço pode ser administrada até 4 anos, 11 meses e 29 dias.",
      ],
      alertas: [
        "O intervalo de tempo recomendado entre as doses é de no mínimo 30 dias e máximo de 60 dias.",
      ],
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade mínima recomendada para a criança ser vacinada:",
        resposta: "9 meses de idade.",
      },
      idadeMaxima: {
        pergunta: "Idade máxima recomendada para a criança ser vacinada:",
        resposta: "4 anos, 11 meses e 29 dias.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Febre Amarela é aplicada?",
      resposta:
        "A vacina Febre Amarela é aplicada no braço direito ou esquerdo da criança por meio de injeção sob a pele (chamada via subcutânea).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "A criança pode receber a vacina Febre Amarela junto com outras vacinas (vacinação simultânea)?",
      resposta: [
        "Não. Crianças de até 1 ano, 11 meses e 29 dias NÃO PODEM receber a vacina Tríplice Viral ou Tetraviral junto à vacina Febre Amarela.",
        "A partir de 2 anos, pode tomar a Tríplice Viral ou Tetraviral junto com a Febre Amarela, mas se forem em dias diferentes, deve haver um intervalo de 15 a 30 dias entre as vacinas.",
      ],
    },
    reacoesAdversas: {
      pergunta:
        "O que acontece no local em que a vacina Febre Amarela foi aplicada?",
      resposta:
        "É esperado que o lugar onde a vacina foi aplicada fique dolorido. A criança também pode ter febre e dores de cabeça. Isso é comum e geralmente ocorre entre os 2 primeiros dias depois da vacinação.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós vacinação:",
      resposta: [
        "Utilizar compressas frias no local de aplicação para alívio da dor, vermelhidão e/ou inflamação.",
        "Se a criança sentir algum desconforto incomum por vários dias ou se observar o aparecimento de alergias e febre acima de 37.9º, é importante procurar ajuda com um profissional de saúde para avaliação.",
      ],
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Febre Amarela?",
      resposta: [
        "Crianças menores de 6 meses de idade.",
        "Pessoas que receberam um novo órgão (transplante de órgãos).",
        "Pessoas com imunidade fraca por problemas sérios de saúde.",
        "Pessoas com miastenia gravis (uma doença que enfraquece os músculos), pessoas que não têm timo (órgão de defesa do nosso corpo) ou timoma (um tumor no timo).",
        "Pessoas que têm doença falciforme e estão tomando 'hidroxiureia' (medicamento que ajuda a controlar a doença).",
        "Pessoas em uso de medicamentos com corticóides.",
        "Pessoas em tratamento com os seguintes medicamentos: Infliximabe; Etarnecepte; Golimumabe; Certolizumabe; Abatacept; Belimumabe; Ustequinumabe; Canaquinumabe; Tocilizumabe; Rituximabe; Inibidores de CCR5 como Maraviroc.",
      ],
      alerta:
        "Para as pessoas que pararam de tomar uma dessas medicações é necessário avaliação médica para definir o tempo necessário para serem vacinadas.",
    },
  },
  {
    categories: [12],
    nome: "Vacina Tríplice Viral",
    finalidade: {
      pergunta: "Para que serve a vacina Tríplice Viral?",
      resposta:
        "A vacina Tríplice Viral serve para prevenir contra três doenças: sarampo, caxumba e rubéola.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "O sarampo, a caxumba e a rubéola são doenças contagiosas que podem causar problemas, especialmente em crianças. O sarampo causa febre e manchas vermelhas na pele; a caxumba pode causar febre, inchaço e dores na garganta; e a rubéola geralmente causa febre e o aparecimento de bolhas na pele.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Tríplice Viral?",
      resposta: [
        "A vacina Tríplice Viral possui 2 doses iniciais, sendo a primeira dose aos 12 meses e a segunda dose aos 15 meses com a vacina Tetraviral.",
        "ATENÇÃO: O intervalo de tempo recomendado é de 30 dias após receber a 1ª dose.",
      ],
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade mínima recomendada para a criança ser vacinada:",
        resposta: "12 meses de idade.",
      },
      idadeMaxima: {
        pergunta: "Idade máxima recomendada para a criança ser vacinada:",
        resposta:
          "15 meses de idade com a Tríplice Viral, mas pode ser recebida até 4 anos, 11 meses e 29 dias com a vacina Tetraviral.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Tríplice Viral é aplicada?",
      resposta:
        "A vacina Tríplice Viral é aplicada no braço direito ou esquerdo da criança por meio de injeção sob a pele (chamada via subcutânea).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "A criança pode receber a vacina Tríplice Viral junto com outras vacinas (vacinação simultânea)?",
      resposta: [
        "Não. Crianças de até 1 ano, 11 meses e 29 dias NÃO PODEM receber a vacina Febre Amarela ou Tetraviral junto à vacina Tríplice Viral.",
        "ATENÇÃO: A partir de 2 anos, pode tomar a Tetraviral ou Febre Amarela junto com a Tríplice Viral, mas deve haver um intervalo de 15 a 30 dias entre as vacinas se forem dadas em dias diferentes.",
      ],
    },
    reacoesAdversas: {
      pergunta:
        "O que acontece no local em que a vacina Tríplice Viral foi aplicada?",
      resposta:
        "É esperado que o lugar onde a vacina foi aplicada fique vermelho, duro, dolorido e com um pouco de ardência. Algumas crianças também podem ter febre, dores de cabeça e sentir-se irritadas.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós vacinação:",
      resposta: [
        "Utilizar compressas frias no local de aplicação para alívio da dor, vermelhidão e/ou inflamação.",
        "Se a criança sentir algum desconforto incomum por vários dias ou se observar o aparecimento de alergias e febre acima de 37.9º, é importante procurar ajuda com um profissional de saúde para avaliação.",
      ],
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Tríplice Viral?",
      resposta: [
        "Gestantes.",
        "Crianças menores de 6 meses de idade.",
        "Pessoas que apresentaram alergia depois de receberem a última dose da vacina Tríplice Viral.",
        "Pessoas com imunidade fraca por problemas sérios de saúde.",
      ],
    },
  },
  {
    categories: [15, 40],
    nome: "Vacina Tríplice Bacteriana",
    finalidade: {
      pergunta: "Para que serve a vacina Tríplice Bacteriana?",
      resposta:
        "A vacina Tríplice Bacteriana serve para proteção contra três doenças: Difteria, Tétano e Coqueluche.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "Essas três doenças podem afetar a garganta e causar problemas na respiração. Quando alguém pega Difteria, por exemplo, pode aparecer uma coisa parecida como uma 'pele' grossa na garganta, dificultando a respiração; já o Tétano causa rigidez muscular, ou seja, eles ficam 'travados' e doloridos; e a Coqueluche faz com que a criança tenha tosse forte por vários dias.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Tríplice Bacteriana?",
      resposta: [
        "A vacina Tríplice Bacteriana é administrada como dose de reforço da vacina Pentavalente que deve ser administrada aos 2, 4 e 6 meses de idade.",
        "A primeira dose de reforço é administrada aos 15 meses de idade e a segunda dose de reforço é administrada aos 4 anos de idade.",
        "ATENÇÃO: O intervalo de tempo recomendado para o primeiro reforço é de 9 meses após a terceira dose.",
      ],
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade mínima recomendada para a criança ser vacinada:",
        resposta: "15 meses de idade.",
      },
      idadeMaxima: {
        pergunta: "Idade máxima recomendada para a criança ser vacinada:",
        resposta: "6 anos, 11 meses e 29 dias.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Tríplice Bacteriana é aplicada?",
      resposta: [
        "A vacina Tríplice Bacteriana é aplicada na lateral da coxa (músculo vasto lateral da coxa) em crianças de até 1 ano, 11 meses e 29 dias.",
        "Em crianças a partir de 2 anos, a vacina Tríplice Bacteriana é administrada na parte superior do braço direito ou esquerdo por meio de injeção no músculo deltóide (chamada via intramuscular).",
      ],
    },
    vacinacaoSimultanea: {
      pergunta:
        "A criança pode receber a vacina Tríplice Bacteriana junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. A criança pode receber outras vacinas do Calendário de Vacinação junto com a Tríplice Bacteriana.",
    },
    reacoesAdversas: {
      pergunta:
        "O que acontece no local em que a vacina Tríplice Bacteriana foi aplicada?",
      resposta:
        "É esperado que o lugar onde ela foi aplicada possa ficar dolorido, sensível ao toque, um pouco inchado e vermelho. Esses sintomas podem vir acompanhados de febre ou não. Isso é comum e geralmente ocorre entre os primeiros 2 dias depois da vacinação.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós vacinação:",
      resposta: [
        "Utilizar compressas frias no local de aplicação para alívio da dor, vermelhidão e/ou inflamação.",
        "Se a criança sentir algum desconforto incomum por vários dias ou se observar o aparecimento de alergias e febre acima de 37.9º, é importante procurar ajuda com um profissional de saúde para avaliação.",
      ],
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Tríplice Bacteriana?",
      resposta: [
        "Crianças a partir de 7 anos de idade.",
        "Crianças que apresentaram confirmação de alergia depois de receberem a última dose da vacina Pentavalente.",
      ],
    },
  },
  {
    categories: [15],
    nome: "Vacina Tetraviral",
    finalidade: {
      pergunta: "Para que serve a vacina Tetraviral?",
      resposta:
        "A vacina Tetraviral protege contra quatro doenças: Sarampo, Caxumba, Rubéola e Varicela.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "Assim como a vacina Tríplice Viral, a vacina Tetraviral também protege contra o sarampo, a caxumba e a rubéola, mas também protege contra a catapora (varicela). A catapora pode causar febre, dor de cabeça, cansaço e mal-estar geral junto com o surgimento de bolhas.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Tetraviral?",
      resposta:
        "A vacina Tetraviral é de dose única (somente 1 dose) aos 15 meses de idade.",
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade mínima recomendada para a criança ser vacinada:",
        resposta: "15 meses de idade.",
      },
      idadeMaxima: {
        pergunta: "Idade máxima recomendada para a criança ser vacinada:",
        resposta: "4 anos, 11 meses e 29 dias.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Tetraviral é aplicada?",
      resposta:
        "A vacina Tetraviral é aplicada, de preferência, no braço direito ou esquerdo da criança por meio de injeção sob a pele (chamada via subcutânea).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "A criança pode receber a vacina Tetraviral junto com outras vacinas (vacinação simultânea)?",
      resposta: [
        "Não. Crianças de até 1 ano, 11 meses e 29 dias NÃO PODEM receber a vacina Febre Amarela ou Tríplice Viral junto à vacina Tetraviral.",
        "ATENÇÃO: A partir de 2 anos, pode tomar a Tetraviral junto com a Tríplice Viral ou a Febre Amarela, mas se forem em dias diferentes, deve haver um intervalo de 15 a 30 dias entre as vacinas.",
      ],
    },
    reacoesAdversas: {
      pergunta:
        "O que acontece no local em que a vacina Tetraviral foi aplicada?",
      resposta:
        "É esperado que o lugar onde a vacina foi aplicada fique dolorido e vermelho. Esses sintomas podem vir acompanhados de febre. Isso é comum e geralmente ocorre entre os primeiros 2 dias depois da vacinação.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós vacinação:",
      resposta: [
        "Utilizar compressas frias no local de aplicação para alívio da dor, vermelhidão e/ou inflamação.",
        "Se a criança sentir algum desconforto incomum por vários dias ou se observar o aparecimento de alergias e febre acima de 37.9º, é importante procurar ajuda com um profissional de saúde para avaliação.",
      ],
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Tetraviral?",
      resposta: ["Gestantes.", "Crianças vivendo com HIV ou expostas ao HIV."],
    },
  },
  {
    categories: [15],
    nome: "Vacina Hepatite A",
    finalidade: {
      pergunta: "Para que serve a vacina Hepatite A?",
      resposta:
        "A vacina Hepatite A serve para prevenir a infecção pelo vírus da Hepatite A.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A hepatite A é uma doença do fígado causada por um vírus que geralmente se espalha através de alimentos ou água contaminados. Quando alguém pega hepatite A pode ter sintomas como: febre, dores de barriga, enjoo, vômito, pele e os olhos amarelados.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Hepatite A?",
      resposta:
        "A vacina Hepatite A é de dose única (somente 1 dose) aos 15 meses de idade.",
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade mínima recomendada para a criança ser vacinada:",
        resposta: "15 meses de idade.",
      },
      idadeMaxima: {
        pergunta: "Idade máxima recomendada para a criança ser vacinada:",
        resposta: "4 anos, 11 meses e 29 dias.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Hepatite A é aplicada?",
      resposta: [
        "A vacina Hepatite A é aplicada na lateral da coxa (músculo vasto lateral da coxa) em crianças de até 1 ano, 11 meses e 29 dias.",
        "Em crianças a partir de 2 anos, a vacina Hepatite A é administrada na parte superior do braço direito ou esquerdo por meio de injeção no músculo deltóide (chamada via intramuscular).",
      ],
    },
    vacinacaoSimultanea: {
      pergunta:
        "A criança pode receber a vacina Hepatite A junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. A criança pode receber outras vacinas do Calendário de Vacinação junto com a Hepatite A.",
    },
    reacoesAdversas: {
      pergunta:
        "O que acontece no local em que a vacina Hepatite A foi aplicada?",
      resposta:
        "É esperado que o lugar onde a vacina foi aplicada fique dolorido e vermelho. Esses sintomas podem vir acompanhados de febre ou não. Isso é comum e geralmente ocorre entre os primeiros 2 dias depois da vacinação.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós vacinação:",
      resposta: [
        "Utilizar compressas frias no local de aplicação para alívio da dor, vermelhidão e/ou inflamação.",
        "Se a criança sentir algum desconforto incomum por vários dias ou se observar o aparecimento de alergias e febre acima de 37.9º, é importante procurar ajuda com um profissional de saúde para avaliação.",
      ],
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Hepatite A?",
      resposta: [
        "Crianças que apresentaram confirmação de alergia a algum dos componentes presentes na vacina.",
      ],
    },
  },
  {
    categories: [40],
    nome: "Vacina Varicela",
    finalidade: {
      pergunta: "Para que serve a vacina Varicela?",
      resposta: "A vacina Varicela serve para prevenir contra a catapora.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A catapora é uma doença contagiosa caracterizada pelo aparecimento de bolhas que coçam muito. Essas bolhas geralmente começam no rosto e se espalham pelo restante do corpo, podendo causar febre, dor de cabeça, cansaço e mal-estar geral.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Varicela?",
      resposta:
        "A vacina Varicela é dada como segunda dose que corresponde à vacina Tetraviral (administrada aos 15 meses de idade).",
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade mínima recomendada para a criança ser vacinada:",
        resposta: "4 anos de idade.",
      },
      idadeMaxima: {
        pergunta: "Idade máxima recomendada para a criança ser vacinada:",
        resposta: "6 anos, 11 meses e 29 dias.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Varicela é aplicada?",
      resposta:
        "A vacina Varicela é aplicada no braço direito ou esquerdo por meio de injeção sob a pele (chamada via subcutânea).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "A criança pode receber a vacina Varicela junto com outras vacinas (vacinação simultânea)?",
      resposta: [
        "Sim. A criança pode receber outras vacinas do Calendário de Vacinação junto com a Varicela, incluindo as vacinas Tríplice Viral e Febre Amarela.",
        "Caso não seja possível realizar a vacinação no mesmo dia, deve haver um intervalo de 15 a 30 dias entre as vacinas.",
      ],
    },
    reacoesAdversas: {
      pergunta:
        "O que acontece no local em que a vacina Varicela foi aplicada?",
      resposta:
        "É esperado que o lugar onde ela foi aplicada possa ficar dolorido e vermelho. Esses sintomas podem vir acompanhados de febre. Isso é comum e geralmente ocorre entre as primeiras 48 horas depois da vacinação.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós vacinação:",
      resposta: [
        "Utilizar compressas frias no local de aplicação para alívio da dor, vermelhidão e/ou inflamação.",
        "Se a criança sentir algum desconforto incomum por vários dias ou se observar o aparecimento de alergias e febre acima de 37.9º, é importante procurar ajuda com um profissional de saúde para avaliação.",
      ],
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Varicela?",
      resposta: [
        "Gestantes.",
        "Crianças menores de 9 meses de idade.",
        "Pessoas com a imunidade fraca por problemas sérios de saúde.",
        "Pessoas que tiveram confirmação de alergia grave depois de receberem a última dose da vacina Tetraviral.",
      ],
    },
  },
  {
    categories: [70],
    nome: "Vacina Dupla Bacteriana (dT)",
    finalidade: {
      pergunta: "Para que serve a vacina Dupla Bacteriana?",
      resposta:
        "A vacina Dupla Bacteriana serve para prevenir duas doenças graves causadas por bactérias: a difteria e o tétano.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "Quando alguém pega difteria, pode aparecer uma coisa parecida como uma 'pele' grossa na garganta, dificultando a respiração; já o tétano pode causar rigidez muscular, ou seja, ‘travados’ e doloridos, causando fortes câimbras.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Dupla Bacteriana?",
      resposta: [
        "A vacina Dupla Bacteriana (dT) possui 3 doses para crianças a partir de 7 anos de idade que não foram vacinadas contra difteria e tétano com as seguintes vacinas: Tríplice Bacteriana (DTP) e Pentavalente.",
        "O reforço é feito a cada 10 anos após a última dose.",
        "ATENÇÃO: O intervalo de tempo recomendado entre as doses é de no mínimo 30 dias e máximo 60 dias.",
      ],
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade recomendada para a criança ser vacinada:",
        resposta:
          "A vacina Dupla Bacteriana pode ser administrada a qualquer tempo a partir dos 7 anos de idade.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Dupla Bacteriana é aplicada?",
      resposta:
        "A vacina Difteria e Tétano é aplicada de preferência na parte superior do braço direito ou esquerdo por meio de injeção no músculo deltóide (chamada via intramuscular).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "A criança pode receber a vacina Dupla Bacteriana junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. O adolescente pode receber outras vacinas do Calendário de Vacinação junto com a Dupla Bacteriana.",
    },
    reacoesAdversas: {
      pergunta:
        "O que acontece no local em que a vacina Dupla Bacteriana foi aplicada?",
      resposta:
        "É esperado que o lugar onde ela foi aplicada fique dolorido, endurecido e vermelho, podendo ser acompanhados por febre e dores de cabeça.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós vacinação:",
      resposta: [
        "Utilizar compressas frias no local de aplicação para alívio da dor, vermelhidão e/ou inflamação.",
        "Evitar esforço físico e muitas movimentações do braço.",
        "Se o adolescente apresentar desconforto incomum por vários dias ou se observar o aparecimento de alergias e febre acima de 37.9º, é importante procurar ajuda com um profissional de saúde para avaliação.",
      ],
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Dupla Bacteriana?",
      resposta: [
        "Pessoas que apresentaram confirmação de alergia depois de receberem a última dose da vacina Dupla Bacteriana.",
        "Pessoas com imunidade fraca por problemas sérios de saúde.",
      ],
    },
  },
  {
    categories: [100],
    nome: "Vacina Tríplice Viral",
    finalidade: {
      pergunta: "Para que serve a vacina Tríplice Viral?",
      resposta:
        "A vacina Tríplice Viral serve para prevenir contra três doenças: sarampo, caxumba e rubéola.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "O sarampo, a caxumba e a rubéola são doenças contagiosas que podem causar problemas, especialmente em crianças. O sarampo causa febre e manchas vermelhas na pele; a caxumba pode causar febre, inchaço e dores na garganta; e a rubéola geralmente causa febre e o aparecimento de bolhas na pele.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Tríplice Viral?",
      resposta:
        "Recomenda-se iniciar ou completar 2 doses de acordo com a situação vacinal registrada na caderneta de vacinação. O intervalo de tempo recomendado é de 30 dias após receber a 1ª dose.",
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade mínima recomendada para o adolescente ser vacinado:",
        resposta: "A qualquer momento.",
      },
      idadeMaxima: {
        pergunta: "Idade máxima recomendada para o adolescente ser vacinado:",
        resposta: "Não há limite de idade para a administração da vacina.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Tríplice Viral é aplicada?",
      resposta:
        "A vacina Tríplice Viral é aplicada no braço direito ou esquerdo por meio de injeção subcutânea (sob a pele).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "O adolescente pode receber a vacina Tríplice Viral junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. O adolescente pode receber outras vacinas do Calendário de Vacinação junto com a Tríplice Viral.",
    },
    reacoesAdversas: {
      pergunta:
        "O que acontece no local em que a vacina Tríplice Viral foi aplicada?",
      resposta:
        "É esperado que o local da aplicação fique vermelho, duro, dolorido e com um pouco de ardência.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós vacinação:",
      resposta: [
        "Utilizar compressas frias no local de aplicação para aliviar a dor, vermelhidão e inflamação.",
        "Evitar esforço físico e muitas movimentações do braço.",
        "Se o adolescente apresentar febre acima de 37.9º ou desconforto incomum, procurar ajuda com um profissional de saúde.",
      ],
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Tríplice Viral?",
      resposta: [
        "Pessoas que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior da vacina Tríplice Viral.",
        "Pessoas com sistema imunológico muito debilitado por doenças ou medicamentos.",
      ],
      alertas: [
        "Qualquer alteração no local da aplicação, como dor intensa ou inchaço incomum, deve ser avaliada por um profissional de saúde.",
      ],
    },
  },
  {
    categories: [100],
    nome: "Vacina Hepatite B",
    finalidade: {
      pergunta: "Para que serve a vacina Hepatite B?",
      resposta:
        "A vacina Hepatite B serve para prevenir doenças causadas pelo vírus da Hepatite B.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A Hepatite B é uma doença que provoca inflamação e problemas no fígado e pode ser transmitida através do sexo sem proteção, compartilhamento de objetos contaminados e de mãe para filho.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Hepatite B?",
      resposta:
        "A vacina Hepatite B possui 3 doses para os adolescentes que não possuem comprovação da vacina registrada em caderneta.",
      alerta:
        "O intervalo de tempo recomendado entre a 1ª e a 2ª dose é de 30 dias, e entre a 2ª e a 3ª dose é de 60 dias.",
      exemplo:
        "Ex.: João possui registro da 1ª e 2ª dose da vacina da Hepatite B na caderneta, portanto deverá completar apenas com a 3ª dose.",
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade recomendada para o adolescente ser vacinado:",
        resposta: "A partir de 7 anos de idade, em qualquer momento.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Hepatite B é aplicada?",
      resposta:
        "A vacina Hepatite B é aplicada de preferência no braço direito ou esquerdo no músculo próximo ao ombro (via intramuscular).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "O adolescente pode receber a vacina Hepatite B junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. O adolescente pode receber outras vacinas do Calendário de Vacinação junto com a Hepatite B.",
    },
    reacoesAdversas: {
      pergunta: "O que acontece no local em que a vacina foi aplicada?",
      resposta:
        "Pode apresentar pequena vermelhidão no local onde a vacina foi administrada, e pode vir acompanhado de febre nas primeiras 24h após a vacinação.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós vacinação:",
      resposta: [
        "Utilizar compressas frias no local de aplicação para alívio da vermelhidão.",
        "Em caso de aumento exagerado de um dos sintomas apresentados e/ou o aparecimento de pus em grande quantidade no local, recomenda-se buscar serviço de saúde para avaliação profissional.",
      ],
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Hepatite A?",
      resposta: [
        "Crianças que apresentaram confirmação de alergia a algum dos componentes presentes na vacina.",
      ],
      alertas: [
        "Qualquer outra alteração no local ou próximo de onde a vacina foi administrada, procurar ajuda com um profissional de saúde.",
      ],
    },
  },
  {
    categories: [100],
    nome: "Vacina Febre Amarela",
    finalidade: {
      pergunta: "Para que serve a vacina Febre Amarela?",
      resposta:
        "A vacina Febre Amarela serve para prevenir contra a Febre Amarela.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A febre amarela é causada por um vírus transmitido pela picada de mosquitos. Pode causar febre, dores no corpo, dor de cabeça, náusea e vômito.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Febre Amarela?",
      resposta: "A vacina Febre Amarela possui uma dose (dose única).",
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade mínima recomendada para vacinação:",
        resposta: "A partir de 5 anos de idade, em qualquer momento.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Febre Amarela é aplicada?",
      resposta:
        "A vacina Febre Amarela é aplicada no braço direito ou esquerdo por meio de injeção sob a pele (via subcutânea).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "O adolescente pode receber a vacina Febre Amarela junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. O adolescente pode receber outras vacinas do Calendário de Vacinação junto com a Febre Amarela.",
    },
    reacoesAdversas: {
      pergunta:
        "O que acontece no local em que a vacina Febre Amarela foi aplicada?",
      resposta:
        "É esperado que o lugar onde a vacina foi aplicada fique dolorido e vermelho. O adolescente também pode ter febre e dores de cabeça, o que é comum nos primeiros 2 dias após a vacinação.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós vacinação:",
      resposta: [
        "Utilizar compressas frias no local de aplicação para alívio da dor, vermelhidão e/ou inflamação.",
        "Evitar esforço físico e movimentações excessivas do braço.",
        "Se o adolescente apresentar desconforto incomum por vários dias ou surgirem alergias e febre acima de 37,9°C, procurar um profissional de saúde para avaliação.",
      ],
      alertas: [
        "Qualquer outra alteração no local ou próximo de onde a vacina foi administrada, procurar ajuda com um profissional de saúde.",
      ],
    },
  },
  {
    categories: [100],
    nome: "Vacina Dupla Bacteriana Adulto (dT)",
    finalidade: {
      pergunta: "Para que serve a vacina Dupla Bacteriana?",
      resposta:
        "A vacina Dupla Bacteriana serve para prevenir as doenças graves causadas por bactérias: a difteria e o tétano.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "Quando alguém pega difteria, pode aparecer algo semelhante a uma 'pele' grossa na garganta, dificultando a respiração. Já o tétano pode fazer os músculos ficarem rígidos e doloridos, causando fortes câimbras.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Dupla Bacteriana?",
      resposta:
        "A vacina Dupla Bacteriana é administrada como dose de reforço para difteria e tétano, com uma dose a cada 10 anos após a última dose. Em casos de ferimentos graves, o reforço deve ser aplicado a cada 5 anos.",
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade mínima recomendada para o adolescente ser vacinado:",
        resposta:
          "A vacina Dupla Bacteriana pode ser administrada a partir dos 7 anos de idade.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Dupla Bacteriana é aplicada?",
      resposta:
        "A vacina Difteria e Tétano é aplicada de preferência no ombro do braço direito ou esquerdo por meio de injeção no músculo (via intramuscular).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "O adolescente pode receber a vacina Dupla Bacteriana junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. O adolescente pode receber outras vacinas do Calendário de Vacinação junto com a Dupla Bacteriana.",
    },
    reacoesAdversas: {
      pergunta:
        "O que acontece no local em que a vacina Dupla Bacteriana foi aplicada?",
      resposta:
        "É esperado que o local onde a vacina foi aplicada fique dolorido, endurecido e vermelho, podendo ser acompanhado de febre e dores de cabeça.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós vacinação:",
      resposta: [
        "Utilizar compressas frias no local de aplicação para alívio da dor, vermelhidão e/ou inflamação.",
        "Evitar esforço físico e movimentação excessiva do braço.",
        "Se o adolescente apresentar desconforto incomum por vários dias ou surgirem alergias e febre acima de 37,9°C, procurar ajuda com um profissional de saúde.",
      ],
      alertas: [
        "Qualquer outra alteração no local ou próximo de onde a vacina foi administrada, procurar ajuda com um profissional de saúde.",
      ],
    },
  },
  {
    categories: [110],
    nome: "Vacina HPV",
    finalidade: {
      pergunta: "Para que serve a vacina HPV?",
      resposta:
        "A vacina do HPV serve para prevenir um vírus chamado Papilomavírus Humano (HPV) que pode causar problemas de saúde como: câncer e verrugas nas partes íntimas.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "O HPV é um vírus muito comum que se pega principalmente através do contato sexual. Ele pode causar câncer de colo de útero e verrugas nas partes íntimas e ânus.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina HPV?",
      resposta: "A vacina HPV possui apenas uma dose (dose única).",
      alerta:
        "Em casos em que a pessoa tenha necessidade de receber um esquema vacinal com mais de uma dose, o intervalo de tempo recomendado entre as doses é de 2 meses entre a 1ª e 2ª dose, e 6 meses entre a 2ª e 3ª dose.",
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade mínima recomendada para o adolescente ser vacinado:",
        resposta: "9 anos de idade.",
      },
      idadeMaxima: {
        pergunta: "Idade máxima recomendada para o adolescente ser vacinado:",
        resposta: "14 anos, 11 meses e 29 dias.",
      },
    },
    condicoesEspecificas: {
      pergunta: "Condições específicas para vacinação:",
      respostas: [
        {
          titulo: "Meninos e Meninas de 9 a 14 anos com HIV/Aids:",
          resposta:
            "Pessoas de 9 a 45 anos com HIV/Aids, que fizeram transplante ou estão em tratamento de câncer recomendam-se 3 doses.",
          alerta:
            "O intervalo de tempo recomendado é de 2 meses entre a 1ª e 2ª dose. A 3ª dose deve ser aplicada 6 meses após a data da 1ª dose.",
        },
        {
          titulo: "Vítimas de Abuso Sexual de 9 a 45 anos:",
          resposta: [
            "De 9 a 14 anos: 2 doses (a 2ª dose é tomada 6 meses depois da 1ª).",
            "De 15 a 45 anos: 3 doses (a 2ª dose é tomada 2 meses depois da 1ª dose, e a 3ª dose é administrada 6 meses depois da 1ª).",
          ],
        },
      ],
    },
    localAplicacao: {
      pergunta: "Como a vacina HPV é aplicada?",
      resposta:
        "A vacina HPV é aplicada, de preferência, no ombro do braço esquerdo ou direito (via intramuscular).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "O adolescente pode receber a vacina HPV junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. O adolescente pode receber outras vacinas do Calendário de Vacinação junto com a vacina HPV.",
    },
    reacoesAdversas: {
      pergunta: "O que acontece no local em que a vacina HPV foi aplicada?",
      resposta:
        "É esperado que o local onde a vacina foi aplicada fique dolorido e vermelho. O adolescente também pode ter febre e dores de cabeça, geralmente entre os 2 primeiros dias após a vacinação.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós vacinação:",
      resposta: [
        "Utilizar compressas frias no local de aplicação para alívio da dor, vermelhidão e/ou inflamação.",
        "Evitar esforço físico e muitas movimentações do braço.",
        "Se o adolescente apresentar desconforto incomum por vários dias ou se observar o aparecimento de alergias e febre acima de 37.9º, procurar ajuda com um profissional de saúde para avaliação.",
      ],
    },
  },
  {
    categories: [110],
    nome: "Vacina Meningocócica ACWY",
    finalidade: {
      pergunta: "Para que serve a vacina meningocócica ACWY?",
      resposta:
        "A vacina meningocócica ACWY serve para prevenir a doença meningocócica causada pela bactéria dos sorogrupos A, C, W, Y.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A meningite é uma doença inflamatória que afeta as meninges, membranas que envolvem o cérebro, causada por vírus, fungos e bactérias. Essa doença é comumente mais recorrente por vírus e bactérias.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina meningocócica ACWY?",
      resposta:
        "A vacina meningocócica ACWY possui apenas uma dose (dose única) ou um reforço de acordo com a situação vacinal registrada na caderneta de vacinação.",
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade mínima recomendada para o adolescente ser vacinado:",
        resposta: "11 anos de idade.",
      },
      idadeMaxima: {
        pergunta: "Idade máxima recomendada para o adolescente ser vacinado:",
        resposta: "14 anos, 11 meses e 29 dias.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina meningocócica ACWY é aplicada?",
      resposta:
        "A vacina meningocócica ACWY é aplicada no ombro do braço esquerdo ou direito (via intramuscular).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "O adolescente pode receber a vacina meningocócica ACWY junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. A vacina meningocócica ACWY pode ser administrada com outras vacinas do Calendário Nacional de Vacinação.",
    },
    reacoesAdversas: {
      pergunta: "O que acontece no local em que a vacina foi aplicada?",
      resposta:
        "É esperado que o local onde a vacina foi aplicada fique dolorido, endurecido e vermelho, podendo ser acompanhado por febre e dores de cabeça.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós vacinação:",
      resposta: [
        "Utilizar compressas frias no local de aplicação para alívio da dor, vermelhidão e/ou inflamação.",
        "Evitar esforço físico e muitas movimentações do braço.",
        "Se o adolescente apresentar desconforto incomum por vários dias ou se observar o aparecimento de alergias e febre acima de 37.9º, é importante procurar ajuda com um profissional de saúde para avaliação.",
      ],
    },
  },
  {
    categories: [200],
    nome: "Vacina Influenza",
    finalidade: {
      pergunta: "Para que serve a vacina Influenza?",
      resposta:
        "A vacina Influenza serve para prevenir contra a gripe e ajuda a evitar outras doenças que podem afetar o nariz, a boca, a garganta e os pulmões.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A gripe é uma doença contagiosa que geralmente afeta o nariz, a garganta e os pulmões, causando sintomas como: febre, tosse, dor de garganta, nariz entupido, dores no corpo e cansaço.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Influenza?",
      resposta:
        "A vacina Influenza possui uma dose anual (somente uma dose, uma vez por ano).",
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade recomendada para o Adulto/Idoso ser vacinado:",
        resposta:
          "A vacina Influenza em dose única é recomendada a partir dos 9 anos de idade, a qualquer tempo da vida adulta.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Influenza é aplicada?",
      resposta:
        "A vacina Influenza é aplicada no ombro do braço direito ou esquerdo por meio de injeção no músculo (via intramuscular).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "O Adulto/Idoso pode receber a vacina Influenza junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. O adulto/idoso pode receber outras vacinas do Calendário de Vacinação junto com a Influenza.",
    },
  },
  {
    categories: [200],
    nome: "Vacina Dupla Bacteriana Adulto (dT)",
    finalidade: {
      pergunta: "Para que serve a vacina Dupla Bacteriana?",
      resposta:
        "A vacina Dupla Bacteriana serve para prevenir as doenças graves causadas por bactérias: a difteria e o tétano.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "Quando alguém pega difteria pode aparecer uma coisa parecida como uma 'pele' grossa na garganta, dificultando a respiração. Já o tétano pode fazer os músculos ficarem rígidos e doloridos, causando fortes câimbras.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Dupla Bacteriana?",
      resposta:
        "A vacina Dupla Bacteriana é administrada como dose de reforço para difteria e tétano com uma dose a cada 10 anos após a última dose.",
      alerta:
        "Em casos de ferimentos graves o reforço passa a ser a cada 5 anos.",
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade recomendada para o adulto ser vacinado:",
        resposta:
          "A vacina Dupla Bacteriana pode ser administrada a qualquer tempo a partir dos 7 anos de idade até a vida adulta.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Dupla Bacteriana é aplicada?",
      resposta:
        "A vacina Difteria e Tétano é aplicada de preferência no ombro do braço direito ou esquerdo por meio de injeção no músculo (via intramuscular).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "O adulto pode receber a vacina Dupla Bacteriana junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. O adulto pode receber outras vacinas do Calendário de Vacinação junto com a Dupla Bacteriana.",
    },
  },
  {
    categories: [200],
    nome: "Vacina Hepatite B",
    finalidade: {
      pergunta: "Para que serve a vacina Hepatite B?",
      resposta:
        "A vacina Hepatite B serve para prevenir doenças causadas pelo vírus da Hepatite B.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A Hepatite B é uma doença que provoca inflamação e problemas no fígado e pode ser transmitida através do sexo sem proteção, compartilhamento de objetos contaminados e de mãe para filho.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Hepatite B?",
      resposta:
        "A vacina Hepatite B possui 3 doses com intervalo de 30 dias entre a 1ª e a 2ª dose, e de 6 meses entre a 1ª e a 3ª dose.",
      alerta:
        "Se o adulto/idoso possuir o esquema vacinal incompleto, este deverá tomar apenas as doses que faltam.",
      exemplo:
        "Ex.: João possui registro da 1ª e 2ª dose da vacina Hepatite B registrada na Caderneta de Vacinação, portanto deverá tomar apenas a 3ª dose.",
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade recomendada para o adulto ser vacinado:",
        resposta: "A qualquer tempo.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Hepatite B é aplicada?",
      resposta:
        "A vacina Hepatite B é aplicada de preferência no braço direito ou esquerdo no músculo próximo ao ombro (via intramuscular).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "O adulto pode receber a vacina Hepatite B junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. O adulto pode receber outras vacinas do Calendário de Vacinação junto com a Hepatite B.",
    },
  },
  {
    categories: [200],
    nome: "Vacina Febre Amarela",
    finalidade: {
      pergunta: "Para que serve a vacina Febre Amarela?",
      resposta:
        "A vacina Febre Amarela serve para prevenir contra a Febre Amarela.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A febre amarela é causada por um vírus transmitido pela picada de mosquitos. Pode causar febre, dores no corpo, dor de cabeça, náusea e vômito.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Febre Amarela?",
      resposta: "A vacina Febre Amarela possui uma dose (dose única).",
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade mínima recomendada para vacinação:",
        resposta: "A partir de 5 anos de idade, em qualquer momento.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Febre Amarela é aplicada?",
      resposta:
        "A vacina Febre Amarela é aplicada no braço direito ou esquerdo por meio de injeção sob a pele (chamada via subcutânea).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "O adulto pode receber a vacina Febre Amarela junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. O adulto pode receber outras vacinas do Calendário de Vacinação junto com a Febre Amarela.",
    },
  },
  {
    categories: [210],
    nome: "Vacina Tríplice Viral",
    finalidade: {
      pergunta: "Para que serve a vacina Tríplice Viral?",
      resposta:
        "A vacina Tríplice Viral serve para prevenir contra três doenças: sarampo, caxumba e rubéola.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "O sarampo, a caxumba e a rubéola são doenças contagiosas que podem causar problemas, especialmente em crianças. O sarampo causa febre e manchas vermelhas na pele; a caxumba pode causar febre, inchaço e dores na garganta; e a rubéola geralmente causa febre e o aparecimento de bolhas na pele.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Tríplice Viral?",
      resposta:
        "A vacina Tríplice Viral possui duas doses, com intervalo mínimo de 30 dias entre a 1ª e a 2ª dose para adultos de até 29 anos de idade.",
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade recomendada para o adulto ser vacinado:",
        resposta:
          "Para iniciar ou completar 2 doses da vacina Tríplice Viral, é recomendado ter entre 20 a 29 anos, 11 meses e 30 dias.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Tríplice Viral é aplicada?",
      resposta:
        "A vacina Tríplice Viral é aplicada no braço direito ou esquerdo por meio de injeção sob a pele (chamada via subcutânea).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "O adulto pode receber a vacina Tríplice Viral junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. O adulto pode receber outras vacinas do Calendário de Vacinação junto com a Tríplice Viral.",
    },
  },
  {
    categories: [230],
    nome: "Vacina Tríplice Viral",
    finalidade: {
      pergunta: "Para que serve a vacina Tríplice Viral?",
      resposta:
        "A vacina Tríplice Viral serve para prevenir contra três doenças: sarampo, caxumba e rubéola.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "O sarampo, a caxumba e a rubéola são doenças contagiosas que podem causar problemas, especialmente em crianças. O sarampo causa febre e manchas vermelhas na pele; a caxumba pode causar febre, inchaço e dores na garganta; e a rubéola geralmente causa febre e o aparecimento de bolhas na pele.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Tríplice Viral?",
      resposta:
        "A vacina Tríplice Viral possui duas doses, com intervalo mínimo de 30 dias entre a 1ª e a 2ª dose para adultos de até 29 anos de idade.",
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade recomendada para o adulto ser vacinado:",
        resposta:
          "Para iniciar ou completar 2 doses da vacina Tríplice Viral, é recomendado ter entre 20 a 29 anos, 11 meses e 30 dias.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Tríplice Viral é aplicada?",
      resposta:
        "A vacina Tríplice Viral é aplicada no braço direito ou esquerdo por meio de injeção sob a pele (via subcutânea).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "O adulto pode receber a vacina Tríplice Viral junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. O adulto pode receber outras vacinas do Calendário de Vacinação junto com a Tríplice Viral.",
    },
    reacoesAdversas: {
      pergunta: "O que acontece no local em que a vacina foi aplicada?",
      resposta:
        "É esperado que o lugar onde a vacina foi aplicada fique dolorido, endurecido e vermelho, podendo ser acompanhado por febre e dores de cabeça.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós vacinação:",
      resposta: [
        "Utilizar compressas frias no local de aplicação para alívio da dor, vermelhidão e/ou inflamação.",
        "Evitar esforço físico e muitas movimentações do braço. Se o adulto apresentar desconforto incomum por vários dias, é importante procurar ajuda com um profissional de saúde para avaliação.",
      ],
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Tríplice Viral?",
      resposta: [
        "Crianças e adultos com histórico de reações alérgicas graves a qualquer componente da vacina.",
      ],
      alertas: [
        "Qualquer outra alteração no local ou próximo de onde a vacina foi administrada, procurar ajuda com um profissional de saúde.",
      ],
    },
  },
  {
    categories: [260],
    nome: "Vacina Dupla Bacteriana (dT)",
    finalidade: {
      pergunta: "Para que serve a vacina Dupla Bacteriana?",
      resposta:
        "A vacina Dupla Bacteriana serve para prevenir as doenças graves causadas por bactérias: a difteria e o tétano.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "Quando alguém pega difteria, pode aparecer uma 'pele' grossa na garganta, dificultando a respiração. Já o tétano pode fazer os músculos ficarem rígidos e doloridos, causando fortes câimbras.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Dupla Bacteriana?",
      resposta:
        "A vacina Dupla Bacteriana é administrada como dose de reforço para difteria e tétano, com uma dose a cada 10 anos após a última dose.",
      alerta:
        "Em casos de ferimentos graves, o reforço passa a ser a cada 5 anos.",
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade recomendada para o adulto/idoso ser vacinado:",
        resposta:
          "A vacina Dupla Bacteriana pode ser administrada a partir dos 7 anos de idade até a vida adulta.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Dupla Bacteriana é aplicada?",
      resposta:
        "A vacina Difteria e Tétano é aplicada de preferência no ombro do braço direito ou esquerdo por meio de injeção no músculo (via intramuscular).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "O adulto/idoso pode receber a vacina Dupla Bacteriana junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. O adulto/idoso pode receber outras vacinas do Calendário de Vacinação junto com a Dupla Bacteriana.",
    },
    reacoesAdversas: {
      pergunta: "O que acontece no local em que a vacina foi aplicada?",
      resposta:
        "É esperado que o local onde a vacina foi aplicada fique dolorido, endurecido e vermelho, podendo causar febre e desconforto temporário.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós vacinação:",
      resposta: [
        "Utilizar compressas frias no local de aplicação para alívio da dor e vermelhidão.",
        "Se houver um aumento incomum de sintomas ou qualquer alteração no local, recomenda-se buscar um profissional de saúde.",
      ],
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Dupla Bacteriana?",
      resposta: [
        "Pessoas com histórico de reações alérgicas graves a qualquer componente da vacina.",
      ],
      alertas: [
        "Qualquer alteração no local da aplicação ou sintomas incomuns devem ser avaliados por um profissional de saúde.",
      ],
    },
  },
  {
    categories: [260],
    nome: "Vacina Febre Amarela",
    finalidade: {
      pergunta: "Para que serve a vacina Febre Amarela?",
      resposta:
        "A vacina Febre Amarela serve para prevenir contra a Febre Amarela.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A febre amarela é causada por um vírus transmitido pela picada de mosquitos. Pode causar febre, dores no corpo, dor de cabeça, náusea e vômito.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Febre Amarela?",
      resposta: "A vacina Febre Amarela possui uma dose (dose única).",
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade mínima recomendada para vacinação:",
        resposta: "A partir de 5 anos de idade, em qualquer momento.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Febre Amarela é aplicada?",
      resposta:
        "A vacina Febre Amarela é aplicada no braço direito ou esquerdo por meio de injeção sob a pele (via subcutânea).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "O adulto/idoso pode receber a vacina Febre Amarela junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. O adulto/idoso pode receber outras vacinas do Calendário de Vacinação junto com a Febre Amarela.",
    },
    reacoesAdversas: {
      pergunta: "O que acontece no local em que a vacina foi aplicada?",
      resposta:
        "Pode ocorrer dor, vermelhidão e inchaço no local da injeção, além de febre leve e mal-estar em algumas pessoas.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós vacinação:",
      resposta: [
        "Descansar e hidratar-se adequadamente após a vacinação.",
        "Se houver reações adversas intensas ou prolongadas, procurar um profissional de saúde.",
      ],
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Febre Amarela?",
      resposta: [
        "Pessoas com histórico de alergia a qualquer componente da vacina.",
        "Indivíduos imunocomprometidos ou que estejam em tratamento imunossupressor.",
      ],
      alertas: [
        "Qualquer alteração no local da aplicação ou sintomas incomuns devem ser avaliados por um profissional de saúde.",
      ],
    },
  },
  {
    categories: [260],
    nome: "Vacina Hepatite B",
    finalidade: {
      pergunta: "Para que serve a vacina Hepatite B?",
      resposta:
        "A vacina Hepatite B serve para prevenir doenças causadas pelo vírus da Hepatite B.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A Hepatite B é uma doença que provoca inflamação e problemas no fígado e pode ser transmitida através do sexo sem proteção, compartilhamento de objetos contaminados e de mãe para filho.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Hepatite B?",
      resposta:
        "A vacina Hepatite B possui 3 doses com intervalo de 30 dias entre a 1ª e a 2ª dose, e de 6 meses entre a 1ª e a 3ª dose.",
      alerta:
        "Se o adulto/idoso possuir o esquema vacinal incompleto, este deverá tomar apenas as doses que faltam.",
      exemplo:
        "Ex.: João possui registro da 1ª e 2ª dose da vacina Hepatite B registrada na Caderneta de Vacinação, portanto deverá tomar apenas a 3ª dose.",
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade recomendada para o adulto/idoso ser vacinado:",
        resposta: "A partir de 60 anos de idade.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Hepatite B é aplicada?",
      resposta:
        "A vacina Hepatite B é aplicada de preferência no braço direito ou esquerdo no músculo próximo ao ombro (via intramuscular).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "O adulto/idoso pode receber a vacina Hepatite B junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. O adulto/idoso pode receber outras vacinas do Calendário de Vacinação junto com a Hepatite B.",
    },
    reacoesAdversas: {
      pergunta: "O que acontece no local em que a vacina foi aplicada?",
      resposta:
        "Pode ocorrer dor, vermelhidão e inchaço no local da injeção, além de febre leve em algumas pessoas.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós vacinação:",
      resposta: [
        "Descansar e hidratar-se adequadamente após a vacinação.",
        "Se houver reações adversas intensas ou prolongadas, procurar um profissional de saúde.",
      ],
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Hepatite B?",
      resposta: [
        "Pessoas com histórico de alergia a qualquer componente da vacina.",
        "Indivíduos com doenças hepáticas agudas ou descompensadas.",
      ],
      alertas: [
        "Qualquer alteração no local da aplicação ou sintomas incomuns devem ser avaliados por um profissional de saúde.",
      ],
    },
  },
  {
    categories: [300],
    nome: "Vacina Febre Amarela",
    finalidade: {
      pergunta: "Para que serve a vacina Febre Amarela?",
      resposta:
        "A vacina Febre Amarela serve para prevenir contra a Febre Amarela.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A vacinação contra a febre amarela é fundamental para puérperas (mulheres no período pós-parto), principalmente se elas vivem ou planejam viajar para áreas com muitos registros de casos da doença. Durante a gravidez, a vacina não é indicada, mas após o parto, a puérpera pode e deve ser vacinada, especialmente se houver risco de exposição.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Febre Amarela?",
      resposta:
        "Se a puérpera vive em área com muitos casos de Febre Amarela ou planeja viajar para essas áreas e não foi vacinada antes da gestação, a vacina pode ser administrada (dose única) após o parto.",
      atencao:
        "A amamentação deve ser suspensa por 10 dias após a vacinação, se o bebê tiver menos de 6 meses.",
      alerta:
        "Vacinas com vírus vivo atenuado (como febre amarela e tríplice viral) não são indicadas durante a gestação, mas podem ser administradas no período pós-parto, exceto em casos de amamentação de bebês com menos de 6 meses.",
    },
    indicacoes: {
      periodoVacinacao: {
        pergunta: "Período recomendado para a puérpera ser vacinada:",
        resposta:
          "A puérpera pode ser vacinada em até 45 dias após o nascimento do bebê.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Febre Amarela é aplicada?",
      resposta:
        "A vacina Febre Amarela é aplicada no braço direito ou esquerdo da puérpera por meio de injeção sob a pele (chamada via subcutânea).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "A puérpera pode receber a vacina Febre Amarela junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Não. Puérperas NÃO PODEM receber a vacina Febre Amarela junto a vacina Tríplice Viral, devendo respeitar o intervalo de tempo mínimo de 30 dias entre elas.",
      atencao:
        "Se a puérpera está amamentando um bebê com menos de 6 meses, a vacinação contra febre amarela não é recomendada. É importante considerar as orientações e a avaliação do profissional de saúde que acompanha a puérpera para garantir que todas as vacinas sejam administradas de forma correta e segura.",
    },
    reacoesAdversas: {
      pergunta: "O que acontece no local em que a vacina foi aplicada?",
      resposta:
        "Pode ocorrer dor, vermelhidão e inchaço no local da injeção, além de febre leve em algumas mulheres.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós vacinação:",
      resposta: [
        "Descansar e hidratar-se adequadamente após a vacinação.",
        "Se houver reações adversas intensas ou prolongadas, procurar um profissional de saúde.",
      ],
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Febre Amarela?",
      resposta: [
        "Puérperas que estão amamentando bebês com menos de 6 meses.",
        "Mulheres que apresentaram confirmação de alergia a algum dos componentes presentes na vacina.",
      ],
      alertas: [
        "Qualquer alteração no local da aplicação ou sintomas incomuns devem ser avaliados por um profissional de saúde.",
      ],
    },
  },
  {
    categories: [300],
    nome: "Vacina Tríplice Viral",
    finalidade: {
      pergunta: "Para que serve a vacina Tríplice Viral?",
      resposta:
        "A vacina Tríplice Viral serve para prevenir contra três doenças: sarampo, caxumba e rubéola.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A vacina Tríplice Viral, que protege contra sarampo, caxumba e rubéola, é fundamental para as puérperas (mulheres no período pós-parto) considerando a prevenção da saúde da mulher, ajudando a garantir que o recém-nascido também seja protegido através da amamentação.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Tríplice Viral?",
      resposta:
        "A vacina Tríplice Viral é de dose única (somente uma dose) após o parto.",
      atencao:
        "Após a vacinação, é recomendado que a mulher espere pelo menos um mês antes de tentar engravidar novamente. Isso ajuda a garantir que o corpo tenha desenvolvido imunidade suficiente e evita possíveis riscos relacionados à vacina.",
    },
    indicacoes: {
      periodoVacinacao: {
        pergunta: "Período recomendado para a puérpera ser vacinada:",
        resposta:
          "A puérpera pode ser vacinada em até 45 dias após o nascimento do bebê.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Tríplice Viral é aplicada?",
      resposta:
        "A vacina Tríplice Viral é aplicada no braço direito ou esquerdo por meio de injeção sob a pele (chamada via subcutânea).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "A puérpera pode receber a vacina Tríplice Viral junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Não. Puérperas NÃO PODEM receber a vacina Tríplice Viral junto a vacina Febre Amarela, devendo respeitar o intervalo de tempo mínimo de 30 dias entre elas.",
      atencao:
        "É importante considerar as orientações e a avaliação do profissional de saúde que acompanha a puérpera para garantir que todas as vacinas sejam administradas de forma correta e segura.",
    },
    reacoesAdversas: {
      pergunta: "O que acontece no local em que a vacina foi aplicada?",
      resposta:
        "Pode ocorrer dor, vermelhidão e inchaço no local da injeção, além de febre leve em algumas mulheres.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós vacinação:",
      resposta: [
        "Descansar e hidratar-se adequadamente após a vacinação.",
        "Se houver reações adversas intensas ou prolongadas, procurar um profissional de saúde.",
      ],
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Tríplice Viral?",
      resposta: [
        "Puérperas que apresentaram confirmação de alergia a algum dos componentes presentes na vacina.",
      ],
      alertas: [
        "Qualquer alteração no local da aplicação ou sintomas incomuns devem ser avaliados por um profissional de saúde.",
      ],
    },
  },
  {
    categories: [300],
    nome: "Vacina Covid-19",
    finalidade: {
      pergunta: "Para que serve a vacina Covid-19?",
      resposta:
        "A vacina contra a Covid-19 ajuda a prevenir problemas respiratórios graves que podem ser causados pela doença.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "Vacinas contra a Covid-19 são recomendadas para puérperas, seguindo as orientações necessárias de acordo com o tipo de vacina disponível. Quando a mãe se vacina, ela passa anticorpos para o bebê, protegendo-o contra a doença nos primeiros meses de vida, antes que ele possa ser vacinado. Essa proteção é fundamental para criar um ambiente seguro para a mãe, seu bebê, família e comunidade.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Covid-19?",
      resposta: [
        "Mulheres no período pós-parto sem registro de vacinação: Caso a puérpera ainda não tenha recebido nenhuma dose da vacina, é recomendada a 1ª dose com a vacina disponível.",
        "ATENÇÃO: Se a vacina utilizada for de 2 doses, a 2ª dose será aplicada, geralmente entre 3 e 8 semanas após a 1ª dose, conforme intervalo de tempo específico.",
        "Mulheres no período pós-parto com registro de vacinação: Puérperas que já completaram as doses iniciais devem tomar doses de reforço de acordo com o calendário vacinal, que inclui pelo menos um reforço anual para garantir maior proteção, especialmente contra novas variantes do vírus.",
      ],
    },
    indicacoes: {
      periodoVacinacao: {
        pergunta: "Período recomendado para a puérpera ser vacinada:",
        resposta:
          "A puérpera pode ser vacinada em até 45 dias após o nascimento do bebê.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Covid-19 é aplicada?",
      resposta:
        "A vacina Covid-19 é aplicada de preferência na parte superior do braço direito ou esquerdo por meio de injeção no músculo deltóide (chamada via intramuscular).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "A puérpera pode receber a vacina Covid-19 junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. A puérpera pode receber outras vacinas do Calendário de Vacinação junto com a vacina Covid-19.",
      atencao:
        "É importante considerar as orientações e a avaliação do profissional de saúde que acompanha a gestante ou puérpera para garantir que todas as vacinas sejam administradas de forma correta e segura.",
    },
    reacoesAdversas: {
      pergunta: "O que pode ocorrer após a vacinação?",
      resposta:
        "Reações comuns incluem dor no local da injeção, fadiga, dor de cabeça e febre leve.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós vacinação:",
      resposta: [
        "Descansar e manter-se hidratada após a vacinação.",
        "Se houver reações adversas intensas ou prolongadas, procurar um profissional de saúde.",
      ],
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Covid-19?",
      resposta: [
        "Puérperas que apresentaram confirmação de alergia a algum dos componentes presentes na vacina.",
      ],
      alertas: [
        "Qualquer alteração no local da aplicação ou sintomas incomuns devem ser avaliados por um profissional de saúde.",
      ],
    },
  },
  {
    categories: [310],
    nome: "Vacina Hepatite B",
    finalidade: {
      pergunta: "Para que serve a vacina da Hepatite B?",
      resposta:
        "A vacina Hepatite B serve para proteger a mãe e o seu bebê de doenças causadas pelo vírus da hepatite B.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A Hepatite B é uma doença que provoca inflamação e problemas no fígado e pode ser passada para outra pessoa por meio do sexo sem proteção, compartilhamento de objetos contaminados, e de mãe para filho.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Hepatite B?",
      resposta: [
        "Gestantes: A vacina Hepatite B para gestantes possui 3 doses com intervalo mínimo de 30 dias para receber a 2ª dose e 6 meses para receber a 3ª dose. Caso não seja possível completar as 3 doses durante a gestação, deverá concluir após o parto assim que possível.",
        "Mulheres no período pós-parto\n(puérperas): Se a puérpera não tiver sido vacinada durante a gestação, deve receber a 1ª dose da vacina contra a Hepatite B assim que possível, preferencialmente durante o pós-parto.\n",
        "\nATENÇÃO: O intervalo de tempo recomendado é de 30 dias entre a 1ª e a 2ª dose. A 3ª dose deve ser tomada 6 meses após a 1ª dose.\n",
      ],
    },
    indicacoes: {
      periodoVacinacao: {
        pergunta: "Idade recomendada para a gestante ser vacinada:",
        resposta:
          "A gestante pode ser vacinada, a partir da comprovação da gravidez, a qualquer tempo durante o pré-natal.",
      },
      periodoPuerpera: {
        pergunta: "Período recomendado para a puérpera ser vacinada:",
        resposta:
          "A puérpera pode ser vacinada em até 45 dias após o nascimento do bebê.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Hepatite B é aplicada?",
      resposta:
        "A vacina Hepatite B é aplicada na parte superior do braço direito ou esquerdo por meio de injeção no músculo deltóide (chamada via intramuscular).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "A gestante ou puérpera pode receber a vacina Hepatite B junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. A gestante ou puérpera pode receber outras vacinas do Calendário de Vacinação junto com a Hepatite B.",
      atencao:
        "É importante considerar as orientações e a avaliação do profissional de saúde que acompanha a gestante ou puérpera para garantir que todas as vacinas sejam administradas de forma correta e segura.",
    },
    contraIndicacoes: {
      resposta: [""],
      alertas: [
        "É importante considerar as orientações e a avaliação do profissional de saúde que acompanha a gestante ou puérpera para garantir que todas as vacinas sejam administradas de forma correta e segura.",
      ],
    },
  },
  {
    categories: [310],
    nome: "Vacina Dupla Bacteriana (dT)",
    finalidade: {
      pergunta: "Para que serve a vacina Dupla Bacteriana?",
      resposta:
        "A vacina Dupla Bacteriana serve para prevenir duas doenças graves causadas por bactérias: a difteria e o tétano.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "Durante a gestação, é importante que a mãe seja vacinada com a Dupla Bacteriana para sua proteção e do seu bebê, especialmente, contra o tétano neonatal, que é uma infecção grave que pode ocorrer em recém-nascidos.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Dupla Bacteriana?",
      resposta: [
        "Gestantes: A vacina Dupla Bacteriana para gestantes possui 3 doses com intervalo mínimo de 30 dias e máximo de 60 dias entre a 1ª e a 2ª dose. ATENÇÃO: A última dose deve ser feita 20 dias antes do parto para maior proteção da criança.",
        "Mulheres no período pós-parto (puérperas): As puérperas devem receber uma dose de reforço da vacina Dupla Bacteriana (dT), especialmente para aquelas que não receberam a vacina Tríplice Bacteriana (dTpa) que inclui proteção contra a coqueluche durante a gestação.",
      ],
    },
    indicacoes: {
      periodoVacinacao: {
        pergunta: "Idade recomendada para a gestante ser vacinada:",
        resposta:
          "A gestante pode ser vacinada, a partir da comprovação da gravidez, a qualquer tempo durante o pré-natal.",
      },
      periodoPuerpera: {
        pergunta: "Período recomendado para a puérpera ser vacinada:",
        resposta:
          "A puérpera pode ser vacinada em até 45 dias após o nascimento do bebê.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Dupla Bacteriana é aplicada?",
      resposta:
        "A vacina Dupla Bacteriana é aplicada de preferência na parte superior do braço direito ou esquerdo por meio de injeção no músculo deltóide (chamada via intramuscular).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "A gestante ou puérpera pode receber a vacina Dupla Bacteriana junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. A gestante ou puérpera pode receber outras vacinas do Calendário de Vacinação junto com a Dupla Bacteriana.",
      atencao:
        "É importante considerar as orientações e a avaliação do profissional de saúde que acompanha a gestante ou puérpera para garantir que todas as vacinas sejam administradas de forma correta e segura.",
    },
    contraIndicacoes: {
      resposta: [""],
      alertas: [
        "É importante considerar as orientações e a avaliação do profissional de saúde que acompanha a gestante ou puérpera para garantir que todas as vacinas sejam administradas de forma correta e segura.",
      ],
    },
  },
  {
    categories: [310],
    nome: "Vacina Dupla Bacteriana",
    finalidade: {
      pergunta: "Para que serve a vacina Dupla Bacteriana?",
      resposta:
        "A vacina Dupla Bacteriana serve para prevenir duas doenças graves causadas por bactérias: a difteria e o tétano.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "Durante a gestação, é importante que a mãe seja vacinada com a Dupla Bacteriana para sua proteção e do seu bebê, especialmente, contra o tétano neonatal, que é uma infecção grave que pode ocorrer em recém-nascidos.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Dupla Bacteriana?",
      resposta: [
        "A vacina Dupla Bacteriana para gestantes possui 3 doses com intervalo mínimo de 30 dias e máximo de 60 dias entre a 1ª e a 2ª dose.",
      ],
      atencao:
        "A última dose deve ser feita 20 dias antes do parto para maior proteção da criança.",
    },
    indicacoes: {
      periodoVacinacao: {
        pergunta: "Período recomendado para a puérpera ser vacinada:",
        resposta:
          "A puérpera pode ser vacinada em até 45 dias após o nascimento do bebê.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Dupla Bacteriana é aplicada?",
      resposta:
        "A vacina Dupla Bacteriana é aplicada de preferência na parte superior do braço direito ou esquerdo por meio de injeção no músculo deltóide (chamada via intramuscular).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "A gestante ou puérpera pode receber a vacina Dupla Bacteriana junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. A gestante ou puérpera pode receber outras vacinas do Calendário de Vacinação junto com a Dupla Bacteriana.",
      atencao:
        "É importante considerar as orientações e a avaliação do profissional de saúde que acompanha a gestante ou puérpera para garantir que todas as vacinas sejam administradas de forma correta e segura.",
    },
    reacoesAdversas: {
      pergunta: "O que acontece no local em que a vacina foi aplicada?",
      resposta:
        "Pode ocorrer dor, vermelhidão e inchaço no local da injeção, além de febre leve em algumas mulheres.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós vacinação:",
      resposta: [
        "Descansar e hidratar-se adequadamente após a vacinação.",
        "Se houver reações adversas intensas ou prolongadas, procurar um profissional de saúde.",
      ],
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Dupla Bacteriana?",
      resposta: [
        "Puérperas que apresentaram confirmação de alergia a algum dos componentes presentes na vacina.",
      ],
      alertas: [
        "Qualquer alteração no local da aplicação ou sintomas incomuns devem ser avaliados por um profissional de saúde.",
      ],
    },
  },
  {
    categories: [310],
    nome: "Vacina Influenza",
    finalidade: {
      pergunta: "Para que serve a vacina Influenza?",
      resposta:
        "A vacina Influenza serve para prevenir contra a gripe e ajuda a evitar outras doenças que podem afetar o nariz, a boca, a garganta e os pulmões.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A vacinação com a Influenza contribui para diminuir riscos e complicações durante a gestação, além de oferecer proteção contra a gripe nos primeiros meses de vida do seu bebê, ajudando a garantir um desenvolvimento mais saudável.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Influenza?",
      resposta: [
        "A vacina Influenza possui uma dose anual (somente uma dose, uma vez por ano).",
      ],
      atencao:
        "A vacina contra a gripe é indicada durante a gestação e também pode ser aplicada no período pós-parto, especialmente em épocas de campanha ou durante surtos de influenza.",
    },
    indicacoes: {
      periodoVacinacao: {
        pergunta: "Período recomendado para a puérpera ser vacinada:",
        resposta:
          "A puérpera pode ser vacinada em até 45 dias após o nascimento do bebê.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Influenza é aplicada?",
      resposta:
        "A vacina Influenza é aplicada na parte superior do braço direito ou esquerdo por meio de injeção no músculo deltóide (chamada via intramuscular).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "A gestante ou puérpera pode receber a vacina Influenza junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. A gestante ou puérpera pode receber outras vacinas do Calendário de Vacinação junto com a Influenza.",
      atencao:
        "É importante considerar as orientações e a avaliação do profissional de saúde que acompanha a gestante ou puérpera para garantir que todas as vacinas sejam administradas de forma correta e segura.",
    },
    reacoesAdversas: {
      pergunta: "O que acontece no local em que a vacina foi aplicada?",
      resposta:
        "Pode ocorrer dor, vermelhidão e inchaço no local da injeção, além de febre leve em algumas mulheres.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós vacinação:",
      resposta: [
        "Descansar e hidratar-se adequadamente após a vacinação.",
        "Se houver reações adversas intensas ou prolongadas, procurar um profissional de saúde.",
      ],
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Influenza?",
      resposta: [
        "Puérperas que apresentaram confirmação de alergia a algum dos componentes presentes na vacina.",
      ],
      alertas: [
        "Qualquer alteração no local da aplicação ou sintomas incomuns devem ser avaliados por um profissional de saúde.",
      ],
    },
  },
  {
    categories: [310],
    nome: "Vacina Covid-19",
    finalidade: {
      pergunta: "Para que serve a vacina Covid-19?",
      resposta:
        "A vacina contra a Covid-19 ajuda a prevenir problemas respiratórios graves que podem ser causados pela doença.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A vacinação contra a COVID-19 durante a gravidez é muito importante. Quando a mãe se vacina, ela passa anticorpos para o bebê, protegendo-o contra a doença nos primeiros meses de vida, antes que ele possa ser vacinado. Essa proteção é fundamental para criar um ambiente seguro para a mãe, seu bebê, família e comunidade.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Covid-19?",
      resposta: [
        "Gestantes que não tomaram nenhuma dose da vacina Covid-19 anteriormente, podem iniciar a vacinação com 2 doses da vacina bivalente (Comirnaty) da Pfizer com intervalo de no mínimo 30 dias entre elas.",
      ],
      atencao:
        "Recomenda-se 1 dose de reforço a cada 6 meses, mesmo que já tenham completado o esquema inicial de vacinação.",
    },
    indicacoes: {
      periodoVacinacao: {
        pergunta: "Idade recomendada para vacinação:",
        resposta:
          "Em qualquer tempo, durante o pré-natal ou em até 45 dias após o nascimento do bebê.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Covid-19 é aplicada?",
      resposta:
        "A vacina Covid-19 é aplicada de preferência na parte superior do braço direito ou esquerdo por meio de injeção no músculo deltóide (chamada via intramuscular).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "A gestante pode receber a vacina Covid-19 junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. A gestante pode receber outras vacinas do Calendário de Vacinação junto com a vacina Covid-19.",
    },
    reacoesAdversas: {
      pergunta: "O que acontece no local em que a vacina foi aplicada?",
      resposta:
        "Pode ocorrer dor, vermelhidão e inchaço no local da injeção, além de febre leve em algumas mulheres.",
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós vacinação:",
      resposta: [
        "Descansar e hidratar-se adequadamente após a vacinação.",
        "Se houver reações adversas intensas ou prolongadas, procurar um profissional de saúde.",
      ],
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Covid-19?",
      resposta: [
        "Gestantes que apresentaram confirmação de alergia a algum dos componentes presentes na vacina.",
      ],
      alertas: [
        "Qualquer alteração no local da aplicação ou sintomas incomuns devem ser avaliados por um profissional de saúde.",
      ],
    },
  },
  {
    categories: [320],
    nome: "Vacina Tríplice Bacteriana Acelular (dTpa)",
    finalidade: {
      pergunta: "Para que serve a vacina Tríplice Bacteriana?",
      resposta:
        "A vacina Tríplice Bacteriana Acelular serve para prevenir contra três doenças: Difteria, Tétano e Coqueluche.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A vacinação com a Tríplice Bacteriana Acelular (dTpa) durante a gestação é uma medida de proteção para os recém-nascidos, especialmente contra a coqueluche. A coqueluche é uma doença que causa forte tosse por semanas ou até meses.",
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Tríplice Bacteriana?",
      resposta: `A vacina Tríplice Bacteriana (dTpa) possui uma dose a cada gestação, a partir da vigésima (20ª) semana de gestação. 
        Mulheres no período pós-parto (puérperas): É recomendada uma dose da vacina Tríplice Bacteriana (dTpa) para a puérpera, caso não tenha recebido durante a gestação, para proteger o bebê contra a coqueluche, especialmente nos primeiros meses de vida, quando ainda não pode ser vacinado.`,
      atencao:
        "É recomendada uma dose da vacina Tríplice Bacteriana (dTpa) para a puérpera, caso não tenha recebido durante a gestação, para proteger o bebê contra a coqueluche, especialmente nos primeiros meses de vida, quando ainda não pode ser vacinado.",
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade recomendada para a gestante ser vacinada:",
        resposta: "A partir da 20ª semana de gravidez.",
      },
      idadeMaxima: {
        pergunta: "Período recomendado para a puérpera ser vacinada:",
        resposta:
          "A puérpera pode ser vacinada em até 45 dias após o nascimento do bebê.",
      },
    },
    localAplicacao: {
      pergunta: "Como a vacina Tríplice Bacteriana é aplicada?",
      resposta:
        "A vacina Tríplice Bacteriana é aplicada na parte superior do braço direito ou esquerdo por meio de injeção no músculo deltóide (chamada via intramuscular).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "A gestante ou puérpera pode receber a vacina Tríplice Bacteriana junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. A gestante ou puérpera pode receber outras vacinas do Calendário de Vacinação junto com a Tríplice Bacteriana.",
      atencao:
        "É importante considerar as orientações e a avaliação do profissional de saúde que acompanha a gestante ou puérpera para garantir que todas as vacinas sejam administradas de forma correta e segura.",
    },
  },
  {
    categories: [400],
    nome: "Vacina Febre Amarela",
    finalidade: {
      pergunta: "Para que serve a vacina Febre Amarela?",
      resposta:
        "A vacina Febre Amarela serve para prevenir contra a Febre Amarela.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A Febre Amarela é causada por um vírus transmitido pela picada de mosquitos. Pode causar febre, dores no corpo, dor de cabeça, náusea e vômito.",
    },
    comoTomar: {
      pergunta: "Esquema Vacinal:",
      resposta:
        "A vacina Febre Amarela possui uma dose única a partir de 5 anos de idade, podendo ser aplicada em qualquer momento.",
    },
    localAplicacao: {
      pergunta: "Como a vacina Febre Amarela é administrada?",
      resposta:
        "A vacina Febre Amarela é administrada no músculo deltóide (região externa do ombro do braço direito ou esquerdo) por meio de injeção sob a pele (via subcutânea).",
    },
    vacinacaoSimultanea: {
      pergunta:
        "O viajante pode receber a vacina Febre Amarela junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. O viajante pode receber outras vacinas do Calendário de Vacinação junto com a Febre Amarela.",
    },
  },
  {
    categories: [400],
    nome: "Vacina Dupla Bacteriana",
    finalidade: {
      pergunta: "Para que serve a vacina Dupla Bacteriana?",
      resposta:
        "A vacina Dupla Bacteriana serve para prevenir as doenças graves causadas por bactérias: a difteria e o tétano.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A difteria se caracteriza pela presença de placas branco-acinzentadas nas amígdalas ou próximas, podendo causar dificuldade para respirar. Já o tétano provoca rigidez e dores musculares, resultando em câimbras intensas.",
    },
    comoTomar: {
      pergunta: "Esquema Vacinal:",
      resposta: [
        `<li><strong style="color: #3B82F6">Para crianças menores de 7 anos:</strong> Recomenda-se iniciar ou completar o esquema vacinal com Pentavalente (2, 4 e 6 meses) e Tríplice Bacteriana (15 meses e 4 anos).</li>`,
        `<li><strong style="color: #3B82F6">Gestantes e Puérperas:</strong> Recomenda-se uma dose de dTpa (Difteria e Tétano Acelular) a partir da 20ª semana de gestação em cada gravidez. Para puérperas, a dTpa pode ser administrada até 45 dias após o parto, caso não tenham sido vacinadas durante a gestação.</li>`,
      ],
    },
    localAplicacao: {
      pergunta: "Como a vacina Dupla Bacteriana é administrada?",
      resposta:
        "As vacinas Dupla Bacteriana e Dupla Bacteriana Acelular são administradas no músculo deltóide (região externa do ombro do braço direito ou esquerdo) por meio de injeção intramuscular.",
    },
    vacinacaoSimultanea: {
      pergunta:
        "O viajante pode receber a vacina Dupla Bacteriana junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. O viajante pode receber outras vacinas do Calendário de Vacinação junto com a Dupla Bacteriana.",
    },
  },

  {
    categories: [400],
    nome: "Vacina Poliomielite (Viajantes)",
    finalidade: {
      pergunta: "Para que serve a vacina Poliomielite?",
      resposta:
        "A vacina Poliomielite (VIP) serve para prevenir contra a paralisia infantil.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "Os viajantes internacionais devem ser vacinados contra a Poliomielite se forem oriundos ou se deslocarem para áreas com recomendação de vacinação, especialmente países com circulação de poliovírus selvagem.",
    },
    comoTomar: {
      pergunta: "Esquema Vacinal:",
      resposta: [
        "A vacina Poliomielite (VIP) possui 3 doses iniciais para crianças entre 2 meses e 4 anos, 11 meses e 29 dias:",
        " <strong> 1ª Dose: </strong>2 meses de idade.",
        " <strong> 2ª Dose: </strong>4 meses de idade.",
        " <strong>3ª Dose: </strong>6 meses de idade.",
        "<strong>Dose de Reforço:</strong> 15 meses de idade.",
        "<strong>ATENÇÃO: </strong> O intervalo de tempo recomendado entre as 3 doses iniciais é de no mínimo 30 dias e no máximo 60 dias.",
      ],
    },
    localAplicacao: {
      pergunta: "Como a vacina Poliomielite é administrada?",
      resposta:
        "A vacina Poliomielite (VIP) é administrada no músculo vasto lateral da coxa (músculo vasto lateral da coxa) em crianças de até 1 ano, 11 meses e 29 dias. Em crianças a partir de 2 anos, a vacina é aplicada no músculo deltóide (região externa do ombro do braço direito ou esquerdo) por meio de injeção intramuscular.",
    },
    vacinacaoSimultanea: {
      pergunta:
        "O viajante pode receber a vacina Poliomielite junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. O viajante pode receber outras vacinas do Calendário de Vacinação junto com a Poliomielite (VIP).",
    },
  },
  {
    categories: [400],
    nome: "Vacina Tríplice Viral (Viajantes)",
    finalidade: {
      pergunta: "Para que serve a vacina Tríplice Viral?",
      resposta:
        "A vacina Tríplice Viral serve para prevenir contra três doenças: sarampo, caxumba e rubéola.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "O sarampo, a caxumba (papeira) e a rubéola são doenças contagiosas. O sarampo causa febre e manchas vermelhas na pele; a caxumba provoca febre, inchaço e dores na garganta; e a rubéola geralmente causa febre e o aparecimento de bolhas na pele.",
    },
    comoTomar: {
      pergunta: "Esquema Vacinal:",
      resposta: [
        "<li><strong style='color: #3B82F6'>Bebês de 6 meses a 11 meses e 29 dias:</strong> Dose 0 da Vacina Tríplice Viral e manter o esquema indicado no Calendário Nacional de Vacinação aos 12 meses (tríplice viral) e aos 15 meses (tetraviral);</li>",
        "<li><strong style='color: #3B82F6'>Pessoas de 12 meses a 29 anos de idade:</strong> Duas doses com intervalo mínimo de 30 dias entre a 1ª e a 2ª dose;</li>",
        "<li><strong style='color: #3B82F6'> Manter o esquema indicado no Calendário Nacional de Vacinação:</strong> 12 meses (tríplice viral) e 15 meses (tetraviral).</li>",
        "<li><strong style='color: #3B82F6'>Pessoas de 30 a 59 anos:</strong> Uma dose.</li>",
      ],
    },
    localAplicacao: {
      pergunta: "Como a vacina Tríplice Viral é administrada?",
      resposta:
        "A vacina Tríplice Viral é administrada no músculo deltóide (região externa do ombro do braço direito ou esquerdo) por meio de injeção subcutânea.",
    },
    vacinacaoSimultanea: {
      pergunta:
        "O viajante pode receber a vacina Tríplice Viral junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. O viajante pode receber outras vacinas do Calendário de Vacinação junto com a Tríplice Viral.",
    },
  },
  {
    categories: [500],
    nome: "Vacina Pneumocócica Polissacarídica 23",
    finalidade: {
      pergunta: "Para que serve a vacina Pneumocócica Polissacarídica 23?",
      resposta:
        "A vacina Pneumocócica Polissacarídica 23 serve para prevenir pneumonia, meningite, sinusite, infecção no ouvido e outras doenças causadas pela bactéria pneumococo, especialmente para grupos mais vulneráveis.",
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta:
        "A bactéria pneumococo costuma estar presente na parte respiratória de pessoas saudáveis, como nos pulmões. É transmitida por meio de gotas de saliva pelo ar, espirros ou tosse.",
    },
    comoTomar: {
      pergunta: "Qual é o esquema vacinal da Pneumocócica Polissacarídica 23?",
      resposta: [
        "A vacina Pneumocócica 23 é de dose única para indivíduos a partir de 5 anos sem comprovação de vacinação com vacinas pneumocócicas conjugadas. Reforços podem ser recomendados para grupos de risco.",
      ],
    },
    localAplicacao: {
      pergunta: "Como a vacina Pneumocócica 23 é administrada?",
      resposta:
        "A vacina Pneumocócica 23 é administrada no músculo deltóide (região externa do ombro do braço direito ou esquerdo) por meio de injeção subcutânea.",
    },
    vacinacaoSimultanea: {
      pergunta:
        "O indígena pode receber a vacina Pneumocócica 23 junto com outras vacinas (vacinação simultânea)?",
      resposta:
        "Sim. O indígena pode receber outras vacinas do Calendário de Vacinação junto com a Pneumocócica 23.",
    },
  },
  {
    categories: [600],
    nome: "Vacina Tríplice Viral",
    finalidade: {
      pergunta: "Para que serve a vacina Tríplice Viral?",
      resposta: "A vacina Tríplice Viral serve para prevenir contra três doenças: sarampo, caxumba e rubéola."
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta: "O sarampo, a caxumba e a rubéola são doenças contagiosas que podem causar problemas, especialmente em crianças; O sarampo causa febre e manchas vermelhas na pele; A caxumba pode causar febre, inchaço e dores na garganta; A rubéola geralmente causa febre e o aparecimento de bolhas na pele."
    },
    comoTomar: {
      pergunta: "Esquema Vacinal:",
      resposta: [
        "A vacina Tríplice Viral possui duas doses, com intervalo mínimo de 30 dias entre a 1ª e a 2ª dose.",
        "Pode ser administrada em qualquer idade na fase adulta."
      ]
    },
    localAplicacao: {
      pergunta: "Como a vacina Tríplice Viral é administrada?",
      resposta: "A vacina Tríplice Viral é administrada no braço direito ou esquerdo por meio de injeção sob a pele (chamada via subcutânea)."
    },
    vacinacaoSimultanea: {
      pergunta: "Profissionais da saúde podem receber a vacina Tríplice Viral junto com outras vacinas (vacinação simultânea)?",
      resposta: "Sim. Profissionais de saúde podem receber outras vacinas do Calendário de Vacinação junto com a Tríplice Viral, respeitando o intervalo mínimo de 15 dias e máximo de 30 entre cada uma das doses."
    },
    reacoesAdversas: {
      pergunta: "O que pode ocorrer no local onde a vacina foi aplicada?",
      resposta: "Pode ocorrer vermelhidão, dor leve ou inchaço no local da aplicação. Sintomas mais graves são raros."
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários após a vacinação:",
      resposta: [
        "Evitar esforços físicos intensos nas primeiras horas após a aplicação.",
        "Caso ocorram reações adversas persistentes, procurar orientação médica."
      ]
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Tríplice Viral?",
      resposta: [
        "Indivíduos com alergia severa a qualquer componente da vacina.",
        "Pessoas com sistema imunológico comprometido sem orientação médica."
      ],
      alertas: [
        "A vacina não é indicada para gestantes.",
        "Caso ocorra febre alta após a vacinação, consultar um médico."
      ]
    }
  },
  {
    categories: [600],
    nome: "Vacina Dupla Bacteriana (dT) ou Tríplice Bacteriana (dTpa)",
    finalidade: {
      pergunta: "Para que serve a vacina Dupla Bacteriana e Tríplice Bacteriana?",
      resposta: "A vacina Dupla Bacteriana serve para prevenir as doenças graves causadas por bactérias: a difteria e o tétano. A Tríplice Bacteriana é recomendada para reforço da coqueluche."
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta: "A difteria se caracteriza pela presença de placas branco-acinzentadas nas amígdalas (garganta) ou próximas, causando dificuldade para respirar. O tétano pode fazer os músculos ficarem rígidos e doloridos, causando fortes câimbras. A coqueluche é uma infecção respiratória caracterizada por crises incontroláveis de tosse seca."
    },
    comoTomar: {
      pergunta: "Esquema Vacinal:",
      resposta: [
        "Doses de reforço para dT (Dupla Bacteriana) ou dTpa (Tríplice Bacteriana) devem ser administradas a cada 10 anos após a última dose.",
        "Em casos de ferimentos graves, o reforço passa a ser a cada 5 anos."
      ]
    },
    indicacoes: {
      periodoVacinacao: {
        pergunta: "Quando é recomendado tomar a vacina?",
        resposta: "A cada 10 anos, ou a cada 5 anos em casos de ferimentos graves."
      }
    },
    localAplicacao: {
      pergunta: "Como a vacina é administrada?",
      resposta: "A vacina é aplicada na parte superior do braço direito ou esquerdo por meio de injeção no músculo deltóide (via intramuscular)."
    },
    vacinacaoSimultanea: {
      pergunta: "Profissionais da saúde podem receber a vacina Dupla Bacteriana e Tríplice Bacteriana junto com outras vacinas (vacinação simultânea)?",
      resposta: "Sim. Profissionais da saúde podem receber outras vacinas do Calendário de Vacinação junto com a Dupla Bacteriana ou Tríplice Bacteriana."
    },
    reacoesAdversas: {
      pergunta: "O que pode ocorrer no local em que a vacina foi aplicada?",
      resposta: "Pode ocorrer dor, inchaço e vermelhidão no local da aplicação. Reações sistêmicas, como febre, são raras."
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários após a vacinação:",
      resposta: [
        "Evitar atividades físicas intensas nas primeiras 24 horas.",
        "Em caso de reações adversas persistentes, buscar orientação médica."
      ]
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Dupla Bacteriana e Tríplice Bacteriana?",
      resposta: [
        "Pessoas que apresentaram reação alérgica grave (anafilaxia) a doses anteriores da vacina ou a algum de seus componentes."
      ],
      alertas: [
        "Indivíduos com doenças febris agudas devem adiar a vacinação.",
        "Consultar um médico em casos de dúvidas ou condições de saúde específicas."
      ]
    }
  },
  {
    categories: [600],
    nome: "Vacina Febre Amarela",
    finalidade: {
      pergunta: "Para que serve a vacina Febre Amarela?",
      resposta: "A vacina Febre Amarela serve para prevenir contra a Febre Amarela."
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta: "A febre amarela é uma doença causada por vírus transmitida, principalmente, pela picada de mosquitos infectados. Pode causar febre, dores no corpo, dor de cabeça, náusea e vômito."
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Febre Amarela?",
      resposta: [
        "A vacina Febre Amarela é administrada em dose única, a qualquer tempo."
      ]
    },
    indicacoes: {
      periodoVacinacao: {
        pergunta: "Quando é recomendado tomar a vacina?",
        resposta: "A qualquer tempo, sendo válida por toda a vida após a aplicação da dose única."
      }
    },
    localAplicacao: {
      pergunta: "Como a vacina é administrada?",
      resposta: "A vacina Febre Amarela é administrada no braço direito ou esquerdo por meio de injeção subcutânea."
    },
    vacinacaoSimultanea: {
      pergunta: "Profissionais da saúde podem receber a vacina Febre Amarela junto com outras vacinas (vacinação simultânea)?",
      resposta: "Sim. Profissionais da saúde podem receber outras vacinas do Calendário de Vacinação junto com a Febre Amarela, respeitando o intervalo mínimo de 15 dias e máximo de 30 entre cada uma das doses."
    },
    reacoesAdversas: {
      pergunta: "O que pode ocorrer no local em que a vacina foi aplicada?",
      resposta: "Pode ocorrer dor, vermelhidão ou inchaço no local da aplicação. Reações sistêmicas, como febre leve ou dores no corpo, são raras."
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários após a vacinação:",
      resposta: [
        "Evitar coçar ou pressionar o local da aplicação.",
        "Em caso de reações adversas persistentes, buscar orientação médica."
      ]
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Febre Amarela?",
      resposta: [
        "Pessoas com alergia grave a ovo ou a componentes da vacina.",
        "Indivíduos imunossuprimidos ou em tratamento com medicamentos imunossupressores."
      ],
      alertas: [
        "Gestantes e mulheres que amamentam devem consultar um médico antes da vacinação.",
        "Idosos acima de 60 anos devem ser avaliados por um profissional de saúde antes de receber a vacina."
      ]
    }
  },
  {
    categories: [600],
    nome: "Vacina Hepatite B",
    finalidade: {
      pergunta: "Para que serve a vacina Hepatite B?",
      resposta: "A vacina Hepatite B serve para prevenir doenças causadas pelo vírus da hepatite B."
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta: "A Hepatite B é uma doença que provoca inflamação e problemas no fígado. Ela pode ser transmitida por sexo sem proteção, compartilhamento de objetos contaminados e de mãe para filho."
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Hepatite B?",
      resposta: [
        ` vacina Hepatite B possui 3 doses:
        <br/>
        1ª dose: administrada em qualquer momento.
        <br/>
        2ª dose: após 30 dias da 1ª dose.
        <br/>
        3ª dose: após 6 meses da 1ª dose.
        `
      ]
    },
    indicacoes: {
      periodoVacinacao: {
        pergunta: "Quando a vacina Hepatite B pode ser administrada?",
        resposta: "A vacina pode ser administrada em qualquer momento na idade adulta."
      }
    },
    localAplicacao: {
      pergunta: "Como a vacina Hepatite B é administrada?",
      resposta: "A vacina Hepatite B é administrada na parte superior do braço direito ou esquerdo por meio de injeção intramuscular no músculo deltóide."
    },
    vacinacaoSimultanea: {
      pergunta: "Profissionais da saúde podem receber a vacina Hepatite B junto com outras vacinas (vacinação simultânea)?",
      resposta: "Sim. Profissionais da saúde podem receber outras vacinas do Calendário de Vacinação junto com a Hepatite B."
    },
    reacoesAdversas: {
      pergunta: "O que acontece com o local em que a vacina foi administrada?",
      resposta: "Pode ocorrer pequena vermelhidão no local da aplicação e febre leve nas primeiras 24 horas após a vacinação."
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários após a vacinação:",
      resposta: [
        "Utilizar compressas frias no local de aplicação para alívio da vermelhidão.",
        "Se houver desconforto incomum por vários dias, alergias ou febre acima de 37,9ºC, procurar um profissional de saúde para avaliação."
      ]
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Hepatite B?",
      resposta: [],
      alertas: [
        "Qualquer alteração incomum no local da aplicação deve ser avaliada por um profissional de saúde."
      ]
    }
  },
  {
    categories: [600],
    nome: "Vacina Meningocócica C ou ACWY",
    finalidade: {
      pergunta: "Para que serve a vacina Meningocócica C ou ACWY?",
      resposta: "A vacina Meningocócica C ou ACWY é indicada para prevenir a meningite."
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta: "A meningite é uma inflamação das meninges, as membranas que protegem o cérebro e a medula espinhal. Essa inflamação pode ser causada por bactérias ou vírus. A vacina é especialmente recomendada para profissionais que trabalham em laboratórios ou com pacientes imunossuprimidos."
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Meningocócica C ou ACWY?",
      resposta: [
        "A vacina Meningocócica C ou ACWY pode ser administrada em dose única ou em esquema conforme recomendação médica."
      ]
    },
    indicacoes: {
      periodoVacinacao: {
        pergunta: "Quando a vacina Meningocócica C ou ACWY deve ser administrada?",
        resposta: "A vacinação deve seguir as recomendações médicas para profissionais expostos a riscos."
      }
    },
    localAplicacao: {
      pergunta: "Como a vacina Meningocócica C ou ACWY é administrada?",
      resposta: "A vacina é aplicada na parte superior do braço direito ou esquerdo por meio de injeção intramuscular no músculo deltóide."
    },
    vacinacaoSimultanea: {
      pergunta: "Os profissionais da saúde podem receber a vacina Meningocócica C ou ACWY junto com outras vacinas (vacinação simultânea)?",
      resposta: "Sim. Os profissionais da saúde podem receber outras vacinas do Calendário de Vacinação junto com a Meningocócica C ou ACWY."
    },
    reacoesAdversas: {
      pergunta: "O que acontece com o local em que a vacina foi administrada?",
      resposta: "Pode ocorrer dor, vermelhidão e inchaço no local da aplicação."
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários após a vacinação:",
      resposta: [
        "Evitar atividades extenuantes nas primeiras 24 horas após a aplicação.",
        "Se houver reações adversas prolongadas ou intensas, procurar um profissional de saúde."
      ]
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Meningocócica C ou ACWY?",
      resposta: [],
      alertas: [
        "Pacientes com alergia severa a qualquer componente da vacina devem consultar um médico antes da vacinação."
      ]
    }
  },
  {
    categories: [600],
    nome: "Vacina Influenza",
    finalidade: {
      pergunta: "Para que serve a vacina Influenza?",
      resposta: "A vacina Influenza serve para prevenir contra a gripe e ajuda a evitar outras doenças que podem afetar o nariz, a boca, a garganta e os pulmões."
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta: "A gripe é uma doença contagiosa que geralmente afeta o nariz, a garganta e os pulmões, causando sintomas como febre, tosse, dor de garganta, nariz entupido, dores no corpo e cansaço."
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Influenza?",
      resposta: [
        "A vacina Influenza é administrada anualmente, em dose única, recomendada a partir dos 9 anos de idade."
      ]
    },
    indicacoes: {
      periodoVacinacao: {
        pergunta: "Quando a vacina Influenza deve ser administrada?",
        resposta: "A vacina Influenza deve ser administrada anualmente, a partir dos 9 anos de idade."
      }
    },
    localAplicacao: {
      pergunta: "Como a vacina Influenza é administrada?",
      resposta: "A vacina Influenza é administrada na parte superior do braço direito ou esquerdo por meio de injeção intramuscular no músculo deltóide."
    },
    vacinacaoSimultanea: {
      pergunta: "Os profissionais da saúde podem receber a vacina Influenza junto com outras vacinas (vacinação simultânea)?",
      resposta: "Sim. Profissionais da saúde podem receber outras vacinas do Calendário de Vacinação junto com a Influenza."
    },
    reacoesAdversas: {
      pergunta: "O que acontece com o local em que a vacina foi administrada?",
      resposta: "Pode ocorrer dor, vermelhidão e inchaço no local da aplicação, além de febre baixa e cansaço."
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários após a vacinação:",
      resposta: [
        "Evitar atividades físicas intensas nas primeiras 24 horas após a vacinação.",
        "Se houver reações adversas intensas ou prolongadas, procurar um profissional de saúde."
      ]
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Influenza?",
      resposta: [
        "Pessoas com alergia grave a qualquer componente da vacina, como ovo ou proteína de galinha."
      ],
      alertas: [
        "Pacientes com doenças agudas febris devem aguardar a recuperação antes de tomar a vacina."
      ]
    }
  },
  {
    categories: [600],
    nome: "Vacina Tríplice Bacteriana (dTpa)",
    finalidade: {
      pergunta: "Para que serve a vacina Tríplice Bacteriana?",
      resposta: "A vacina Tríplice Bacteriana serve para proteção contra três doenças: Difteria, Tétano e Coqueluche."
    },
    descricao: {
      pergunta: "Saiba mais:",
      resposta: "Essas três doenças podem afetar a garganta e causar problemas na respiração. Quando alguém pega Difteria, por exemplo, pode aparecer uma 'pele' grossa na garganta, dificultando a respiração. Já o Tétano causa rigidez muscular, ou seja, os músculos ficam 'travados' e doloridos. A Coqueluche faz com que a criança tenha tosse forte por vários dias."
    },
    comoTomar: {
      pergunta: "Como tomar a vacina Tríplice Bacteriana?",
      resposta: [
        "A vacina Tríplice Bacteriana é administrada como dose de reforço para difteria e tétano, com uma dose a cada 10 anos após a última dose. Em casos de ferimentos graves, o reforço passa a ser a cada 5 anos."
      ]
    },
    indicacoes: {
      idadeMinima: {
        pergunta: "Idade mínima recomendada para vacinação:",
        resposta: "15 meses de idade."
      },
      idadeMaxima: {
        pergunta: "Idade máxima recomendada para vacinação:",
        resposta: "6 anos, 11 meses e 29 dias."
      }
    },
    localAplicacao: {
      pergunta: "Como a vacina Tríplice Bacteriana é aplicada?",
      resposta: "A vacina é aplicada na lateral da coxa em crianças de até 1 ano, 11 meses e 29 dias. A partir dos 2 anos, é administrada no ombro direito ou esquerdo por meio de injeção intramuscular."
    },
    vacinacaoSimultanea: {
      pergunta: "A criança pode receber a vacina Tríplice Bacteriana junto com outras vacinas (vacinação simultânea)?",
      resposta: "Sim. A criança pode receber outras vacinas do Calendário de Vacinação junto com a Tríplice Bacteriana."
    },
    reacoesAdversas: {
      pergunta: "O que acontece no local em que a vacina Tríplice Bacteriana foi aplicada?",
      resposta: "O local da aplicação pode ficar dolorido, sensível ao toque, um pouco inchado e vermelho. Esses sintomas podem vir acompanhados de febre ou não. Isso é comum e geralmente ocorre nos primeiros 2 dias após a vacinação."
    },
    cuidadosPosVacinacao: {
      pergunta: "Cuidados necessários pós vacinação:",
      resposta: [
        "Utilizar compressas frias no local de aplicação para alívio da dor, vermelhidão e/ou inflamação.",
        "Se a criança sentir algum desconforto incomum por vários dias ou se observar o aparecimento de alergias e febre acima de 37.9º, é importante procurar ajuda com um profissional de saúde para avaliação."
      ]
    },
    contraIndicacoes: {
      pergunta: "Quem não deve tomar a vacina Tríplice Bacteriana?",
      resposta: [
        "Pessoas com alergia grave a algum componente da vacina ou que apresentem quadro de doenças agudas."
      ],
      alertas: [
        "Qualquer alteração no local de aplicação ou sintomas incomuns devem ser avaliados por um profissional de saúde."
      ]
    }
  }
];
